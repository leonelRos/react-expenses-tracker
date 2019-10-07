import React from "react";
// import {Link} from "react-router-dom";
import NavBar from "../../NavBar/NavBar";

const ExpensePage =(props) => {
    return(
        <div className="ExpensePage">
            <NavBar 
            use={props.user}
            handleLogout={props.handleLogout}
            />
        </div>
    )
}

export default ExpensePage;