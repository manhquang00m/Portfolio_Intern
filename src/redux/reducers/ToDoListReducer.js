import { DarkThemeTDL } from "../../react-cyberlearn_3/JSS_StyledComponent/Theme/DarkThemeTDL"
import { LightThemeTDL } from "../../react-cyberlearn_3/JSS_StyledComponent/Theme/LightThemeTDL"
import { PrimaryThemeTDL } from "../../react-cyberlearn_3/JSS_StyledComponent/Theme/PrimaryThemeTDL"

import { add_task, change_theme, done_task, delete_task, edit_task, update_task, input_task } from "../types/ToDoListTypes";

const initialState = {
    themeToDoList: DarkThemeTDL,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false },
    ],
    taskEdit: { id: 'task-0', taskName: 'no', done: false },
    input: ''

}

export default (state = initialState, action) => {
    switch (action.type) {

        case add_task: {
            // Kiem tra xem phan tu rong
            if (action.newTask.taskName.trim() === '') {
                alert('Vui lòng nhập lại !')
            }
            // Kiem tra xem co bi trung ten task
            let indexName = state.taskList.findIndex((task) => task.taskName === action.newTask.taskName)
            if (indexName >= 0) {
                alert('Bị trùng tên task !')
            } else {
                state.taskList = [...state.taskList, action.newTask]
            }
            state.input = ''
            return { ...state }
        }

        case change_theme: {
            if (action.idTheme === '0') {
                state.themeToDoList = DarkThemeTDL
            } else if (action.idTheme === '1') {
                state.themeToDoList = LightThemeTDL

            } else {
                state.themeToDoList = PrimaryThemeTDL
            }
            return state
        }

        case done_task: {
            let taskUpdate = [...state.taskList]
            taskUpdate.map(task => {
                if (task.id === action.idTask) {
                    task.done = true
                }
            })
            state.taskList = taskUpdate
            return { ...state }
        }

        case delete_task: {
            let taskUpdate = state.taskList.filter((task) => task.id !== action.idTask)
            state.taskList = taskUpdate
            return { ...state }
        }

        case edit_task: {
            console.log('edit', action.task)
            state.taskEdit = action.task
            state.input = action.task.taskName

            return { ...state }
        }

        case update_task: {
            state.taskEdit.taskName = action.taskName

            //reset input and re-render
            state.input = ''
            return { ...state }
        }

        case input_task: {
            // Lấy dữ liệu nhập từ bàn phím chuyển vào state.input
            state.input = action.char
            return { ...state }
        }

        default:
            return state
    }
}
