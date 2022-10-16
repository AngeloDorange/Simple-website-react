import React, {useEffect} from 'react'
import {gsap, Power4 } from 'gsap'
import './header.css'


const Header = () => {

    const timeline = gsap.timeline({ 
        defaults: {
            duration: 1, 
            ease: Power4.easeOut, 
        }, 
    });

    useEffect(() => {

        const titre = document.querySelector(".titre");
        const more = document.querySelectorAll(".btn")

        timeline
           .to(titre, { rotationX: 360, duration: 3, stagger: 0.3})
           .to(more, { rotate: 360, stagger: 0.3}, "-=0.3");
    }, [])

    return (
        <section className="header">
            <div className="content">
                <h1 className="titre">HELLO, WE ARE COMILA</h1>
                <p className="parag">WE ARE ALMOST <span>READY TO LAUNCH</span> OUR <span>NEW CREATIVE</span> ADVENTURE</p>
                <div className="more">
                <a className="btn" href="#">LET'S BEGIN</a>
                <a className="btn btn-primary" href="#">NOTIFY ME</a>
                </div>
            </div>
        </section>
    )
}

export default Header
