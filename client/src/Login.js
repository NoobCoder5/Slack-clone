import { async } from "@firebase/util";
import React, { useState, useEffect }from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useSelector,useDispatch  } from "react-redux";

import {data} from "./Action"
const Login = () => {
 const [user, setuser] = useState([])
  const auth = getAuth();
  auth.languageCode = "it";
  const oo = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log(oo);
  
  const provider = new GoogleAuthProvider();
  async function login() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
     
        dispatch(data(user))

      
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div>
      <button onClick={() => {
        login()
      }}>login</button>
    </div>
  );
};

export default Login;
