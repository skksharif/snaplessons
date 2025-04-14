import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./cards.css";

export default function Fcard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-right">
        <div className="scard fcard">
          <img src={props.url} />
          <div className="services-desc">
            <h2>{props.sname}</h2>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
