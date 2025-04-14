import React,{useState} from 'react'
import Slideshow from './Slideshow';
import Numbers from './Numbers';
import Testimonials from './Testimonials';
import Courses from './Courses';
import Content from './Content';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const images = [
      "./images/slider/3.jpg",

    ];
    const testimonials = [
      {
        review: "This is an amazing product!",
        desc: "It has exceeded all my expectations.",
        name: "Rahul Sharma"
      },
      {
        review: "I had a great experience with this service.",
        desc: "The support team was very helpful.",
        name: "Priya Mehta"
      },
      {
        review: "Highly recommend to everyone.",
        desc: "The quality and efficiency are top-notch.",
        name: "Anjali Patel"
      },
      {
        review: "A fantastic solution.",
        desc: "The user interface easy to use.",
        name: "Vikram Gupta"
      },
      {
        review: "Great value for money!",
        desc: "The features are outstanding.",
        name: "Neha Singh"
      }
    ];
  return (
    <>
      <Slideshow images={images} interval={3000} />
      <Numbers />
      <Content />
      <Courses />
      <Testimonials testimonials={testimonials} />
    </>
  )
}
