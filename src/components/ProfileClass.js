import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name +" Child Constructor ");
    // create state
    this.state = {
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location"
      }
    };
  }

  async componentDidMount() {
    // All API calls here 
    console.log(this.props.name+" Child componentDidMount ");
    const userProfile = await fetch("https://api.github.com/users/Gauravpandit747");
    const json = await userProfile.json()
    // console.log(json.name)
    this.setState({
      userInfo:json
    })
  }
  
  render() {
    console.log(this.props.name+"Child render() ")
    console.log(this.userInfo)

    return (
      <div>
        <h1>Class Profile Component.</h1>
        <h2>Name:{this.state?.userInfo?.name}</h2>
        <h2>Location:{this.state?.userInfo?.location}</h2>
        <img src={this.state?.userInfo.avatar_url}/>
        {/* We do not mutate state directly */}
      </div>
    );
  }
}

export default Profile;
