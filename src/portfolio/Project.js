import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import BaiTapChonKinh from '../react_cyberlearn_1/baiTapChonKinh/BaiTapChonKinh'
import BaiTapChonXe from '../react_cyberlearn_1/baiTapChonXe/BaiTapChonXe'
import RenderMovie from '../react_cyberlearn_1/renderMovie/RenderMovie'
import DatVeXemFilm from '../react-cyberlearn_2/datVeXemFilm/DatVeXemFilm'
import XucXacRedux from '../react-cyberlearn_2/xucXacRedux/XucXacRedux';


import './style.css'


function Project(props) {
    return (
        <div >
            <div className='project' style={{ backgroundColor: '#F5EFE6', height: '100%' }}>
                <div className='container '>
                    <h1 className='pt-5' style={{ fontSize: '50px', fontWeight: 'bold' }}>Some things <br />
                        I've worked on</h1>
                    <div className='row mt-5'>
                        <div className='col-6 pb-5 pr-5' >
                            <div className='projectItem'>
                                <img src="./ProjectImg/bauCua.png" alt="" style={{ width: '100%', height: '290px' }} />
                                <h3>Bầu Cua Tôm Cá</h3>
                                <div className='tools'>
                                    <span className='tool' style={{ background: '#21BAEB' }}>ReactJS</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>HTML</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>CSS</span>
                                </div>
                                <p>A collection and description of all 898 Pokémon</p>
                                <div className='btnProject row'>
                                    <a href="" className='col-2'>
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                    <Link target="_blank" to="/BaiTapGameBauCua" className='col-9'>Live View</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 pb-5' >
                            <div className='projectItem'>
                                <img src="./ProjectImg/taiXiu.png" alt="" style={{ width: '100%', height: '290px' }} />
                                <h3>Game Tài Xỉu</h3>
                                <div className='tools'>
                                    <span className='tool' style={{ background: '#21BAEB' }}>ReactJS</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>HTML</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>CSS</span>
                                </div>
                                <p>A collection and description of all 898 Pokémon</p>
                                <div className='btnProject row'>
                                    <a href="" className='col-2'>
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                    <Link target="_blank" to="/BaiTapGameBauCua" className='col-9'>Live View</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 pb-5' >
                            <div className='projectItem'>
                                <img src="./ProjectImg/renderMovie.png" alt="" style={{ width: '100%', height: '290px' }} />
                                <h3>Render Movie</h3>
                                <div className='tools'>
                                    <span className='tool' style={{ background: '#21BAEB' }}>ReactJS</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>HTML</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>CSS</span>
                                </div>
                                <p>A collection and description of all 898 Pokémon</p>
                                <div className='btnProject row'>
                                    <a href="" className='col-2'>
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                    <Link target="_blank" to="/rendermovie" className='col-9'>Live View</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 pb-5' >
                            <div className='projectItem'>
                                <img src="./ProjectImg/datVeXemFilm.png" alt="" style={{ width: '100%', height: '290px' }} />
                                <h3>Đặt Vé Xem Film</h3>
                                <div className='tools'>
                                    <span className='tool' style={{ background: '#21BAEB' }}>ReactJS</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>HTML</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>CSS</span>
                                </div>
                                <p>A collection and description of all 898 Pokémon</p>
                                <div className='btnProject row'>
                                    <a href="" className='col-2'>
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                    <Link target="_blank" to="/datvexemfilm" className='col-9'>Live View</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 pb-5' >
                            <div className='projectItem'>
                                <img src="./ProjectImg/todolist2.png" alt="" style={{ width: '100%', height: '290px' }} />
                                <h3>Todolist</h3>
                                <div className='tools'>
                                    <span className='tool' style={{ background: '#21BAEB' }}>ReactJS</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>HTML</span>
                                    <span className='tool' style={{ background: 'white', border: '1px solid #7C8594', color: '#7C8594' }}>CSS</span>
                                </div>
                                <p>A collection and description of all 898 Pokémon</p>
                                <div className='btnProject row'>
                                    <a href="" className='col-2'>
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                    <Link target="_blank" to="/todolist" className='col-9'>Live View</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;