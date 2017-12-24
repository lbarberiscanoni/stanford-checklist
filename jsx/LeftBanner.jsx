import React from "react";
import ReactDOM from "react-dom";

class LeftBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Fall 2018 News</h2>
                <p>Dr. Shuffler will be accepting MS and PhD students for the Fall of 2018.</p>
                <p>If you have questions about program admission requirements, please visit the <a href="https://www.clemson.edu/cbshs/departments/psychology/"> Clemson Psychology Department website </a> for more details.</p>
                <a href="mailto:mshuffl@clemson.edu" className="text-primary">mshuffl@clemson.edu</a>
            </div>
        )
    }
}

export default LeftBanner
