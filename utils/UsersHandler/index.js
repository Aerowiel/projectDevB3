class UsersHandler{

  construct(){
    this.users = [];


  }

  function createUser(id, name, lastname, email, contacts){
    var user = new User(id, name, lastname, email, contacts);
    this.users.push(user)
  }

  function removeUserByEmail(email){
    this.users.splice(this.users.indexOf(getUserByEmail(email)), 1);
  }


  // Custom getters
  function getUserByNameLastname(name, lastname){
    return this.users.find( (name, lastname ) => {
      user.name = name;
      user.lastname = lastname;
    });
  }

  function getUserBySocketID(socketid){
    return this.users.find(user => user.socketid === socketid );
  }

  function getUserByID(id){
    return this.users.find(user => user.id === id );
  }

  function getUserByEmail(email){
    return this.users.find(user => user.email === email );
  }

  // Update
  function UpdateUserSocketID(socketid){

  }

}

const instance = new UserHandler()
module.exports = instance;

const User = require('../User');
