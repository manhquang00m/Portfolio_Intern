import React, { useState } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalCart from './ModalCart';
import dataPhone from './dataPhone.json'

const mangSanPham = dataPhone

function ExerciseCart(props) {
    const [phone, setPhone] = useState(mangSanPham[0])
    const [sanpham, setSanPham] = useState([])


    const handleView = (item) => {
        setPhone(item)
    }
    // Them vao gio hang
    const addCart = (sp) => {
        let spGioHang = {
            maSP: sp.maSP,
            tenSP: sp.tenSP,
            donGia: sp.giaBan,
            soLuong: 1,
            hinhAnh: sp.hinhAnh
        }
        let i = sanpham.findIndex((spGH) => spGH.maSP === spGioHang.maSP)
        if (i !== -1) {
            sanpham.map((item, index) => {
                if (i === index) {
                    item.soLuong += 1
                }
            })
        } else {
            // ko tim thay trong gio hang, them san pham moi
            sanpham.push(spGioHang)
        }
        setSanPham((prev) => {
            return [...prev]
        })
    }

    // Tinh tong so luong
    const sumCart = (sp) => {
        let sum = 0
        sp.map((item) => {
            sum += item.soLuong
        })
        return sum
    }

    // Xoa sp trong gio hang
    const delCart = (idSp) => {
        const new_arr = sanpham.filter(item => item.maSP !== idSp)
        setSanPham(new_arr)
    }


    return (
        <div>
            <h1 className='text-center' style={{ padding: '30px 0', }}>BÀI TẬP GIỎ HÀNG</h1>
            <ModalCart sanpham={sanpham} sumCart={sumCart} delCart={delCart} />
            <DanhSachSanPham addCart={addCart} phone={phone} handleView={handleView} />
        </div>
    );
}

export default ExerciseCart;