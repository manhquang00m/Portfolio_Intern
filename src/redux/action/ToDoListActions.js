import { add_task, change_theme, done_task, delete_task, edit_task, update_task, input_task } from "../types/ToDoListTypes";


export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask
})

export const changeThemeAction = (idTheme) => (
  {
    type: change_theme,
    idTheme
  }
)

export const doneTaskAction = (idTask) => ({
  type: done_task,
  idTask
})

export const deleteTaskAction = (idTask) => ({
  type: delete_task,
  idTask
})

export const editTaskAction = (task) => ({
  type: edit_task,
  task
})

export const inputAction = (char) => ({
  type: input_task,
  char
})

export const updateTaskAction = (taskName) => ({
  type: update_task,
  taskName
})