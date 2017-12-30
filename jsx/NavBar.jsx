import React from "react";
import ReactDOM from "react-dom";
import Configuration from "./configuration.json";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let nav_components = [];
        (Configuration).forEach(
            (x) => { 
                console.log(x)
                nav_components.push(<h5> x["diagnosis"] </h5>)
            }
        )
        return(
            <div>
                <h1>NavBar </h1>
            </div>
        )
    }
}

export default NavBar

