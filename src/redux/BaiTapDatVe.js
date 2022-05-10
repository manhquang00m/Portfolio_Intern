const stateVeFilm = {
    VeFilm: { soGhe: ['A1', 'A2'] }
}

const BaiTapDatFilm = (state = stateVeFilm, action) => {
    switch (action.type) {
        case 'CHON_SO_GHE': {
            let VeFilmUpdate = { ...state.VeFilm }
            let indexTrungGhe = VeFilmUpdate.soGhe.findIndex(item => item === action.soGhe)
            if (indexTrungGhe >= 0) {
                VeFilmUpdate.soGhe.splice(indexTrungGhe, 1)
                console.log(VeFilmUpdate.soGhe.splice(indexTrungGhe, 1))
            } else {
                VeFilmUpdate.soGhe.push(action.soGhe)
            }
            VeFilmUpdate.soGhe.push(action.soGhe)
            state.VeFilm = VeFilmUpdate
            return { ...state }
        }
        case 'XOA_GHE': {
            let VeFilmUpdate = { ...state.VeFilm }
            let string = action.soGhe.split("", 1)

            action.listGhe.map((item, index) => {
                if (item.hang === string[0]) {
                    item.danhSachGhe.map((ghe) => {
                        if (ghe.soGhe === action.soGhe) {
                            ghe.daDat = false
                        }
                    })

                }
            })

            const new_arr = VeFilmUpdate.soGhe.filter(item => item !== action.soGhe);
            VeFilmUpdate.soGhe = new_arr
            state.VeFilm = VeFilmUpdate
            return { ...state }
        }
    }
    return { ...state }
}

export default BaiTapDatFilm