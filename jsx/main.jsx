import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";
import Project from "./Project";
import Student from "./Student";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import NavBar from "./NavBar";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: "home" 
        }
    }

    navigate(new_location) {
        this.setState({"location": new_location})
    }

    render(){
        switch(this.state.location) { 
            case "home":
                return(
                    <div className="container">
                        <NavBar navigate={ this.navigate.bind(this) }/>
                        <Title text="Marissa L. Shuffler" />
                        <div className="row">
                            <h4 className="text-center">Assistant Professor of Industrial/Organizational Psychology at Clemson University</h4>
                            <h4 className="text-center">Director, Developing and Improving Globally Integrated Teamwork and Leadership (DIGITAL) Lab</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <LeftBanner />
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <p className="lead">Dr. Marissa Shuffler is an assistant professor of I/O Psychology at Clemson University whose research interests primarily reside in understanding and improving the work of teams and leaders operating in complex environments. </p>
                                </div>
                                <div className="row">
                                    <h5>Current research projects funded by NASA and the National Science Foundation involve investigating:</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item"> Virtual and physically distributed teams </li>
                                        <li className="list-group-item"> Multicultural teams </li>
                                        <li className="list-group-item"> Collective/shared leadership </li>
                                        <li className="list-group-item"> Multiteam systems </li>
                                        <li className="list-group-item"> Team development intervention </li>
                                        <li className="list-group-item"> Director, Developing and Improving Globally Integrated Teamwork and Leadership (DIGITAL) Lab </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6NjNiYzNhZGEwY2FjZWQ3ZQ" className="btn btn-primary" target="_blank">Curriculum Vitae</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <RightBanner />
                            </div>
                        </div>
                    </div>
                )
            case "lab":
                return(
                    <div className="container">
                        <NavBar navigate={ this.navigate.bind(this) }/>
                        <Title text="The DIGITAL Lab" />
                        <div className="row">
                            <div className="col-md-3">
                                <LeftBanner />
                            </div>
                            <div className="col-md-6">
                                <p>Our lab works in several major areas. The first area is with the Greenville Health System to explore the role of leadership and teamwork in the demanding environment of healthcare. Surveys were conducted and data has been collected for analysis within the next school year. The results from the collected data will be used in designing a new training program for leaders in GHS.</p>
                                <p>The next area is understanding virtual teamwork. Engineering students worked in teams, in which each member had a specific and integral task to complete. Surveys were conducted with the students throughout the three month study. More data collection with additional teams is expected to take place in the coming academic year.</p>
                                <p>The lab also worked to have several graduate students aid in the writing and publication of several book chapters and presentations. Some undergraduates from the CI were also able to co-author chapters.</p>
                                <p>One of the larger projects this academic year was the study performed with Artemis. The study involved test subjects playing a video game in which each player had a clearly defined role that was integral to the group's success. Players were forced to communicate and act efficiently as a unit in order to complete their tasks. CI members were responsible for running the sessions and collecting data from the game, including audio and video recordings. Data collection is expected to continue for the foreseeable future.</p>
                                <p>Undergraduates in the CI did a substantial amount of literature review. Undergraduates were taught how to search large databases for specific terms and to locate pertinent information. This literature search is paving the way for papers that are to be submitted by the CI leaders.</p>
                            </div>
                            <div className="col-md-3">
                                <RightBanner />
                            </div>
                        </div>
                    </div>
                )
            case "bio":
                return(
                    <div className="container">
                        <NavBar navigate={ this.navigate.bind(this) }/>
                        <Title text="Bio" />
                        <div className="row">
                            <div className="col-md-3">
                                <LeftBanner />
                            </div>
                            <div className="col-md-6">
                                <p>Marissa L. Shuffler has over nine years of experience conducting basic and applied research in the areas of leadership, team training, team development, and organizational effectiveness. Ms. Shuffler is an assistant professor of Industrial/Organizational Psychology at Clemson University. </p> 
                                <p>Her areas of expertise include team and leader training and development, intercultural collaboration, multi-team systems, and decision-making/adaptation, with an emphasis on high risk and complex environments. Dr. Shuffler has served as scientific task lead on several major projects, including the design of a computer-based training tool for improving critical social thinking training for Soldiers, the empirical investigation of key leadership issues in virtual and distributed teams, and  the design of training interventions aimed at improving multiteam system coordination and functioning. </p>
                                <p>Additionally, Dr. Shuffler has conducted interdisciplinary quantitative and qualitative research to assess training and development needs for military and civilian populations, including the design, implementation, and analysis of both field and laboratory experimental studies. Dr. Shuffler conducted this and similar research for a range of government, military, and other organizations, including ICF International, the U.S. Army Research Institute, the Department of Labor, the Center for Army Leadership, the Department of Homeland Security, the U.S. Air Force, TIAA-CREF, and the Four Seasons Hotel. Her work to date includes over 30 publications and 60 presentations. </p>
                            </div>
                            <div className="col-md-3">
                                <RightBanner />
                            </div>
                        </div>
                    </div>
                )
            case "research":
                return(
                    <div className="container">
                        <NavBar navigate={ this.navigate.bind(this) }/>
                        <Title text="Current Research" />
                        <div className="row">
                            <div className="col-md-3">
                                <LeftBanner />
                            </div>
                            <div className="col-md-6">
                                <Project title="Exploring leadership and followership in the context of autonomous long duration space exploration missions" status="Wrapping up in Fall 2017" content="This NASA funded research effort is a joint collaboration with the University of Central Florida (Dr. Shawn Burke, PI, & Dr. Eduardo Salas, Co-PI). We are conducting three major research efforts with this project, including a lab study utilizing a computer simulation game to examine the effects of autonomy and distribution on leadership structure; a qualitative study of high risk teams (e.g., exploration teams, mountain climbing expeditions, astronaut crews, boat racing teams) in order to assess critical leadership behaviors in these types of environments; and a field study using a NASA created testbed to assess leadership structure issues in a simulated NASA mission." />
                                <Project title="Leadership development program assessment, design, and evaluation with Greenville Health System" status="Ongoing" content="Leadership is a critical component to effective medical care, across multiple levels of healtcare organizations. Working with GHS, we will be examining current leadership development needs in healthcare environments, particularly at the team unit of analysis. We will also be taking a closer look at existing programs to determine what might make certain types of leader training and development programs more effective than others." />
                                <Project title="NSF CAREER: Teamwork Profiles as a Means for Determining Appropriate Team Development Interventions" status="Ongoing" content="This new project currently involves conducting interviews, focus groups, and observations of teams in healthcare, engineering design, and scientific research settings. We are working with Clemson's Creative Inquiry program as well as Greenville Health System to better understand the factors most critical to teams in these environments. Through qualitative data collection and analysis, as well as the analysis of archival data we have previously collected as a lab in these environments, we will produce a set of key teamwork factors for each setting that can subsequently be measured to predict teamwork profiles--the patterns of teamwork factors that shape team effectiveness in these settings.Once we identify these patterns with profiles, we will start matching them with appropriate team development interventions (TDIs) that should help maximize team outcomes." />
                            </div>
                            <div className="col-md-3">
                                <RightBanner />
                            </div>
                        </div>
                    </div>
                )
            case "students":
                return(        
                    <div className="container">
                        <NavBar navigate={ this.navigate.bind(this) }/>
                        <Title text="Meet Our Lab" />
                        <div className="row">
                            <div className="col-md-3">
                                <LeftBanner />
                            </div>
                            <div className="col-md-6">
                                <Student path="assets/billy.jpg" name="William S. Kramer" description="William is a doctoral candidate in the I/O Psychology program. He has co-authored over ten peer reviewed publications and book chapters and over twenty conference presentations. Throughout his academic career he has been the student lead in charge of managing a variety of different grants and contracts across a number of contexts (e.g. NASA, ARL). His research interests include culture, teams, leadership, and adaptation to changes in situational context." cv="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6Njg5ZjY1NGMwY2VjNWVlNA" />
                                <Student path="assets/dana.png" name="Dana Verhoeven" description="Dana is a Ph.D. student in the Industrial/Organization Psychology program. She is originally from Raleigh, NC and graduated from the University of Central Florida with a B.S. in psychology and minors in both business administration and leadership studies. Her research interests include teams, leadership, and training." cv="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6NGQ2NjU2OThkOTcxNjVkMQ" />
                                <Student path="assets/nastassia.jpg" name="Nastassia Savage" description="Nastassia is a Ph.D. student in the Industrial Organizational Psychology program. She came to Clemson University after working on her Masters in Industrial and Organizational Psychology at the University of Central Florida under Dr. Eduardo Salas. Her research interests include teams,interactional justice, leadership, and organizational health psychology." cv="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6NWU5YzRlZmY4NTBkNTg5OQ" />
                            </div>
                            <div className="col-md-3">
                                <RightBanner />
                            </div>
                        </div>
                    </div>
                )
        }
    }
}

ReactDOM.render(<Hello />, document.getElementById("main"))
