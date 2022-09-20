import React from "react";
import { Component } from "react";

class Skills extends Component {
    render() {
        return (
        <div className="Skills">
        <h1>SKILLS</h1>
        <div className="Css">
                <img src="images/css.jpg" />
                <h5>CSS</h5>
            </div>

            <div className="Java">
                <img src="images/java.jpg" />
                <h5>JAVA</h5>
            </div>
           
            <div className="Php">
                <img src="images/php.jpg" />
                <h5>PHP</h5>
            </div>
           
            <div className="Html">
                <img src="images/html.jpg" />
                <h5>HTML</h5>
            </div>

            <div className="Persen">
                <h5>CSS = 50%</h5>
                <h5>JAVA = 75%</h5>
                <h5>PHP = 80% </h5>
                <h5>HTML = 90%</h5>
            </div>
        </div>
        )
    }
}

export default Skills;

