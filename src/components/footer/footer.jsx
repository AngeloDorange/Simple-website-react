import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './footer.css'
import Fab from '../../assets/facebook-f.svg'
import Inst from '../../assets/instagram.svg'
import Twi from '../../assets/twitter.svg'

const Footer = () => {

    useEffect (() => {
        Aos.init({ duration: 2000 });
      }, [])

    return (
        <section className="foot">
            <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L480,160L960,160L1440,224L1440,0L960,0L480,0L0,0Z"></path></svg>
            </div>
            <div className="content">
            <div className="container">
                <div className="left" data-aos="fade-up" data-aos-delay="700">
                   <div className="title">
                       <h1>COMILA</h1>
                   </div>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.praesentium sed ipsam eligendi sapiente maiores architecto voluptas cumque odio ullam porro.</p>

                   <div className="credit">
                       <p>Copyright 2022 COMILA <br /> Designed by <span>Angelo Dorange</span></p>
                   </div>
                </div>

                <div className="right" data-aos="fade-up" data-aos-delay="800">
                    <div className="title">
                        <h1>OUR STUDIO</h1>
                    </div>
                    <p>120-240 Lorem ipsum dolor sit amet consectetur adipisicing, <br /> Convalis in Vulgate 10220 <br /> CAP-HAITIEN, NORD, HAITI. </p>

                    <ul className="social">
                        <li><a href="#"><img src={Fab} alt="" /></a></li>
                        <li><a href="#"><img src={Inst} alt="" /></a></li>
                        <li><a href="#"><img src={Twi} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default Footer
