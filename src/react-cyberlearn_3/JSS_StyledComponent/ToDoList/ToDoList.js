import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { Button } from '../Components/Button';
import { Container } from '../Components/Container';
import { Dropdown } from '../Components/Dropdown';
import { Heading3 } from '../Components/Heading';
import { Table, Th, Thead, Tr } from '../Components/Table';
import { TextField } from '../Components/TextField';
import { connect } from 'react-redux'
import { addTaskAction, changeThemeAction, doneTaskAction, deleteTaskAction, editTaskAction, updateTaskAction, inputAction } from '../../../redux/action/ToDoListActions';


function ToDoList(props) {

    console.log(props.taskList)
    const renderTaskToDo = () => {
        const taskToDo = props.taskList.filter((list) => !list.done)
        const res = taskToDo.map((task, index) => {
            return <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th style={{ float: 'right', border: '0' }}>
                    {/* edit task */}
                    <Button onClick={() => {
                        props.dispatch(editTaskAction(task))
                    }}><i className='fa fa-edit'></i></Button>
                    <Button onClick={() => props.dispatch(doneTaskAction(task.id))}><i className='fa fa-check'></i></Button>
                    <Button onClick={() => props.dispatch(deleteTaskAction(task.id))}><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
        return res
    }

    const renderTaskComplete = () => {
        const taskComplete = props.taskList.filter((list) => list.done)
        const res = taskComplete.map((task, index) => {
            return <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th style={{ float: 'right', border: '0' }}>
                    <Button onClick={() => props.dispatch(deleteTaskAction(task.id))}><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
        return res
    }

    const addInput = (event) => {
        props.dispatch(inputAction(event.target.value))
    }
    return (
        <ThemeProvider theme={props.themeTDL}>
            <div className='mt-5 container'>
                <div className='row'>
                    <Container className='col-lg-8 col-md-10 col-sm-10'>
                        <Dropdown onChange={(event) => props.dispatch(changeThemeAction(event.target.value))}>
                            <option value="0" >DarkTheme</option>
                            <option value="1" >LightTheme</option>
                            <option value="2" >PrimaryTheme</option>
                        </Dropdown>
                        <Heading3 className='mt-2'>To do List</Heading3>
                        <TextField label="Task Name" add={addInput} val={props.input} className="w-50">
                        </TextField>
                        <Button onClick={() => {
                            let newTask = {
                                id: Date.now(),
                                taskName: props.input,
                                done: false
                            }
                            props.dispatch(addTaskAction(newTask))
                        }}><i className='fa fa-plus'></i> Add Task</Button>
                        <Button onClick={() => {
                            props.dispatch(updateTaskAction(props.input))
                        }}><i className='fa fa-upload'></i> Update Task</Button>
                        <hr />
                        <Heading3 className='mt-2'>Task to do</Heading3>
                        <Table>
                            <Thead>
                                {
                                    renderTaskToDo()
                                }
                            </Thead>
                        </Table>

                        <Heading3 className='mt-5'>Task Completed</Heading3>
                        <Table>
                            <Thead>
                                {
                                    renderTaskComplete()
                                }
                            </Thead>
                        </Table>
                    </Container>
                </div>

            </div>
        </ThemeProvider>

    );
}


const mapStateToProps = state => {
    return {
        themeTDL: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit,
        input: state.ToDoListReducer.input
    }
}

export default connect(mapStateToProps)(ToDoList);