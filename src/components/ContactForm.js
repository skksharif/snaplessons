import React, { useState, useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import "./ContactForm.css";
import Slideshow from "./Slideshow";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    const mailtoLink = `mailto:ganesh.m@snaplessons.in?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const images = [
    "./images/slider/1.png",
    "./images/slider/2.png",

  ];
  return (
    <>
      
      <div className="contact-forms-outer">
    
        <div className="contact-header">
          <h1>Contact Us Now</h1>
          <img src="./images/telegram.png" alt="" data-aos="zoom-in-right" />
        </div>
        <div className="contact-form-container" data-aos="fade-up">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="submit" value="ENROLL" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
