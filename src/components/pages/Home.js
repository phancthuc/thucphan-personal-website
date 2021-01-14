import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import PDF from './thucphan-resume.pdf'

export class Home extends Component {
    render() {
        return (
            <section className= "section-home">
                <h1>Hello, my name is <span style={{color: "white"}}>Thuc</span>.</h1>
                <p>I'm a <span style={{color: "white"}}>computer science student</span> at UC San Diego.</p>
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
