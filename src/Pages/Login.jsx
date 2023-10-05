import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
   <div>
    <p>
      Don't have an account? <Link to ="/signup">Sign up!</Link>
    </p>
      <Footer />
    </div>
  );
};

export default Login;
