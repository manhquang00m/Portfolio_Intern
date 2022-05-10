import React from 'react'
import { useDispatch } from 'react-redux'

export default function QuanCuoc(props) {
    let dispatch = useDispatch()
    const congDiem = (tenQuanCuoc) => {
        let action = {
            type: 'CONG_TRU_DIEM',
            tenQuanCuoc,
            tangGiam: true
        }
        dispatch(action)
    }

    const truDiem = (tenQuanCuoc) => {
        let action = {
            type: 'CONG_TRU_DIEM',
            tenQuanCuoc,
            tangGiam: false

        }
        dispatch(action)
    }
    return (
        <div>
            <img style={{ width: '100%' }} src={require(`${props.quanCuoc.url}`)} alt="" />
            <div className='tangGiam'>
                <button style={{ fontSize: '24px' }} className='btn btn-danger' onClick={() => truDiem(props.quanCuoc.name)}>-</button>
                <span style={{ fontSize: '24px' }}>{props.quanCuoc.diem}</span>
                <button style={{ fontSize: '24px' }} className='btn btn-danger' onClick={() => congDiem(props.quanCuoc.name)}>+</button>
            </div>
        </div>
    )
}
