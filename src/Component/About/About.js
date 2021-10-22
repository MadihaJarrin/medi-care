import React from 'react';
import './About.css'

const About = () => {
    return (
        <div style={{ backgroundColor: "rgb(190, 150, 250)", padding: "5px" }}>
            <h1 style={{ textShadow: "2px 2px 2px Green", color: "white", padding: "10px" }} >You will find what you need in one of our distinct</h1>

            <div className="container">
                <img src="https://cdn.britannica.com/w:400,h:300,c:crop/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg" alt="" />
                <h2 style={{ textShadow: "2px 2px 2px white", color: "red" }}>Medi-Care Diagonstic Center </h2>
                <br />
                <p style={{ color: "black" }}>Medi-Care Hospital is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Medi-Care Hospital is one of the ventures of Square Group which is the top business group of the country.<br /> The reputation of Medi-Care Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Medi-Care Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>
            </div>
        </div>
    );
};

export default About;