import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid,
  ProfileCard,
  Button,
  SnackbarContent,
  CustomInput
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import { InputLabel } from "material-ui";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";
import avatar from "assets/img/faces/marc.jpg";

class Dashboard extends React.Component {
  itemsForInterested = [1,2]

  state = {
    isHidden: false,
    listInterested : true,
    listView : true,
    listStandBy : true,
    searchJob : true
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const items = [{name : "item1", link:"link1", key:"123"},{ name : "name2", link: "link2", key:"1234"},{name: "Sogeti", link:"link1", key:""}, {name:"Akka", link:"link1", key:""},{name: "Sogeti", link:"link1", key:""}, {name:"Akka", link:"link1", key:""}]
    var listItems = items.map(function(item) {
      return (
        <div style={{width:'30%', float:'left', marginRight: '20px', marginBottom: '20px'}}>
          <ProfileCard 
                    avatar={avatar}
                    subtitle={item.name}
                    title={item.link}
                    description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                    footer={
                      <Button color="primary" round>
                        Check
                      </Button>
                    }
          />
        </div>
      );
    });

    var count = 0
    const itemStandBy = [{name: "Sogeti", link:"", key:""}, {name:"Akka", link:"", key:""},{name: "Sogeti", link:"", key:""}, {name:"Akka", link:"", key:""},{name: "Sogeti", link:"", key:""}, {name:"Akka", link:"", key:""}]
    var listStandBy = itemStandBy.map(function(item){
      count +=1;
      return(
          <SnackbarContent
                    message={item.name}
                    close
                    // icon={avatar}
          />
      )
    });

    const itemVisitOnProfil = [{name: "Sogeti", link: "link1", key: ""},{name: "Akka",link:"link2", key:""},{name: "Sogeti", link:"", key:""}, {name:"Akka", link:"", key:""},{name: "Sogeti", link:"", key:""}, {name:"Akka", link:"", key:""}]
    var listItemVisitOnProfil = itemVisitOnProfil.map(function(item){
      return(
        <RegularCard
                  headerColor="blue"
                  cardTitle={item.name}
                  subheader={item.name}
                  content="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                  footer={
                    <Button color="blue" round>
                      Check
                    </Button>
                  }
        />
      )
    });
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3} onClick={this.onClickProfileUser.bind(this)}>
            <StatsCard 
              icon={ContentCopy}
              iconColor="orange"
              title="Dashboard"
              description="Your Profil"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: "Some Informations are needed ..", href: "#pablo" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3} onClick={this.onCLickOnStandBy.bind(this)}>
            <StatsCard
              icon={Accessibility}
              iconColor="red"
              title="En Attente"
              description={count}
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3} onClick={this.onClickListInterested.bind(this)}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Interested By You"
              description="75"
              statIcon={LocalOffer}
              statText="Tracked from Github"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3} onClick={this.onClickListView.bind(this)}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title="Visites"
              description="+245"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <Grid container style={{marginTop: '30px'}}>
          {!this.state.isHidden && <ItemGrid xs={12} sm={6} md={12} id="profileUser">
            <ProfileCard
              avatar={avatar}
              subtitle="CEO / CO-FOUNDER"
              title="Alec Thompson"
              description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
              content ={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Company (disabled)"
                        id="company-disabled"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>
                        About me
                      </InputLabel>
                      <CustomInput
                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={
                <Button color="primary" round>
                  Modify Your Profil
                </Button>
              }
            />
          </ItemGrid>
          }
          {!this.state.listInterested && <ItemGrid xs={12} sm={12} md={12}>
              {listItems}
            </ItemGrid>
          }
          {!this.state.listView && <ItemGrid xs={12} sm={12} md={12}>
            {listItemVisitOnProfil}
            </ItemGrid>
          }
          {!this.state.listStandBy && <ItemGrid xs={12} sm={12} md={12}>
              {listStandBy}
          </ItemGrid>
          }
          {!this.state.searchJob && <ItemGrid xs={12} sm= {12} md={12}>
              
          </ItemGrid>


          }
        </Grid>
        {/* <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Daily Sales"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    55%
                  </span>{" "}
                  increase in today sales.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 4 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Email Subscriptions"
              text="Last Campaign Performance"
              statIcon={AccessTime}
              statText="campaign sent 2 days ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              }
              chartColor="red"
              title="Completed Tasks"
              text="Last Campaign Performance"
              statIcon={AccessTime}
              statText="campaign sent 2 days ago"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <TasksCard />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="Employees Stats"
              cardSubtitle="New employees on 15th September, 2016"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid> */}
      </div>
    );
  }
  onClickProfileUser(){
    console.log(this.state.isHidden);
    this.setState({
      isHidden: !this.state.isHidden
    })
    if(this.state.listInterested == false){
      this.setState({
        listInterested: !this.state.listInterested
      })
    }
    if(this.state.listView == false){
      this.setState({
        listView: !this.state.listView
      })
    }
    if(this.state.listStandBy == false){
      this.setState({
        listStandBy: !this.state.listStandBy
      })
    }
  }
  onClickListInterested(){
    this.setState({
      listInterested: !this.state.listInterested })

    if(this.state.isHidden == false){
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    if(this.state.listView == false){
      this.setState({
        listView: !this.state.listView
      })
    }
    if(this.state.listStandBy == false){
      this.setState({
        listStandBy: !this.state.listStandBy
      })
    }
  }
  onClickListView(){
    this.setState({
      listView: !this.state.listView })

      if(this.state.isHidden == false){
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      if(this.state.listInterested == false){
        this.setState({
          listInterested: !this.state.listInterested
        })
      }
      if(this.state.listStandBy == false){
        this.setState({
          listStandBy: !this.state.listStandBy
        })
      }
  }
  onCLickOnStandBy(){
    this.setState({
      listStandBy: !this.state.listStandBy })

      if(this.state.isHidden == false){
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      if(this.state.listInterested == false){
        this.setState({
          listInterested: !this.state.listInterested
        })
      }
      if(this.state.listView == false){
        this.setState({
          listView: !this.state.listView
        })
      }
  }

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
