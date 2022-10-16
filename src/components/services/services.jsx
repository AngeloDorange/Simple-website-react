import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './services.css'
import Build from '../../assets/building.svg'


const Services = () => {

    useEffect (() => {
        Aos.init({ duration: 2000 });
      }, [])

    return (
        <section className="service">
            <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L480,160L960,160L1440,224L1440,0L960,0L480,0L0,0Z"></path></svg>
            </div>
            <div className="container">
                <div className="item" data-aos="fade-down" data-aos-delay="800">
                    <div className="title">
                    <img src={Build} alt="" />
                        <h1>BEACH</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus assumenda tempora numquam nostrum dolore necessitatibus ab, aliquam voluptas ad.</p>
                </div>

                <div className="item" data-aos="fade-down" data-aos-delay="900">
                    <div className="title">
                        <img src={Build} alt="" />
                        <h1>WEDDING</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus assumenda tempora numquam nostrum dolore necessitatibus ab, aliquam voluptas ad.</p>
                </div>

                <div className="item" data-aos="fade-down" data-aos-delay="1100">
                    <div className="title">
                        <img src={Build} alt="" />
                        <h1>FESTIVAL</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus assumenda tempora numquam nostrum dolore necessitatibus ab, aliquam voluptas ad.</p>
                </div>
            </div>
            <div className="mor">
                <a className="btn" href="#">Talk to us</a>
            </div>
        </section>
    )
}

export default Services
