import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { signInWithRedirect } from "firebase/auth";
import loading from "./1826-slack-app-loader(1).mp4";
import { data } from "./Action";
const Login = () => {
  const [user, setuser] = useState([]);
  const [state, setstate] = useState(false);
  const oo = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const auth = getAuth();
  console.log(auth);
  console.log(auth.currentUser);
  const provider = new GoogleAuthProvider();
  auth.languageCode = "it";
  async function login() {
    signInWithRedirect(auth, provider);
   
  }
  
  useEffect(() => {
    if(!auth.currentUser) setstate(true)
    onAuthStateChanged(auth, (user) => {
      if(auth.currentUser) dispatch(data(auth.currentUser))
      dispatch(data(user))
      setstate(false)
    });
  }, []);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      {state ? (
        <div className="video">
          <video id="video" loop autoPlay="true" src={loading}></video>
        </div>
      ) : (
        <div className="login">
          <h1 id="hhh">SIGN IN YOUR SLACK </h1>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <button
            className="btn btn-primary px-4"
            onClick={() => {
              login();
            }}
          >
            login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
