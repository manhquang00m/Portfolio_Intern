// setup State gio hang tren Store

const stateGioHang = {
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)

            if (index !== -1) {
                state.gioHang[index].soLuong += 1
            } else {
                state.gioHang.push(action.spGioHang)
            }

            // setState
            state.gioHang = [...state.gioHang]
            return { ...state }

        }

        case 'XOA_SAN_PHAM': {
            const newGioHang = state.gioHang.filter((sp) => sp.maSP !== action.sanPham.maSP)
            console.log('old:', stateGioHang)
            state.gioHang = newGioHang
            return { ...state }

        }

        case 'TANG_GIAM_SO_LUONG': {
            let gioHangNew = [...state.gioHang]
            let index = gioHangNew.findIndex(spGH => spGH.maSP === action.maSP)

            if (index !== -1) {
                if (action.tangGiam) {
                    gioHangNew[index].soLuong += 1
                } else {
                    if (gioHangNew[index].soLuong > 1) {
                        gioHangNew[index].soLuong -= 1
                    } else {
                        alert('Số Lượng Đã Giảm Xuống Mức Tối Thiểu')
                    }
                }
            }
            // setState
            state.gioHang = gioHangNew
            return { ...state }
        }
        default: return { ...state }
    }

}

export default BaiTapGioHangReducer