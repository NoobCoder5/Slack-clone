import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Text from "./Text";
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { useSelector,useDispatch  } from "react-redux";

import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const App = () => {

  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const provider = new GoogleAuthProvider();
  // const [user, setuser] = useState(null);
  const auth = getAuth();
  auth.languageCode = "it";
  
  const user = useSelector(state => state.user)
 
 

  useEffect(() => {
    const chan = localStorage.getItem("channel");
    const id = localStorage.getItem("id");
    
    setname(chan);
    setid(id);
  }, []);
  
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <div className="op">
            <Header />
            <Sidebar />
            <Switch>
              <Route exact path="/:name/:id" component={Text}></Route>
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
