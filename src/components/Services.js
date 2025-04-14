  import React from "react";
  import Fcard from "./cards/Fcard";
  import Rcard from "./cards/Rcard";
  import "./services.css";
  import Slideshow from "./Slideshow";
  export default function Services() {
    const images = [
      "./images/slider/1.png",
      "./images/slider/2.png",

    ];
    return (
      <>  
      
        <div className="services-container">     
          <h1>Services we are offering..!</h1>
          <div className="services-cards">
            <Fcard
              url="./images/services/training.png"
              sname="Trainings & Placement Assistance"
              content="Snaplessons offers comprehensive training programs designed to enhance your technical skills and industry knowledge. Our expert instructors provide in-depth courses covering the latest technologies and methodologies. Along with training, we offer robust placement assistance services, including job search strategies, interview preparation, and connections to top employers, ensuring you secure your dream job."
            />
            <Rcard
              url="./images/services/resource.png"
              sname="Placement Support"
              content="At Snaplessons, we are committed to helping you achieve your career goals with our dedicated placement support services. Our team provides personalized coaching to refine your job search strategies, improve your interview skills, and create impactful resumes. Additionally, we give you access to exclusive job opportunities through our extensive network of industry contacts."
            />
            <Fcard
              url="./images/services/resume.png"
              sname="Resume Preparation"
              content="Our expert team at Snaplessons specializes in creating professional resumes that effectively showcase your skills, experiences, and achievements. We provide personalized assistance to ensure your resume stands out to potential employers, highlighting your strengths and aligning with industry standards. A well-crafted resume can significantly increase your chances of securing job interviews and offers."
            />
            <Rcard
              url="./images/services/internship.png"
              sname="Internships"
              content="Gain invaluable practical experience and industry insights with Snaplessons' internship programs. We connect you with leading companies where you can apply your academic knowledge to real-world projects. Internships provide hands-on experience, enhance your professional skills, and increase your employability, making you a more attractive candidate in the job market."
            />
            <Fcard
              url="./images/services/project.png"
              sname="Live Project Experience"
              content="Snaplessons offers the opportunity to work on live projects, allowing you to apply your theoretical knowledge in real-world scenarios. These projects provide hands-on experience and help you build a strong portfolio that showcases your abilities to potential employers. Working on live projects also enhances your problem-solving skills and prepares you for the challenges of the professional world."
            />
            <Rcard
              url="./images/services/consulting.png"
              sname="Mock Interviews"
              content="Prepare for job interviews with Snaplessons' mock interview sessions. Our experienced professionals conduct realistic interview simulations, providing you with constructive feedback and tips to improve your performance. These sessions help you build confidence, refine your responses, and develop strategies to tackle various types of interview questions effectively."
            />
            <Fcard
              url="./images/services/soft.png"
              sname="Soft Skills Development"
              content="Snaplessons' soft skills development programs are designed to enhance your communication, leadership, and teamwork abilities. These programs focus on essential interpersonal skills that are crucial for professional success. By participating in our soft skills training, you will become a well-rounded professional capable of effectively collaborating with colleagues and excelling in your career."
            />
            <Rcard
              url="./images/services/corporate.png"
              sname="Personalized Mentorship"
              content="Receive personalized mentorship from industry experts at Snaplessons. Our mentors provide guidance tailored to your career aspirations, offering valuable insights, advice, and support. This mentorship helps you navigate your career path, overcome challenges, and achieve your professional goals with confidence. Our mentors are dedicated to helping you succeed in your chosen field."
            />
          </div>
        </div>
      </>
    );
  }
