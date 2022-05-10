import React from 'react'
import { useSelector } from 'react-redux'

import QuanCuoc from './QuanCuoc'

export default function DanhSachCuoc() {
    const danhSachQuanCuoc = useSelector((state) => state.BauCuaReducer.danhSachQuanCuoc)
    return (
        <div>
            <div className='row'>
                {
                    danhSachQuanCuoc.map((item, index) => {
                        return (
                            <div className='col-4 mt-3' key={index} >
                                <QuanCuoc quanCuoc={item} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
