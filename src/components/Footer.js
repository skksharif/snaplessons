import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer-content">
          <ul>
            <li>
              <h2>About Us</h2>
            </li>
            <li>
              <b>“SMART WAY TO SUCCESS”</b>
            </li>
            <li>
              <p>
                Our software training institute offers highquality education in
                programming, software development, and industry-relevant skills.
                Our courses are crafted by industry experts to provide
                up-to-date and practical knowledge. We ensure our students are
                well-prepared for the tech industry.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>Address</h2>
            </li>
            <li>
              <b>teamhr@snaplessons.in</b>
            </li>
            <li>+91 8985175753, 8500796763</li>
            <li>Plot.No.8, 1st Floor, Vasista Bhavan,</li>
            <li>APHB Colony, Indira Nagar,</li>
            <li>Gachibowli, Hyderabad, Telangana - 500032</li>
          </ul>
          <ul>
            <li>
              <h2>Location Map</h2>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/K6hU96GEavqY6SUQ8?g_st=iw"
                target="_blank"
              >
                {" "}
                <img src="./images/map.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <center>
          {" "}
          <p> &copy; copyrights are reserved.</p>
        </center>
      </footer>
    </>
  );
}
