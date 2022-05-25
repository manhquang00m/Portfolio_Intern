import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function DiemCuoc() {
    let tienThuong = useSelector(state => state.BauCuaReducer.tienThuong)
    let dispatch = useDispatch()
    const handleReload = () => {
        let action = {
            type: 'CHOI_LAI'
        }
        dispatch(action)
    }
    return (
        <div className='text-center'>
            <div className='row pt-3 justify-content-center'>
                <h1 className='heading_bctc' style={{ color: '#ec1c24', fontSize: '60px', textShadow: '-3px 0 white, 0 1px white, 1px 0 white, 0 -1px white' }}>TRÒ CHƠI BẦU CUA TÔM CÁ</h1>

                <div className='col-6 col-lg-3 reward'>
                    <h6>Tiền Thưởng : <span>{tienThuong} $</span></h6>
                </div>
            </div>
            <button className='btn btn-success' onClick={handleReload}>Chơi Lại</button>

        </div>

    )
}
