import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
   function op(){
    const grid = document.querySelector(".op");
    const item = document.querySelector(".fa-bars");
    // item.removeEventListener("item",null)
   console.log("op");
   grid.classList.toggle("show");
 
   }
  return (
    <>
      <div id="one" className="header">
        <div className="history">
          <i class="fa-solid fa-lg fa-clock-rotate-left"></i>
          <i
            onClick={() => {
               op()
            }}
            class="fa-solid fa-2x fa-bars"
          ></i>
        </div>
        <div className="search">
          <input type="text" />
          <i class="fa-solid fa-md fa-magnifying-glass"></i>
        </div>
        <div className="user">
          {user ? (
            <img
              style={{
                width: "30px",
              }}
              src={user?.photoURL}
            />
          ) : (
            <i class="fa-solid fa-user"></i>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
