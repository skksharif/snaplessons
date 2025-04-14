import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
export default function CoursesCard({image,title,desc}) {
  useEffect(()=>{
    AOS.init({duration:1000})
 },[]);
  return (
    <>
      <div className="card">
        <div className="card_front">
          <img src={image} alt="" />
        </div>
        <div className="card_back">
            <h3>{title}</h3>
            <p>{desc}</p>
            <NavLink to="/contact" className="button">Start Course</NavLink>
        </div>
      </div>
    </>
  );
}
