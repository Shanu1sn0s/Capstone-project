import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

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
        <h1 className="font-bold text-3xl">Shortener</h1>
        <p className="font-bold text-1xl float-right">Welcome, {user?.displayName}</p>

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
