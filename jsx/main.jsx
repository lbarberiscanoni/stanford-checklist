import React from "react";
import ReactDOM from "react-dom";
//import Configuration from "./configuration.json";
import Page from "./Page";
import NavBar from "./NavBar";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "home",
        }
    }

    render() {
        //let config = ["touch your nose", "belly dance"];
        switch(this.state.location) { 
            case "home":
                return(
                    <NavBar />
                )
                break;
            default:
                return(
                    <Page bro={ config } diagnosis="Asystole" />
                )
        }
    }
}

ReactDOM.render(<Hello />, document.getElementById("main"))
