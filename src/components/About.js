import { Outlet } from "react-router";
import Profile from "./ProfileClass";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./Auth/Login";
import { useNavigate } from "react-router";

const About = () => {
  useEffect(()=>{
    console.log("UseEffect()");
    if (!isLoggedIn) {
      navigate("/login");
  }
  
    // setInterval(() =>{
    //   console.log("Hello 747")
    // },1000);
    return () =>{
      console.log("UseEffect return")
    }
  },[])
  console.log("Render()")
  const isLoggedIn = useSelector((store) => store?.user?.isLoggedIn);
  const navigate = useNavigate();

  return (
    <div>
      <h1>About US</h1>
      <p>This is a sample about us page.</p>
      <Outlet/>
      {/* <Profile name="Gaurav" /> */}
    </div>
  );
};

class About2 extends React.Component{
  constructor(props){
    console.log("Parent Constructor.")
    super(props);
  };

  componentDidMount(){
    console.log("Parent componentDidMount")
    // this.timer = setInterval(() =>{
    //   console.log("Hello")
    // },1000 )
  };

  componentWillUnmount(){
    // clearInterval(this.timer);
  }

  render() {
    console.log("Parent render.")
    return(
      <>
      <Profile name="First Child"/>
      </>
    );
  }
}

export default About;
