var mongoose = require('mongoose');
    express = require('express');
    connector = require('./../utils/collectionDriver');
    bcrypt = require('bcrypt');
module.exports.publicRoutes = function () {

    var schemaUser = new mongoose.Schema({ username: 'string', name: 'string' , email: 'string', password:'string',picture:'string'},{ collection : 'Users' });
    var modelUser = mongoose.model('User', schemaUser);

    var router = express.Router();

    router.post('/createUser/:username/:name/:email/:password/:picture', (req, resp, next)=>{
        var username = req.params.username;
            name = req.params.name;
            email = req.params.email;
            password = req.params.password;
            picture = req.params.picture;
            saltRounds = 10;
            json ={email : email};
            modelUser.findOne(json, function(err, userChecking){
                if(err){ 
                       throw err;
                }
                else{
                    if(userChecking == null){
                        bcrypt.hash(password, saltRounds, function(err, hash) {
                            var json = {username: username, name: name, email: email, password: hash, picture : picture};
                            modelUser.create(json, function(err, json){
                                if(err){throw err;}
                                else{
                                    resp.json({
                                        status : "User Created !!"
                                    });
                                }
                            });
                        });
                    }
                    else{
                            if(err){
                                throw err;
                            }
                            else{
                                resp.json({
                                    user : userChecking,
                                    status : "User Exist"
                                });
                            }
                    }
                    
                }
        });
    });
    router.post('/checkUser', (req, resp, next )=>{

        //console.log(req);
        var email = req.body.email;
            reqpassword = req.body.password;
            json = {email : email};
        
        modelUser.findOne(json, function(err, userChecking){
            if(err){ 
                   throw err;
            }
            else{
                if(userChecking == null){
                    resp.json({
                        error : "User don't Exists"
                     });
                }
                else{
                    var hash = userChecking.password;
                    bcrypt.compare(reqpassword, hash, function(err, res) {
                        if(err){
                            throw err;
                        }
                        else{
                            resp.json({
                                username : userChecking.username,
                                name : userChecking.name,
                                email : userChecking.email,
                                pseudo: userChecking.pseudo,
                                password : userChecking.password,
                                picture : userChecking.picture,
                                friendList: userChecking.friendList,
                                public_id : userChecking.public_id
                            });
                        }
                      
                    });
                    
                }
                
            }
        });
    });

    router.get('/addFriend', (req, resp, next)=>{
        console.log(req);
        var email = req.body.email;
            friendToAdd = req.body.friend;
            json = {email : email};

        

        modelUser.findOne(json, function(err, userExists){
            if(err){
                throw err;
            }
            else{
                if(userExists == null){
                    resp.json({
                        error: "User don't Exists"
                    });
                }
                else{
                    var friendListUpdated =[];
                    userExists.friendList.forEach((row)=>{
                        friendListUpdated.push(row);
                    });
                    friendListUpdated.push(friendToAdd);
                    var json = {name : userExists.name,username : userExists.username, email : userExists.email, password : userExists.password,friendList : friendListUpdated, picture : userExists.picture};
                    modelUser.updateOne(json, function(err, response){
                        if(err){
                            throw err;
                        }
                        else{
                            resp.json({
                                result : response
                            });
                        }
                    });
                }
            }
        });
    });                                                                                                                                                                                                                                                                                                                       
    router.post('/getUser', (req, resp, next )=>{

        console.log("ok");
        var email = req.body.email;
            json = { email : email };

        console.log(json);

        modelUser.findOne(json, function(err, userChecking){
            if(err){ 
                   throw err;
            }
            else{
                if(userChecking == null){
                    resp.json({
                        error : "error"
                     });
                }
                else{
                    resp.json({
                        username : userChecking.username,
                        name : userChecking.name,
                        email : userChecking.email,
                        password : userChecking.password,
                        picture : userChecking.picture,
                        friendList: userChecking.friendList,
                        public_id : userChecking.public_id
                    });
                }
                
            }
        });
    });
    router.post('/getUserFriend', (req, resp, next )=>{
        console.log("user friend");
        var email = req.body.email;
        var json = { email : email};
        modelUser.findOne(json, function(err, userChecking){
            if(err){ 
                   throw err;
            }
            else{
                if(userChecking == null){
                    resp.json({
                        error : "User don't Exists"
                     });
                }
                else{
                    resp.json({
                        username : userChecking.username,
                        name : userChecking.name,
                        email : userChecking.email,
                        password : userChecking.password,
                        friendList : userChecking.friendList
                    });
                }
                
            }
        }); 
    });

    cloudinary.config({ 
        cloud_name: 'kyzer', 
        api_key: '837624926995455', 
        api_secret: 'qpeLY8-2udmtIs5BGQUuUAShuts' 
      });
    
      
    var signature;

    router.post('/updateUserPicToCloudinary',(req, resp, next)=>{
        var imgAsBase64 = req.body.img;
        var email = req.body.email;
            json = {email : email};

        base64Img.img('data:image/png;base64,'+imgAsBase64, './uploads', ''+email, function(err, filepath) {
            modelUser.findOne(json, function(err, userExists){
                if(err){ 
                       throw err;
                }
                else{
                    if(userExists == null){
                        resp.json({
                            error : "User don't Exists"
                         });
                    }
                    else{
                        cloudinary.v2.uploader.upload(filepath,{ public_id : userExists.public_id},
                            function(error, result) {
                                if(error){
                                    console.log(error);
                                }
                                signature = result.signature;
                                console.log(result);
                                modelUser.updateOne({ _id: userExists._id }, { $set: { picture: result.secure_url }},function(err, response){
                                    if(err){
                                        throw err;
                                    }
                                    else{
                                        resp.json({
                                            result : result
                                        });
                                    }
                                });
                            });
                        
                    }
                    
                }
            });
           
        });
        
    });
    router.post('/uploadUserInfo', (req, resp, next)=>{
        var username = req.params.username;
            name = req.params.name;
            password = req.params.password;
            email = req.params.email;

            modelUser.updateOne({ email : email }, {$set : {username : username, name : name, password : password}}, (err, response)=>{
                if(err){
                    throw err;
                }
                else{
                    resp.json({
                        data : response
                    })
                }
            });
    });

    router.post('/deleteFromFriendList', (req, resp, next)=>{
        var userEmail = req.params.username;
            userFriendToDelete = req.params.userFriendToDelete;

            modelUser.findOne({email : userEmail}, (err, response)=>{
                if(err){
                    throw err;
                }
                else{
                    for(var i = response.friendList.length - 1; i >= 0; i--) {
                        if(response.friendList[i] === userFriendToDelete) {
                            response.friendList.splice(i, 1);
                            modelUser.updateOne({email : userEmail}, {$set :{friendList : response.friendList}},(err, response)=>{
                                if(err){
                                    throw err;
                                }
                                else{
                                    resp.json({
                                        data: response
                                    })
                                }
                            });
                        }
                    }
                    
                }
            });
    });
    return router;

}