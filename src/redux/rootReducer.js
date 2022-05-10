import { combineReducers } from 'redux'
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapXucXacReducer from './BaiTapXucXacReducer'
import BaiTapDatFilm from './BaiTapDatVe'
import ToDoListReducer from './reducers/ToDoListReducer'
import FakebookReducer from './reducers/FakebookReducer'
import BauCuaReducer from './reducers/BauCuaReducer.js'

// store tong cua ung dung
const rootReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    stateXucXac: BaiTapXucXacReducer,
    stateVeFilm: BaiTapDatFilm,
    ToDoListReducer,
    FakebookReducer,
    BauCuaReducer
})

export default rootReducer