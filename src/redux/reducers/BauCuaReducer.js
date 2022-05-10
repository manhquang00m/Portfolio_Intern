const initialState = {
    danhSachQuanCuoc: [
        { name: 'bau', url: './assets/img/bau.png', diem: 0 },
        { name: 'cua', url: './assets/img/cua.png', diem: 0 },
        { name: 'tom', url: './assets/img/tom.png', diem: 0 },
        { name: 'ca', url: './assets/img/ca.png', diem: 0 },
        { name: 'nai', url: './assets/img/nai.png', diem: 0 },
        { name: 'ga', url: './assets/img/ga.png', diem: 0 }
    ],
    tienThuong: 1000,
    xucXac: [
        { name: 'ca', url: './assets/img/ca.png', diem: 0 },
        { name: 'nai', url: './assets/img/nai.png', diem: 0 },
        { name: 'ga', url: './assets/img/ga.png', diem: 0 }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CONG_TRU_DIEM': {
            let dsUpdate = [...state.danhSachQuanCuoc]
            let index = dsUpdate.findIndex(item => item.name === action.tenQuanCuoc)
            if (action.tangGiam) {
                dsUpdate[index].diem += 100
                state.tienThuong -= 100
            } else {
                if (dsUpdate[index].diem === 0) {
                    alert('Không thể giảm nữa !')
                } else {
                    dsUpdate[index].diem -= 100
                    state.tienThuong += 100
                }
            }
            state.danhSachQuanCuoc = dsUpdate
            return { ...state }
        }

        case 'XOC_DIA': {

            let dsUpdate = []
            for (let i = 0; i < 3; i++) {
                let xoc = state.danhSachQuanCuoc[Math.floor(Math.random() * state.danhSachQuanCuoc.length)]
                dsUpdate.push(xoc)
            }
            // Lấy ra danh sách Quân Cược mà người dùng chọn
            let arrXucXac = state.danhSachQuanCuoc.filter((item) => item.diem > 0)
            arrXucXac.forEach(quanCuoc => {
                dsUpdate.forEach(xucXac => {
                    if (quanCuoc.name === xucXac.name) {
                        state.tienThuong += quanCuoc.diem
                    }
                })
            })

            // Xu ly hoan tien
            arrXucXac.forEach(quanCuoc => {
                let index = dsUpdate.findIndex(xucXac => xucXac.name === quanCuoc.name)
                if (index >= 0) {
                    state.tienThuong += quanCuoc.diem
                }
            })

            // Xu ly lam moi game
            let newDSQuanCuoc = [...state.danhSachQuanCuoc]
            newDSQuanCuoc.map(item => {
                item.diem = 0
            })
            state.danhSachQuanCuoc = newDSQuanCuoc

            // Cap nhat lai xuc xac Random
            state.xucXac = dsUpdate
            return { ...state }

        }

        case 'CHOI_LAI': {
            window.location.reload(false);
            break
        }
        default:
            return state
    }
}
