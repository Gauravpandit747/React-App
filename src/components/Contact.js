import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() =>{
    if (!isLoggedIn) {
      navigate("/login");
  }
  })
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store?.user?.isLoggedIn);

  return (
    <div>
      <h1>Contact US</h1>
      <p>This is a sample contact us page.</p>
    </div>
  );
};

export default Contact;
