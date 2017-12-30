import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = [] 
        switch(this.props.type) {
            case "checklist":
                this.props.elements.map(
                    (x) => { 
                        items.push(<li><input type="checkbox" /><label> { x } </label></li>)
                    }
                )
                break;
            case "signs":
                this.props.elements.map(
                    (x) => { 
                        items.push(<li> { x } </li>)
                    }
                )
                break;
            case "informational":
                this.props.elements.map(
                    (x) => { 
                        items.push(<li> { x } </li>)
                    }
                )
                break;
        }

        return(
            <form className={ this.props.type } >
                <fieldset>
                    <legend>{ this.props.legend } </legend>
                    <ol>
                        { items }
                    </ol>
                </fieldset>
            </form>
        )
    }
}

export default List
