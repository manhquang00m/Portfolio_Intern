import React from 'react';
import GioHangRedux from './GioHangRedux';
import ProductListRedux from './ProductListRedux';
import { connect } from 'react-redux'


function BaiTapGioHangRedux(props) {

    const sumCart = () => {
        let sum = 0
        props.gioHang.map((item) => {
            sum += item.soLuong
        })
        return sum
    }

    return (
        <div className=''>
            <h1 className='text-center' style={{ padding: '30px 0', }}>BÀI TẬP GIỎ HÀNG</h1>
            <div style={{ padding: '0 200px', float: 'right' }}>
                <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Giỏ hàng <span>({sumCart()})</span>
                </button>
            </div>
            <ProductListRedux />
            <GioHangRedux />

        </div>
    );
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}


export default connect(mapStateToProps)(BaiTapGioHangRedux);