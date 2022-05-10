import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import XucXacItem from './assets/css/XucXacItem.css'

export default function BaiTapGameBauCua() {
    return (
        <div id='baiTapBauCua'>
            <div className='container'>
                <DiemCuoc />
                <div className='row mt-5 pb-5'>
                    <div className='col-8'>
                        <DanhSachCuoc />
                    </div>
                    <div className='col-4 dsXucXac'>
                        <DanhSachXucXac />
                    </div>
                </div>
            </div>
        </div>
    )
}
