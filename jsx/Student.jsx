import React from "react";
import ReactDOM from "react-dom";

class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="thumbnail">
                        <img src={ this.props.path } alt="Card image cap"></img>
                        <div className="caption">
                            <h3>{ this.props.name }</h3>
                            <p>{ this.props.description }</p>
                        </div>
                        <a className="btn btn-primary form-control" href={ this.props.cv } target="_blank">Curriculum Vitae</a>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default Student
