import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  Timestamp,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import uniqid from "uniqid";
import { db } from "./firebase.js";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router";
import { async } from "@firebase/util";
const Text = () => {
  const [data, setdata] = useState([]);
  const [state, setstate] = useState("");
  const [message, setmessage] = useState("");
  const { name } = useParams();
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  useEffect(() => {
    const f = localStorage.getItem("channel");
    const s = localStorage.getItem("id");
  }, [name]);

  async function post() {
    set()
    setmessage("");
    const uid = uniqid();
    await setDoc(doc(db, "rooms", id, "messages", uid), {
      name: user.displayName,
      date: Timestamp.fromDate(new Date("October 24, 2021")),
      url: user.photoURL,
      message: message,
    });
  
  }
 
  
  function set() {
    const obj = {
      name: user.displayName,
      date: Timestamp.fromDate(new Date("October 24, 2021")),
      url: user.photoURL,
      message: message,
    };

    const oldData = data;
    const dd = [...oldData, obj];
    setdata(dd);
  }

  async function fetch() {
    const arr = [];
    const q = query(
      collection(db, "rooms", id, "messages"),
      orderBy("date", "asc")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });

    setdata(arr);
  }
  useEffect(() => 
   onSnapshot(query(collection(db,"rooms",id,"messages"),orderBy("date","asc")),(snapshot) => 
   setdata(snapshot.docs.map(doc => doc.data()))
   )
  , [])

  useEffect(() => {
    fetch();
  }, [id]);
 

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <div id="three">
        <div className="top">
          <h2>{name}</h2>
          <i id="co" class="fa-regular fa-lg fa-star"></i>
        </div>
        <div className="message">
          {data.map((e) => {
            return (
              <div>
                <div className="upper">
                  {user ? (
                    <img
                      style={{
                        width: "45px",
                        height: "45px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        borderRadius: "40px",
                      }}
                      src={e.url}
                    />
                  ) : (
                    <i id="ll" class="fa-solid fa-user"></i>
                  )}
                  <h4 className="user-name">{e.name}</h4>
                  <h4 className="time"></h4>
                  <br />
                </div>
                <div className="data">
                  <p className="">{e.message}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="input">
          <form
            action="
          "
          >
            <input
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              id="input"
              type="text"
            />

            <button
              onClick={(e) => {
                post(e);
              }}
              type="button"
              class="btn btn-success"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Text;
