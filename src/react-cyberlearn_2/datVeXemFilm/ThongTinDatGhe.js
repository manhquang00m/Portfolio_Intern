import React from 'react';
import danhSachGhe from './danhSachGhe.json'
import { connect } from 'react-redux'
const listGhe = danhSachGhe


function ThongTinDatGhe(props) {

    const tongTien = <tr style={{ color: 'white' }}>
        <th scope="row">Tổng Tiền</th>
        <td>{props.VeFilm.soGhe.length * 75000}</td>
        <td></td>
    </tr>

    const renderBangGhe = () => {
        return props.VeFilm.soGhe.map((ghe, index) => {
            return (
                <tr key={index} style={{ color: 'yellow' }}>
                    <th scope="row">{ghe}</th>
                    <td>75.000</td>
                    <td><button onClick={() => props.xoaGhe(ghe, listGhe)} style={{ color: 'red', border: 'none', backgroundColor: 'transparent', fontSize: '20px' }}>x</button></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <h3 style={{ color: 'white', margin: '30px 0' }} className="text-center">DANH SÁCH GHẾ BẠN CHỌN</h3>
            <div className='d-flex align-items-center'>
                <div className='gheDuocChon ' style={{ marginLeft: '0' }}></div>
                <span style={{ color: '#fff', marginLeft: '10px' }}>Ghế đã đặt</span>
            </div>
            <div className='d-flex mt-2 align-items-center'>
                <div className='gheDangChon ' style={{ marginLeft: '0' }}></div>
                <span style={{ color: '#fff', marginLeft: '10px' }}>Ghế đang chọn</span>
            </div>
            <div className='d-flex mt-2 align-items-center'>
                <div className='gheChuaChon ' ></div>
                <span style={{ color: '#fff', marginLeft: '10px' }}>Ghế chưa đặt</span>
            </div>
            <table className="table table-bordered border-white mt-5">
                <thead>
                    <tr style={{ color: 'white' }}>
                        <th scope="col">Số ghế</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Hủy</th>
                    </tr>
                </thead>
                <tbody style={{ color: 'white' }}>
                    {
                        renderBangGhe()
                    }
                    {tongTien}
                </tbody>
            </table>
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
        xoaGhe: (soGhe, listGhe) => {
            let action = {
                type: 'XOA_GHE',
                soGhe,
                listGhe
            };
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);