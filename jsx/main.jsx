import React from "react";
import ReactDOM from "react-dom";
//import Configuration from "./configuration.json";
import Page from "./Page";
import SearchBar from "./SearchBar";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "home",
        }
    }

	navigate(newLocation) { 
		alert(newLocation)
		//this.setState({
	//		"location": newLocation,
	//	})
	}

    render() {
        switch(this.state.location) { 
            case "home":
                return(
					<div>
						<SearchBar navigate={ this.navigate.bind(this)} />
					</div>
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
