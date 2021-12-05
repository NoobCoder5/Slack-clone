import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import uniqid from "uniqid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { data } from "./Action";

import { db } from "./firebase.js";
import { async } from "@firebase/util";
const Sidebar = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [channels, setchannels] = useState([]);
  useEffect(() => {
    async function fetch() {
      const q = collection(db, "rooms");
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const channels = [];

        querySnapshot.forEach((doc) => {
          channels.push({
            id: doc.id,
            name: doc.data().name,
          });
        });
        setchannels(channels);
      });
    }
    fetch();
  }, []);

  function local(e) {
    localStorage.setItem("channel", e.name);
    localStorage.setItem("id", e.id);
  }
  async function create() {
    const id = uniqid();
    const data = prompt("Enter your channel name");
    if (!data || data === "") return alert("Please enter channel name");
    else
      await setDoc(doc(db, "rooms", id), {
        name: data,
      });
    await setDoc(doc(db, "rooms", id, "messages", "sample"), {
      nameee: "Los Angeles",
      stateee: "CA",
      counteery: "USA",
    });
  }
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(data(null))
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <div id="two">
        <div className="logo">
          <div className="name">
            <h2>{user.displayName}</h2>
          <button onClick={() => {
            logout()
          }} className="btn btn-primary mx-4">Log Out</button>
          </div>
          <div className="  item">
            <i id="icon" class="fa-solid fa-award"></i>
            <h4>Threads</h4>
          </div>
          <div className="  item">
            <i id="icon" class="fa-brands fa-artstation"></i>
            <h4>ArtStation</h4>
          </div>
          <div className="  item">
            <i id="icon" class="fa-solid fa-atom"></i>
            <h4>Atom</h4>
          </div>
          <div className="  item">
            <i id="icon" class="fa-solid fa-dice-d6"></i>
            <h4>Dice</h4>
          </div>
          <div className="item">
            <i id="icon" class="fa-solid fa-at"></i>
            <h4>At</h4>
          </div>
          <div className="  item">
            <i id="icon" class="fa-solid fa-heart"></i>
            <h4>Heart</h4>
          </div>
        </div>
        <div className="channels">
          <a
            style={{
              marginTop: "10px",
            }}
            href="#"
            className="a"
            onClick={() => {
              create();
            }}
          >
            Add Channel +
          </a>

          {channels.map((e) => {
            return (
              <div
                id="chan"
                onClick={() => {
                  local(e);
                }}
                key={e.id}
                className=" item channel"
              >
                <NavLink
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginTop: "10px",
                  }}
                  to={`/${e.name}/${e.id}`}
                >
                  # {e.name}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
