import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import './responsive/portfolio.css'

function Portfolio(props) {
    return (
        <div className="background-portfolio" style={{ backgroundColor: '#f3f3f3' }} >
            <div className="container-fuild portfolio">
                <div className='navbar'>
                    <div className='myname'>
                        <h3>Vu Manh Quang</h3>
                        <p>Front-end Developer</p>
                    </div>
                    <a href='https://drive.google.com/file/d/1HGuT53F8WKK4LcT3hEBRKW4445sdxZ8f/view?usp=sharing' target="_blank" className='btn btn-cv'>Download CV</a>
                </div>
                <div className='row reverse-col justify-content-center' style={{ margin: '120px 0' }}>
                    <div className='col-12 col-lg-4 col-md-9 text-center'>
                        <img src="./ProjectImg/avt.JPG" className='avatar rounded-circle border border-2' alt="" />
                    </div>
                    <div className='col-12 col-lg-4 text-wrap'>
                        <h1 className=''>Hello</h1>
                        <h3>A Bit About Me</h3>
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <div className='group-btn'>
                            <Link className='group-btn-child' to='/resume'>Resume</Link>
                            <Link className='group-btn-child' to='/project'>Projects</Link>
                            <Link className='group-btn-child' to='/contact'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className='row infor'>
                    <div className="col-12 col-lg-3">
                        <h3>Phone</h3>
                        <p>0329424056</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h3>Email</h3>
                        <p>vumanhquang36@gmail.com</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h3>Follow Me</h3>
                        <div className='icon-wrap'>
                            <a target="_blank" href="https://github.com/manhquang00m"><i class="fa-brands fa-github"></i></a>
                            <a target="_blank" href="https://www.facebook.com/manh.quang.56860ko/"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                        <p>
                            ©2022 By ManhQuang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;