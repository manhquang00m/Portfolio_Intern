import React from 'react';

function ModalCart(props) {
    const deleteCart = (idSp) => {
        console.log(idSp)
        props.delCart(idSp)
    }

    return (
        <div style={{ padding: '0 200px', float: 'right' }}>
            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Giỏ hàng <span>({props.sumCart(props.sanpham)})</span>
            </button>

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

                                        props.sanpham.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{item.maSP}</th>
                                                    <td ><img style={{ width: '70px' }} src={item.hinhAnh} alt="" /></td>
                                                    <td>{item.tenSP}</td>
                                                    <td>{item.soLuong}</td>
                                                    <td>{item.donGia}</td>
                                                    <td>{item.donGia * item.soLuong}</td>
                                                    <td><button className="btn btn-danger" onClick={() => deleteCart(item.maSP)}>Xóa</button></td>
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

export default ModalCart;