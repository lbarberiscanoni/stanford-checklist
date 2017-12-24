import React from "react";
import ReactDOM from "react-dom";

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="thumbnail">
                <div className="caption">
                    <h3>{ this.props.title }</h3>
                    <h4 className="text-muted">{ this.props.status } </h4>
                    <p>{ this.props.content }</p>
                </div>
            </div>
        )
    }
}

export default Project
