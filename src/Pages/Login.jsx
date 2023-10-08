import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null){
      navigate('/shortner')
    }
  },)

  return (
    <div>
      <p className="w-[100%] grid justify-center align-middle text-center my-20">
        <p className="font-bold my-5 text-blue-600">You would need to:⏬</p>
        <GoogleButton onClick={handleGoogleSignIn} />
      </p>
      <Footer />
    </div>
  );
};

export default Login;
