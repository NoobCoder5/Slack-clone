import React from 'react'
import { useSelector,useDispatch  } from "react-redux";

const Header = () => {
    const user = useSelector(state => state.user)
    
    return (
        <>
         <div id="one" className="header">
             <div className="history"><i class="fa-solid fa-lg fa-clock-rotate-left"></i></div>
             <div className="search">
                 <input type="text" />
                 <i class="fa-solid fa-md fa-magnifying-glass"></i>
             </div>
             <div className="user"><i class="fa-solid fa-circle-question  fa-lg"></i>
             {user?<img style={{
                 width: "30px",
             }} src={user?.photoURL}/>:<i class="fa-solid fa-user"></i>}
             </div>
         </div>
        
        </>
    )
}

export default Header
