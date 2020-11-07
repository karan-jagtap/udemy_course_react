import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  handleClick = (e, course) => {
    e.preventDefault();
    const { id, title } = course;
    this.props.history.push(`${this.props.match.url}/${id}/${title}`);
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <React.Fragment>
                <article
                  className="Course"
                  key={course.id}
                  onClick={(e) => this.handleClick(e, course)}
                >
                  {course.title}
                </article>
              </React.Fragment>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Courses;
