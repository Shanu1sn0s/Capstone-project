import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import Result from "../components/Result";

function Shortner() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid my-10 justify-center gap-10">
        <h1 className="font-bold text-3xl text-blue-700">Scissor</h1>
        <p className="font-bold text-1xl">Welcome, {user?.displayName}</p>

      
      </div>
      <div className="flex justify-center my-auto mx-auto">
        <input className="p-2 border text-blue-500" type="text" placeholder="Your url goes here" />
        <button className="rounded-none">Shorten</button>
      </div>
        <Result/>
        <div className="mx-3">
        {user?.displayName ? (
          <button onClick={handleSignOut} className="boreder rounded-none">Logout</button>
        ) : (
          navigate("/login")
        )}
        </div>
      <Footer />
    </div>
  );
}

export default Shortner;
