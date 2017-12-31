import React from "react";
import ReactDOM from "react-dom";
import Configuration from "./configuration.json";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

	navigate(location) { 
		this.props.navigate(location)
	}

    render() {
        let nav_components = [];
		//console.log(Configuration);
		(Configuration).forEach(
			(x) => { 
				console.log(x);
				let section = JSON.parse(x)["diagnosis_name"]
				nav_components.push(<h5 onClick={ this.navigate.bind(this, section)} > { section }</h5>)
			}
		)
        return(
            <div>
                { nav_components }
            </div>
        )
    }
}

export default NavBar

