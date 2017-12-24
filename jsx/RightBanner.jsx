import React from "react";
import ReactDOM from "react-dom";

class RightBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <a href="https://www.clemson.edu/cbshs/departments/psychology/" target="_blank">
                    <h3>Clemson Psychology Department</h3>
                </a>
                <a href="http://newsstand.clemson.edu/mediarelations/psychology-researcher-to-use-grant-to-improve-teamwork-across-disciplines/" target="_blank">
                    <h3>NSF CAREER Grant Awarded to DIGITAL Lab!</h3>
                </a>
                <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src="assets/research_rock_stars.mp4"></iframe>
                </div>
            </div>
        )
    }
}

export default RightBanner
