import React from 'react';
import { connect } from 'react-redux'

function ThongTinTroChoi(props) {
    return (
        <div className='row '>
            <h1>BẠN CHỌN: <span style={{ color: 'red' }}>{props.xucXac[0].luaChon}</span></h1>
            <h1>Số bàn thắng: <span style={{ color: 'green' }}>{props.xucXac[0].banThang}</span></h1>
            <h1>Tổng số bàn chơi: <span style={{ color: 'blue' }}>{props.xucXac[0].banChoi}</span></h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.stateXucXac.xucXac
    }
}


export default connect(mapStateToProps)(ThongTinTroChoi);