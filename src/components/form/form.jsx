import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './form.css'

const Form = () => {

    useEffect (() => {
        Aos.init({ duration: 2000 });
      }, [])

    return (
        <section className="contact">
            <div className="title">
                <h1>GET IN TOUCH</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, est modi debitis incidunt odit repellendus.</p>
            </div>

            <form action="#" method="post" data-aos="fade-right">
                <div className="form">
                   <div className="form_control">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" id="" placeholder="Your Email" required />
                   </div>
                   <textarea name="message" id="" rows="10" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-primary">SEND MESSAGE</button>
            </form>

        </section>
    )
}

export default Form
