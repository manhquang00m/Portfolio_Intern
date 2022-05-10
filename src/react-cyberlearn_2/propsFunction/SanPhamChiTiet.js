import React, { useState } from 'react';
import ExerciseCart from './ExerciseCart';
import ModalCart from './ModalCart';

function SanPhamChiTiet(props) {
    const handleView = () => {
        props.changeView(props.sp)
    }

    const handleAdd = (item) => {
        props.addCart(item)
    }


    return (
        <div>
            <div className="card" style={{ width: "80%" }}>
                <img src={props.sp.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.sp.tenSP}</h5>
                    <p className="card-text">
                        {props.sp.giaBan}
                    </p>
                    <div style={{ padding: '0 20px' }}>
                        <a href="#" className="btn btn-primary" onClick={handleView}>
                            Xem Chi Tiết
                        </a>
                        <a href="#" className="btn btn-success" onClick={() => handleAdd(props.sp)} style={{ marginLeft: '10px' }} >
                            Thêm Giỏ Hàng
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SanPhamChiTiet;