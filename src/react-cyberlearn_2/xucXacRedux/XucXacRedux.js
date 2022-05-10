import React from 'react';
import ThongTinTroChoi from './component/ThongTinTroChoi';
import XucXac from './component/XucXac';
import './XucXac.css'
import { connect } from 'react-redux'

function XucXacRedux(props) {
    return (
        <div className='bg-xucxac app-game'>
            <div className='bg-xucxac-dark'>
                <div className='container-fluid text-center'>
                    <h1 className=' heading-1'>GAME TÀI XỈU</h1>
                    <div className='row '>
                        <div className='col-4'>
                            <button className='btn btn-primary btn-game' onClick={() => props.chonTaiXiu(true)}>TÀI</button>
                        </div>
                        <div className='col-4'>
                            <XucXac />
                        </div>
                        <div className='col-4'>
                            <button className='btn btn-primary btn-game' onClick={() => props.chonTaiXiu(false)}>XỈU</button>
                        </div>
                    </div>
                    <ThongTinTroChoi />
                    <button className="btn btn-success mt-5" onClick={() => props.playGame()}>Play Game</button>

                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taiXiu) => {
            let action = {
                type: 'CHON_TAI_XIU',
                taiXiu
            };
            dispatch(action)
        },
        playGame: () => {
            let action = {
                type: 'PLAY_GAME'
            };
            dispatch(action)
        }

    }
}

export default connect(null, mapDispatchToProps)(XucXacRedux);