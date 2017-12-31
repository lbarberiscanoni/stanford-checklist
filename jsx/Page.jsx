import React from "react";
import ReactDOM from "react-dom";
import GeneralWarning from "./GeneralWarning";
import List from "./List";

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{ this.props.diagnosis }</h1>
                <p>By Stanford Anesthesia Cognitive Aid Group</p>
                <GeneralWarning />
                <List type="checklist" legend="Immediate" elements={ this.props.bro } />
            </div>
        )
    }
}

export default Page

