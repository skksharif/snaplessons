import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import './about.css';
import AboutCard from './cards/AboutCard';
import Slideshow from "./Slideshow";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const images = [
    "./images/slider/1.png",
    "./images/slider/2.png",

  ];
  return (
    <>
      <div className="about-container">
  
        <h1>Learning is the key to achieving <br />and sustaining success</h1>
        <div className="about-content">
          <div className="about-left" data-aos="fade-left">
            <img src="./images/about/career-path.png" alt="about us" />
          </div>
          <div className="about-right" data-aos="fade-right">
            <h2>Why Snaplessons?</h2>
            <p><b>A Trusted Partner in Transforming Job seekers into Professionals.</b></p>
            <p>Snaplessons is a revolutionary online learning platform that offers a unique blend of traditional and digital education. Our mission is to create a world where everyone has the opportunity to excel in their chosen field, regardless of their background or location.</p>
            <p>Our software training institute offers high-quality education in programming, software development, and industry-relevant skills. Our courses are crafted by industry experts to provide up-to-date and practical knowledge. We ensure our students are well-prepared for the tech industry.</p>
          </div>
        </div>
        <div className="vision-mission">
          <AboutCard url="./images/about/vision.png" title="vision" description="Our vision is to reach and train every job seeker and become instrumental in their career growth journey." />
          <AboutCard url="./images/about/mission.png" title="mission" description="Our mission is to impart the best technical knowledge for job seekers and help companies find the best cultural fits." />
        </div>

      </div>
      <div className="benefits">
          <h2>Benefits</h2>
          <div className="awards">
            <div className="list">
              <ul>
                <li data-aos="fade-down"><span>Real-time project development experience</span></li>
                <li data-aos="fade-down"><span>Extended support during post-training</span></li>
                <li data-aos="fade-down"><span>Interview preparation and placement assistance</span></li>
                <li data-aos="fade-down"><span>Internship certificate upon completion</span></li>
                <li data-aos="fade-down"><span>Training certificate to validate your skills</span></li>
                <li data-aos="fade-down"><span>Job placement assistance with top-tier companies</span></li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}
