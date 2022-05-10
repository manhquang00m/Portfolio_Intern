import React from 'react';
import { connect } from 'react-redux'


function ProductItemRedux(props) {

    return (
        <div>
            <div>
                <div className="card" style={{ width: "80%" }}>
                    <img src={props.sp.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.sp.tenSP}</h5>
                        <p className="card-text">
                            {props.sp.giaBan}
                        </p>
                        <div style={{ padding: '0 20px' }}>
                            <a href="#" className="btn btn-success"
                                onClick={() => props.themGioHang(props.sp)} >
                                Thêm Giỏ Hàng
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Ham gui du lieu len store
const mapDispatchToProps = (dispatch) => {
    return {
        // tao 1 props la 1 ham dua du lieu di
        themGioHang: (sanPham) => {
            // tao ra sp gio hang
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                gia: sanPham.giaBan
            }

            // Tao ra Action
            let action = {
                type: 'THEM_GIO_HANG',
                spGioHang
            }

            // Dung ham dispatch tu redux => gui du lieu len reducer
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItemRedux);