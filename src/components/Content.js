import React,{useEffect} from 'react';
import './Content.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import SimpleParallax from'simple-parallax-js';
import { NavLink } from 'react-router-dom';
export default function Content() {
  useEffect(()=>{
    AOS.init({duration:1000})
 },[]);
  return (
    <>
      <div className="content" >
          <div className='content-text' data-aos="fade-right">
              <div className='content-inner-text'>
                  <h2>Elevate Your Tech Career</h2>
                  <p><b>Welcome to Snaplessons IT Services – Your gateway to becoming a skilled industry professional</b></p>
                  <p>Snaplessons IT Solutions, established by a tech enthusiast in APHB Colony, Indira Nagar, 
                    Gachibowli, Hyderabad, is a leading provider of Software Training, Placement Services,
                     and Overseas Education Consultancy. We are dedicated to offering unmatched industry
                      insights to job seekers, empowering them to excel in their careers. Our comprehensive
                      training programs cater to college students, recent graduates, and working professionals,
                       ensuring an outstanding learning experience for everyone.
                  </p>
                      <br/>
                  <NavLink to='/about' className='knowmore'>Know More</NavLink>
               
              </div>
          </div>
          <div data-aos="fade-left" className='content-image'>
            <img src="./images/bridge.png" alt="" />
          </div>
        
    </div>
    </>
  )
}
