import { useState } from 'react'
import { useEffect } from 'react'

const newTask = {
    name: '',
    description: '',
}
const Project = () => {

    const [state, setState] = useState({
        tasks: [],
        newTask,
        editMode: false,
    })

    const handleChange = e => {
        const { name, value } = e.target

        setState(prev => ({
            ...prev,
            newTask: {
                ...prev.newTask,
                [name]: value
            }
        }))
    }

    const handleAdd = () => {
        setEditMode(false)
        if (state.editMode) {
            const { tasks } = state

            const updatedTasks = tasks.map((task, i) => {
                if (Number(state.editMode) === i) {
                    task = state.newTask
                }

                return task
            })

            setState(prev => ({
                ...prev,
                tasks: updatedTasks,
                newTask
            }))

            return
        }
        setState(prev => ({
            ...prev,
            tasks: [
                prev.newTask,
                ...prev.tasks
            ],
            newTask
        }))
    }

    const handleRemove = index => {
        const { tasks } = state

        const updatedTasks = tasks.filter((task, i) => {
            return index != i
        })

        setState(prev => ({
            ...prev,
            tasks: updatedTasks,
            newTask
        }))
    }

    const handleEdit = index => {
        setEditMode(String(index))
        const { tasks } = state

        const currentElement = tasks[index]

        setState(prev => ({
            ...prev,
            newTask: currentElement
        }))
    }

    const setEditMode = (editMode = false) => {
        setState(prev => ({
            ...prev,
            editMode
        }))
    }

    const getTasks = () => {
        const { tasks } = state

        return tasks
    }


    return (

        <
        div className = "container" >

        <
        div className = "col" >
        <
        strong > Информация за проект < /strong> <
        div className = "row" >
        <
        strong > id: < /strong>  <
        /div> <
        div className = "row" >
        <
        strong > заглавие: < /strong>  <
        /div> <
        div className = "row" >
        <
        strong > описание: < /strong>  <
        /div> <
        div className = "row" >
        <
        strong > статус: < /strong> <
        /div> <
        div className = "row" >
        <
        strong > крайна дата: < /strong>  <
        /div> <
        /div> <
        div className = "col" >
        <
        div className = "row" >
        <
        input type = "text"
        placeholder = "Заглавие на задача..."
        onChange = { handleChange }
        name = "name"
        value = { state.newTask.name }
        /> <
        button onClick = { handleAdd } > { state.editMode ? 'Запази' : 'Добавяне' } <
        /button> <
        /div> <
        div className = "row" >
        <
        textarea placeholder = "Описание..."
        onChange = { handleChange }
        name = "description"
        value = { state.newTask.description } > < /textarea> <
        /div> <
        div className = "tabs row" >
        Всички <
        /div> <
        ul className = "list" > {
            getTasks().map((task, i) =>
                <
                li >
                <
                div className = "row" > { task.name } { task.description } <
                /div> <
                div className = "options" >
                <
                span className = "edit"
                onClick = {
                    () => {
                        handleEdit(i)
                    }
                } > { '[Р]' } <
                /span> <
                span className = "delete"
                onClick = {
                    () => {
                        handleRemove(i)
                    }
                } > { '[И]' } <
                /span> <
                /div> <
                /li>
            )
        } <
        /ul> <
        /div> <
        /div>
    )

}
export default Project