import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import PDF from './Thuc_Phan_Resume.pdf'


function Home() {
    return (
        <section className="section-home">
            <h1>Hey, I'm <span className="highlight">Thuc</span>.</h1>
            <p>I'm a <span className="highlight">developer</span>.</p>
            <br></br>

            <div className="btn-div-home">

                <Link to='/projects'>My Projects</Link>
                <a href={PDF}>Resume</a>
                <a href='mailto:thucphan1996@gmail.com'>Email Me</a>
            </div>
        </section>
    )
}

export default Home
