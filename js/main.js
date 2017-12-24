"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Title = require("./Title");

var _Title2 = _interopRequireDefault(_Title);

var _Project = require("./Project");

var _Project2 = _interopRequireDefault(_Project);

var _Student = require("./Student");

var _Student2 = _interopRequireDefault(_Student);

var _LeftBanner = require("./LeftBanner");

var _LeftBanner2 = _interopRequireDefault(_LeftBanner);

var _RightBanner = require("./RightBanner");

var _RightBanner2 = _interopRequireDefault(_RightBanner);

var _NavBar = require("./NavBar");

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello(props) {
        _classCallCheck(this, Hello);

        var _this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

        _this.state = {
            location: "home"
        };
        return _this;
    }

    _createClass(Hello, [{
        key: "navigate",
        value: function navigate(new_location) {
            this.setState({ "location": new_location });
        }
    }, {
        key: "render",
        value: function render() {
            switch (this.state.location) {
                case "home":
                    return _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(_NavBar2.default, { navigate: this.navigate.bind(this) }),
                        _react2.default.createElement(_Title2.default, { text: "Marissa L. Shuffler" }),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "h4",
                                { className: "text-center" },
                                "Assistant Professor of Industrial/Organizational Psychology at Clemson University"
                            ),
                            _react2.default.createElement(
                                "h4",
                                { className: "text-center" },
                                "Director, Developing and Improving Globally Integrated Teamwork and Leadership (DIGITAL) Lab"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_LeftBanner2.default, null)
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-6" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "row" },
                                    _react2.default.createElement(
                                        "p",
                                        { className: "lead" },
                                        "Dr. Marissa Shuffler is an assistant professor of I/O Psychology at Clemson University whose research interests primarily reside in understanding and improving the work of teams and leaders operating in complex environments. "
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "row" },
                                    _react2.default.createElement(
                                        "h5",
                                        null,
                                        "Current research projects funded by NASA and the National Science Foundation involve investigating:"
                                    ),
                                    _react2.default.createElement(
                                        "ul",
                                        { className: "list-group" },
                                        _react2.default.createElement(
                                            "li",
                                            { className: "list-group-item" },
                                            " Virtual and physically distributed teams "
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "list-group-item" },
                                            " Multicultural teams "
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "list-group-item" },
                                            " Collective/shared leadership "
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "list-group-item" },
                                            " Multiteam systems "
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "list-group-item" },
                                            " Team development intervention "
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "list-group-item" },
                                            " Director, Developing and Improving Globally Integrated Teamwork and Leadership (DIGITAL) Lab "
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "row" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6NjNiYzNhZGEwY2FjZWQ3ZQ", className: "btn btn-primary", target: "_blank" },
                                        "Curriculum Vitae"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_RightBanner2.default, null)
                            )
                        )
                    );
                case "lab":
                    return _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(_NavBar2.default, { navigate: this.navigate.bind(this) }),
                        _react2.default.createElement(_Title2.default, { text: "The DIGITAL Lab" }),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_LeftBanner2.default, null)
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-6" },
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Our lab works in several major areas. The first area is with the Greenville Health System to explore the role of leadership and teamwork in the demanding environment of healthcare. Surveys were conducted and data has been collected for analysis within the next school year. The results from the collected data will be used in designing a new training program for leaders in GHS."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "The next area is understanding virtual teamwork. Engineering students worked in teams, in which each member had a specific and integral task to complete. Surveys were conducted with the students throughout the three month study. More data collection with additional teams is expected to take place in the coming academic year."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "The lab also worked to have several graduate students aid in the writing and publication of several book chapters and presentations. Some undergraduates from the CI were also able to co-author chapters."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "One of the larger projects this academic year was the study performed with Artemis. The study involved test subjects playing a video game in which each player had a clearly defined role that was integral to the group's success. Players were forced to communicate and act efficiently as a unit in order to complete their tasks. CI members were responsible for running the sessions and collecting data from the game, including audio and video recordings. Data collection is expected to continue for the foreseeable future."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Undergraduates in the CI did a substantial amount of literature review. Undergraduates were taught how to search large databases for specific terms and to locate pertinent information. This literature search is paving the way for papers that are to be submitted by the CI leaders."
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_RightBanner2.default, null)
                            )
                        )
                    );
                case "bio":
                    return _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(_NavBar2.default, { navigate: this.navigate.bind(this) }),
                        _react2.default.createElement(_Title2.default, { text: "Bio" }),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_LeftBanner2.default, null)
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-6" },
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Marissa L. Shuffler has over nine years of experience conducting basic and applied research in the areas of leadership, team training, team development, and organizational effectiveness. Ms. Shuffler is an assistant professor of Industrial/Organizational Psychology at Clemson University. "
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Her areas of expertise include team and leader training and development, intercultural collaboration, multi-team systems, and decision-making/adaptation, with an emphasis on high risk and complex environments. Dr. Shuffler has served as scientific task lead on several major projects, including the design of a computer-based training tool for improving critical social thinking training for Soldiers, the empirical investigation of key leadership issues in virtual and distributed teams, and  the design of training interventions aimed at improving multiteam system coordination and functioning. "
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Additionally, Dr. Shuffler has conducted interdisciplinary quantitative and qualitative research to assess training and development needs for military and civilian populations, including the design, implementation, and analysis of both field and laboratory experimental studies. Dr. Shuffler conducted this and similar research for a range of government, military, and other organizations, including ICF International, the U.S. Army Research Institute, the Department of Labor, the Center for Army Leadership, the Department of Homeland Security, the U.S. Air Force, TIAA-CREF, and the Four Seasons Hotel. Her work to date includes over 30 publications and 60 presentations. "
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_RightBanner2.default, null)
                            )
                        )
                    );
                case "research":
                    return _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(_NavBar2.default, { navigate: this.navigate.bind(this) }),
                        _react2.default.createElement(_Title2.default, { text: "Current Research" }),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_LeftBanner2.default, null)
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-6" },
                                _react2.default.createElement(_Project2.default, { title: "Exploring leadership and followership in the context of autonomous long duration space exploration missions", status: "Wrapping up in Fall 2017", content: "This NASA funded research effort is a joint collaboration with the University of Central Florida (Dr. Shawn Burke, PI, & Dr. Eduardo Salas, Co-PI). We are conducting three major research efforts with this project, including a lab study utilizing a computer simulation game to examine the effects of autonomy and distribution on leadership structure; a qualitative study of high risk teams (e.g., exploration teams, mountain climbing expeditions, astronaut crews, boat racing teams) in order to assess critical leadership behaviors in these types of environments; and a field study using a NASA created testbed to assess leadership structure issues in a simulated NASA mission." }),
                                _react2.default.createElement(_Project2.default, { title: "Leadership development program assessment, design, and evaluation with Greenville Health System", status: "Ongoing", content: "Leadership is a critical component to effective medical care, across multiple levels of healtcare organizations. Working with GHS, we will be examining current leadership development needs in healthcare environments, particularly at the team unit of analysis. We will also be taking a closer look at existing programs to determine what might make certain types of leader training and development programs more effective than others." }),
                                _react2.default.createElement(_Project2.default, { title: "NSF CAREER: Teamwork Profiles as a Means for Determining Appropriate Team Development Interventions", status: "Ongoing", content: "This new project currently involves conducting interviews, focus groups, and observations of teams in healthcare, engineering design, and scientific research settings. We are working with Clemson's Creative Inquiry program as well as Greenville Health System to better understand the factors most critical to teams in these environments. Through qualitative data collection and analysis, as well as the analysis of archival data we have previously collected as a lab in these environments, we will produce a set of key teamwork factors for each setting that can subsequently be measured to predict teamwork profiles--the patterns of teamwork factors that shape team effectiveness in these settings.Once we identify these patterns with profiles, we will start matching them with appropriate team development interventions (TDIs) that should help maximize team outcomes." })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_RightBanner2.default, null)
                            )
                        )
                    );
                case "students":
                    return _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(_NavBar2.default, { navigate: this.navigate.bind(this) }),
                        _react2.default.createElement(_Title2.default, { text: "Meet Our Lab" }),
                        _react2.default.createElement(
                            "div",
                            { className: "row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_LeftBanner2.default, null)
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-6" },
                                _react2.default.createElement(_Student2.default, { path: "assets/billy.jpg", name: "William S. Kramer", description: "William is a doctoral candidate in the I/O Psychology program. He has co-authored over ten peer reviewed publications and book chapters and over twenty conference presentations. Throughout his academic career he has been the student lead in charge of managing a variety of different grants and contracts across a number of contexts (e.g. NASA, ARL). His research interests include culture, teams, leadership, and adaptation to changes in situational context.", cv: "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6Njg5ZjY1NGMwY2VjNWVlNA" }),
                                _react2.default.createElement(_Student2.default, { path: "assets/dana.png", name: "Dana Verhoeven", description: "Dana is a Ph.D. student in the Industrial/Organization Psychology program. She is originally from Raleigh, NC and graduated from the University of Central Florida with a B.S. in psychology and minors in both business administration and leadership studies. Her research interests include teams, leadership, and training.", cv: "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6NGQ2NjU2OThkOTcxNjVkMQ" }),
                                _react2.default.createElement(_Student2.default, { path: "assets/nastassia.jpg", name: "Nastassia Savage", description: "Nastassia is a Ph.D. student in the Industrial Organizational Psychology program. She came to Clemson University after working on her Masters in Industrial and Organizational Psychology at the University of Central Florida under Dr. Eduardo Salas. Her research interests include teams,interactional justice, leadership, and organizational health psychology.", cv: "https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtYXJpc3Nhc2h1ZmZsZXJ8Z3g6NWU5YzRlZmY4NTBkNTg5OQ" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "col-md-3" },
                                _react2.default.createElement(_RightBanner2.default, null)
                            )
                        )
                    );
            }
        }
    }]);

    return Hello;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Hello, null), document.getElementById("main"));