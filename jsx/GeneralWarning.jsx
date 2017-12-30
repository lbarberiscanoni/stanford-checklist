import React from "react";
import ReactDOM from "react-dom";

class GeneralWarning extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let warnings = ["CALL FOR HELP", "CALL FOR CODE CART", "INFORM TEAM"]
        let items = [] 
        warnings.map((x) => { items.push(<h4><li> { x } </li></h4> )})
        return(
            <ol>
                { items }
            </ol>
        )
    }
}

export default GeneralWarning

