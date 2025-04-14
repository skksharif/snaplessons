import React,{useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Numbers.css';
export default function Numbers() {
  const [counterOn,setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="number-container">
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img src='./images/numbers/target.png'/>
            <div className='counter-text'>
            <h2>
              {counterOn && <CountUp start={0} end={1000} duration={3} separator="," />}+
            </h2>
            <p>Success rate</p>
            </div>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img src='./images/numbers/teacher.png'/>
            <div className='counter-text'>
            <h2>
              {counterOn && <CountUp start={0} end={100} duration={3} separator="," />}+
            </h2>
            <p>Faculties</p>
            </div>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img src='./images/numbers/graduated.png'/>
            <div className='counter-text'>
            <h2>
              {counterOn && <CountUp start={0} end={1000} duration={3} separator="," />}+
            </h2>
            <p>Students</p>
            </div>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img src='./images/numbers/online-learning.png'/>
            <div className='counter-text'>
            <h2>
              {counterOn && <CountUp start={0} end={100} duration={3} separator="," />}+
            </h2>
            <p>Courses</p>
            </div>
          </div>
          
       
        </div>
      </ScrollTrigger>
    </>
  )
}
