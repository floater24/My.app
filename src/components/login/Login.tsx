import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      {/* <h2>ログインページです。</h2> */}

      <div className="loginLogo">
        <img src="./bigsubmarine.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
};

export default Login;
