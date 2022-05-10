import React, { useState } from 'react';
import SanPhamChiTiet from './SanPhamChiTiet';
import dataPhone from './dataPhone.json'

const mangSanPham = dataPhone

function DanhSachSanPham(props) {
    return (
        <div>
            <h2 className='text-center' style={{ padding: '30px 0', }}>Danh Sách Sản Phẩm</h2>
            <div className='container-fluid' style={{ padding: '0 200px', }}>
                <div className='row'>
                    {
                        mangSanPham.map((item, index) => {
                            return (
                                <div className='col-4' key={index}>
                                    <SanPhamChiTiet sp={item} changeView={() => props.handleView(item)} addCart={props.addCart} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className='row mt-5'>
                    <div className='col-4'>
                        <h3>VinSmart Live</h3>
                        <img src={props.phone.hinhAnh} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-8'>
                        <h3>Thông Số Kỹ Thuật</h3>
                        <table className="table table-hover">

                            <tbody>
                                <tr>
                                    <th scope="row">Màn Hình</th>
                                    <td>{props.phone.manHinh}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hệ Điều Hành</th>
                                    <td>{props.phone.heDieuHanh}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Camera Trước</th>
                                    <td>{props.phone.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Camera Sau</th>
                                    <td>{props.phone.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ram</th>
                                    <td>{props.phone.ram}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Rom</th>
                                    <td>{props.phone.rom}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default DanhSachSanPham;