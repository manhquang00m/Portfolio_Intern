import React from 'react';
// Su dung thu vien connect de lay du lieu tu store ve
import { connect } from 'react-redux'



function GioHangRedux(props) {

    return (
        <div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: '1000px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Giỏ Hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã SP</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên sẩn phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        props.gioHang.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{item.maSP}</th>
                                                    <td ><img style={{ width: '70px' }} src={item.hinhAnh} alt="" /></td>
                                                    <td>{item.tenSP}</td>
                                                    <td> <button onClick={() => props.tangGiamSoLuong(item.maSP, false)} className='btn btn-success'>-</button> {item.soLuong} <button onClick={() => props.tangGiamSoLuong(item.maSP, true)} className='btn btn-success'>+</button></td>
                                                    <td>{item.gia.toLocaleString()}</td>
                                                    <td>{(item.gia * item.soLuong).toLocaleString()}</td>
                                                    <td><button className="btn btn-danger" onClick={() => props.xoaSanPham(item)}>Xóa</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Ham lay state redux bien doi thanh props cua component

const mapStateToProps = state => { //state la state tong cua ung dung chua cac state con (goi la: rootReducer)
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

// Xoa san pham trong gio hang

const mapDispatchToProps = (dispatch) => {
    return {
        xoaSanPham: (sanPham) => {

            let action = {
                type: 'XOA_SAN_PHAM',
                sanPham
            };
            dispatch(action)
        },

        // Tang so luong san pham trong gio hang

        tangGiamSoLuong: (maSP, tangGiam) => {
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            };
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);