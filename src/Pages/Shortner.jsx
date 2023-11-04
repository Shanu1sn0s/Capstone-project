import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import axios from "axios";

function Shortner() {
const [input, setInput] =useState("");
const [result, setResult] =useState("");
const [loader, setLoader] =useState("false");

const fetchData = async () =>{
  try{
    setLoader("true")
    const res = await axios(`https://api-ssl.bitly.com/v4/shorten= ${input}`)
    setLoader("false")
    setResult(res.data.result.full_short_link)
  } catch(err) {
    alert(err)
  } finally{

  }
};
const handleClick =() =>{
  fetchData();
  setInput("")
}

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
        <input
          value={input}
          className="p-2 border text-blue-500 w-[250px]"
          type="text"
          placeholder="Your url goes here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick} className="rounded-none">
          Shorten
        </button>
      </div>
      <div className="flex justify-center mx-auto my-5 text-center gap-">
       {loader ==="true" ? <p>Loading🔄</p> : <p className="text-red-500 border w-[290px] p-2">{result}</p> }
        <CopyToClipboard>
          <button className="">
            <FaCopy />
          </button>
        </CopyToClipboard>
      </div>
      <div className="mx-3">
        {user?.displayName ? (
          <button onClick={handleSignOut} className="boreder rounded-none">
            Logout
          </button>
        ) : (
          navigate("/login")
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Shortner;
