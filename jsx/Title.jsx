import React from "react";
import ReactDOM from "react-dom";

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <h1 className="text-center">{ this.props.text }</h1>
            </div>
        )
    }
}

export default Title
