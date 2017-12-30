import React from "react";
import ReactDOM from "react-dom";
import Configuration from "./configuration.json";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let nav_components = [];
		//console.log(Configuration);
		(Configuration).forEach(
			(x) => { 
				console.log(x);
				nav_components.push(<h5> { JSON.parse(x)["diagnosis_name"] }</h5>)
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

