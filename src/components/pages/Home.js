import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import PDF from './Thuc_Phan_Resume.pdf'

export class Home extends Component {
    render() {
        return (
            <section className= "section-home">
                <h1>Hey, I'm <span className="highlight">Thuc</span>.</h1>
                <p>I'm a <span className="highlight">developer.</span></p>
                <br></br>
             

                <div className="btn-div-home">
                    
                    <Link to='/projects'>View my projects</Link>
                    <a href={PDF}>Resume</a>
                    <a href='mailto:thucphan1996@gmail.com'>Contact Me</a>
                </div>
            </section>
        )
    }
}

export default Home
