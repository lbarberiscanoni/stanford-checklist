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
		this.setState({
			"location": newLocation,
		})
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
				let config = ["belly dance", "touch your nose"]
                return(
                    <Page navigate={ this.navigate.bind(this)} bro={ config } diagnosis={ this.state.location } />
                )
        }
    }
}

ReactDOM.render(<Hello />, document.getElementById("main"))
