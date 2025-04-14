import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "./cards.css"

export default function AboutCard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="about-card" data-aos="zoom-in">
        <img src={props.url} alt="About Us" />
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
      </div>
    </>
  );
}
