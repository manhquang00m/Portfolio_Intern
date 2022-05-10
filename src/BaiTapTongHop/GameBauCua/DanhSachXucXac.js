import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXucXac() {
    let xucXac = useSelector(state => state.BauCuaReducer.xucXac)
    let dispatch = useDispatch()
    const handleXoc = () => {
        let action = {
            type: 'XOC_DIA'
        }
        dispatch(action)
    }
    return (
        <div>
            <div className='row text-center  rounded-circle circle rounded-3'>
                <div className='col-12 pb-3'>
                    <XucXac xucXac={xucXac[0].url} />
                </div>
                <div className='col-6'>
                    <XucXac xucXac={xucXac[1].url} />
                </div>
                <div className='col-6'>
                    <XucXac xucXac={xucXac[2].url} />
                </div>
            </div>

            <div className='text-center mt-4'>
                <button className='btn btn-success' onClick={handleXoc}>XÓC</button>
            </div>
        </div>
    )
}
