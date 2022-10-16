import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './about.css'
import Abou from '../../assets/about.jpg'



  
const About = () => {

  useEffect (() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <section className="about">
      <div className="container">

        <div className="left" data-aos="zoom-in-down">
          <img src={Abou} alt="" />
        </div>

        <div className="right">
        <div className="title">
          <h1>OUR COMPANY</h1>
          <small>COMILA BEACH IS BASED IN HAITI</small>
        </div>
        <div className="text" data-aos="zoom-in-up">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem fugiat, et impedit fuga ad ipsam dolores commodi excepturi odit accusantium soluta libero unde, distinctio esse assumenda, nam sint nostrum!</p>
        </div>
      </div>

      </div>
    </section>
  )
}

export default About
