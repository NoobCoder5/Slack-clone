import React from 'react'
import db from "./firebase"
const Sidebar = () => {
    return (
        <>
           <div id="two"> 
               <div className="logo">
                   <div className="name">
                   <h2>Raja</h2>
                   <i class="fa-solid fa-lg fa-pen-to-square"></i>
                   </div>
                   <div className="  item">
                   <i id="icon" class="fa-solid fa-award"></i>
                   <h4>threads</h4>
                   </div>
                   <div className="  item">
                   <i id="icon" class="fa-solid fa-award"></i>
                   <h4>threads</h4>
                   </div> <div className="  item">
                   <i id="icon" class="fa-solid fa-award"></i>
                   <h4>threads</h4>
                   </div> <div className="  item">
                   <i id="icon" class="fa-solid fa-award"></i>
                   <h4>threads</h4>
                   </div> <div className="  item">
                   <i id="icon" class="fa-solid fa-award"></i>
                   <h4>threads</h4>
                   </div> <div className="  item">
                   <i id="icon" class="fa-solid fa-award"></i>
                   <h4>threads</h4>
                   </div>
               </div>
               <div className="channels">
                   <h4>Add Channel +</h4>
                   <div id="chan" className=" item channel">
                       # youtube
                   </div>
                   <div id="chan" className=" item channel">
                       # youtube
                   </div><div id="chan" className=" item channel">
                       # youtube
                   </div>
                   <div id="chan" className=" item channel">
                       # youtube
                   </div><div id="chan" className=" item channel">
                       # youtube
                   </div><div id="chan" className=" item channel">
                       # youtube
                   </div>
                   <div id="chan" className=" item channel">
                       # youtube
                   </div><div id="chan" className=" item channel">
                       # youtube
                   </div><div id="chan" className=" item channel">
                       # youtube
                   </div>
               </div>
           </div>
            
        </>
    )
}

export default Sidebar
