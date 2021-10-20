import React from 'react'
import "./style.css"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Text from "./Text"
const App = () => {
    return (
        <>
           <div className="op">
            <Header/>
            <Sidebar/>
            <Text/>
           </div>
        </>
    )
}

export default App
