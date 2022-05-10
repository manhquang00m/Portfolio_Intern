const stateXucXac = {
    xucXac: [{ luaChon: '', banThang: 0, banChoi: 0, arr: [1, 1, 1] }]
}

const BaiTapXucXacReducer = (state = stateXucXac, action) => {

    switch (action.type) {
        case 'CHON_TAI_XIU': {
            let xucXacUpdate = [...state.xucXac]
            if (action.taiXiu) {
                xucXacUpdate[0].luaChon = 'TÀI'
            } else {
                xucXacUpdate[0].luaChon = 'XỈU'
            }
            state.xucXac = xucXacUpdate
            return { ...state }
        }
        case 'PLAY_GAME': {
            let xucXacUpdate = [...state.xucXac]
            let ketQua = 0
            for (let i = 0; i < 3; i++) {
                xucXacUpdate[0].arr[i] = Math.floor(Math.random() * 6) + 1
                ketQua += xucXacUpdate[0].arr[i]
            }
            console.log(xucXacUpdate[0].luaChon)
            if ((xucXacUpdate[0].luaChon === 'TÀI' && ketQua >= 11 && ketQua <= 17) || (xucXacUpdate[0].luaChon === 'XỈU' && ketQua >= 4 && ketQua <= 10)) {
                xucXacUpdate[0].banThang += 1
            } else {
                xucXacUpdate[0].banThang -= 1
            }
            xucXacUpdate[0].banChoi += 1
            state.xucXac = xucXacUpdate

            return { ...state }
        }
        default: return { ...state }
    }
}

export default BaiTapXucXacReducer