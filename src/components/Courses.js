import React from "react";
import "./Courses.css";
import CoursesCard from "./CoursesCard";
import Slideshow from "./Slideshow";
export default function Courses() {
  const images = ["./images/slider/1.png", "./images/slider/2.png"];
  return (
    <>
      <div className="courses">
        <h1 className="courses-title">Courses</h1>
        <div className="cards-container">
          <CoursesCard
            image="./images/courses/dotnet.png"
            title=".NET"
            desc="A versatile framework for building a variety of applications."
          />
          <CoursesCard
            image="./images/courses/java.png"
            title="Java"
            desc="A robust programming language used in many types of software development."
          />
          <CoursesCard
            image="./images/courses/python.png"
            title="Python"
            desc="A versatile programming language known for its simplicity and power."
          />
          <CoursesCard
            image="./images/courses/sql.png"
            title="MySQL"
            desc="A popular relational database management system for various applications."
          />
          <CoursesCard
            image="./images/courses/powerbi.png"
            title="PowerBI"
            desc="A business analytics tool for visualizing and sharing insights."
          />
          <CoursesCard
            image="./images/courses/angular.png"
            title="AngularJS"
            desc="A popular framework for building dynamic web applications."
          />
          <CoursesCard
            image="./images/courses/react.png"
            title="ReactJS"
            desc="A JavaScript library for building user interfaces efficiently."
          />
          <CoursesCard
            image="./images/courses/manual-testing.png"
            title="Manual Testing"
            desc="Manually testing software for defects without automation tools."
          />
          <CoursesCard
            image="./images/courses/automated.png"
            title="Automation Testing"
            desc="Techniques and tools to automate software testing processes."
          />
          <CoursesCard
            image="./images/courses/cyber-security.png"
            title="Cyber Security"
            desc="Protecting systems and networks from digital attacks."
          />
          <CoursesCard
            image="./images/courses/web.png"
            title="AWS"
            desc="Managing and deploying applications on AWS Cloud."
          />
          <CoursesCard
            image="./images/courses/devops.png"
            title="DevOps"
            desc="Integrating development and operations for efficient software delivery."
          />

          <CoursesCard
            image="./images/courses/linux.png"
            title="Linux"
            desc="An open-source operating system widely used in various environments."
          />
          <CoursesCard
            image="./images/courses/azure.png"
            title="Azure Admin"
            desc="Managing and deploying applications on Microsoft Azure cloud."
          />

          <CoursesCard
            image="./images/courses/digital-marketing.png"
            title="Digital Marketing"
            desc="Promoting products or services through digital channels."
          />
          <CoursesCard
            image="./images/courses/data-science.png"
            title="Data Science"
            desc="Extracting insights and knowledge from data using various tools."
          />
        </div>
      </div>
    </>
  );
}
