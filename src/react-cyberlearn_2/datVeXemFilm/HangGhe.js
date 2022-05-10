import React from 'react';
import danhSachGhe from './danhSachGhe.json'
import { connect } from 'react-redux'

const listGhe = danhSachGhe

function HangGhe(props) {

    const renderHang = (dsGhe) => {
        return (
            <div key={dsGhe.hang} style={{ width: '23px' }} className='firstChar'>{dsGhe.hang}</div>
        )
    }

    const renderSoHang = (dsGhe0) => {
        return dsGhe0.danhSachGhe.map((ghe, index) => {
            return (
                <div style={{ marginLeft: '19px', width: '30px', marginBottom: '20px', fontSize: '25px' }} key={index} className='firstChar'>{index + 1}</div>
            )
        })
    }

    const renderGhe = (dsGhe) => {
        let cssGhe = 'ghe'
        return dsGhe.danhSachGhe.map((ghe, index) => {
            let indexGheDangDat = props.VeFilm.soGhe.findIndex(item => item === ghe.soGhe)

            // Trang thai ghe da dat roi
            if (ghe.daDat === true) {
                cssGhe = 'gheDuocChon'
            } else if (indexGheDangDat >= 0) {
                cssGhe = 'gheDangChon'
            } else {
                cssGhe = 'ghe'
            }
            return (
                <button onClick={() => props.chonGhe(ghe.soGhe)} key={index} className={cssGhe}>{index + 1}</button>
            )
        })
    }

    const render = () => {
        return listGhe.map((list, index) => {
            if (index === 0) {
                const res = <div key={index} style={{ display: 'flex' }}>
                    {
                        renderHang(list)
                    }
                    {
                        renderSoHang(list)
                    }
                </div>
                return res
            } else {
                const res = <div key={index} style={{ display: 'flex' }}>
                    {
                        renderHang(list)
                    }
                    {
                        renderGhe(list)
                    }
                </div>
                return res
            }
        })
    }

    return (
        <div>
            <ul className='mt-5 text-center' style={{ paddingLeft: '5rem' }}>
                <li >
                    {render()}
                </li>
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        VeFilm: state.stateVeFilm.VeFilm
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (soGhe) => {
            let action = {
                type: 'CHON_SO_GHE',
                soGhe
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);