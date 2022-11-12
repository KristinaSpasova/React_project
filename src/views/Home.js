import { useState } from 'react'
import { useParams } from 'react-router-dom';

const newProject = {
        id: 0,
        name: '',
        description: '',
        visibleDescription: false,
        status: '',
        deadline: ''
    }
    //const { id } = useParams();

function Home() {

    const [state, setState] = useState({
        projects: [],
        newProject,
        editMode: false,
    })

    const handleChange = e => {
        const { name, value } = e.target

        setState(prev => ({
            ...prev,
            newProject: {
                ...prev.newProject,
                [name]: value
            }
        }))
    }

    const handleAdd = () => {
        setEditMode(false)
        if (state.editMode) {
            const { projects } = state

            const updatedProjects = projects.map((project, i) => {
                if (Number(state.editMode) === i) {
                    project = state.newProject
                }

                return project
            })

            setState(prev => ({
                ...prev,
                projects: updatedProjects,
                newProject
            }))

            return
        }
        setState(prev => ({
            ...prev,
            projects: [
                prev.newProject,
                ...prev.projects
            ],
            newProject
        }))
    }

    const toggleDescription = index => {
        const { projects } = state

        const updatedProjects = projects.map((project, i) => {
            if (index === i) {
                project.visibleDescription = !project.visibleDescription
            }

            return project
        })

        setState(prev => ({
            ...prev,
            projects: updatedProjects,
            newProject
        }))
    }

    const handleRemove = index => {
        const { projects } = state

        const updatedProjects = projects.filter((project, i) => {
            return index != i
        })

        setState(prev => ({
            ...prev,
            projects: updatedProjects,
            newProject
        }))
    }

    const handleEdit = index => {
        setEditMode(String(index))
        const { projects } = state

        const currentElement = projects[index]

        setState(prev => ({
            ...prev,
            newProject: currentElement
        }))
    }

    const setEditMode = (editMode = false) => {
        setState(prev => ({
            ...prev,
            editMode
        }))
    }

    const handleComplete = (e, index) => {
        const { checked } = e.target
        const { projects } = state

        const updatedProjects = projects.map((project, i) => {
            if (index === i) {
                project.completed = checked
            }

            return project
        })

        setState(prev => ({
            ...prev,
            projects: updatedProjects,
            newProject
        }))
    }

    const getProjects = () => {
        const { projects } = state

        return projects
    }

    // const displayProject = index1 => {
    //     const { projects } = state

    //     const updatedProjects = projects.map((project, i) => {
    //         if(index1 === i){
    //             return project.name
    //         }

    //     })
    // }

    return (

        <
        div className = "container" >
        <
        div className = "col" >
        <
        div >
        <
        strong > Система за съхранение на проекти < /strong> <
        /div> <
        div className = "row" >
        <
        input type = "text"
        placeholder = "Име на проект..."
        onChange = { handleChange }
        name = "name"
        required value = { state.newProject.name }
        /> <
        button onClick = { handleAdd } > { state.editMode ? 'Запази' : 'Добавяне' } <
        /button> <
        /div> <
        div className = "row" >
        <
        textarea placeholder = "Уникален номер..."
        onChange = { handleChange }
        name = "id"
        required value = { state.newProject.id } > < /textarea> <
        /div> <
        div className = "row" >
        <
        textarea placeholder = "Описание..."
        onChange = { handleChange }
        name = "description"
        required value = { state.newProject.description } > < /textarea> <
        /div> <
        div className = "row" >
        <
        textarea placeholder = "Статус..."
        onChange = { handleChange }
        name = "status"
        required value = { state.newProject.status } > < /textarea> <
        /div> <
        div className = "row" >
        <
        textarea placeholder = "Краен срок..."
        onChange = { handleChange }
        name = "deadline"
        required value = { state.newProject.deadline } > < /textarea> <
        /div> <
        ul className = "tabs row" >
        <
        li >
        Всички <
        /li> {} <
        /ul> <
        ul className = "list" > {
            getProjects().map((project, i) =>
                <
                li >
                <
                div className = "row" >
                <
                div > {} <
                b onClick = {
                    () => {
                        toggleDescription(i)
                    }
                } > { project.name } <
                /b> <
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
                /div> {} <
                /li>
            )
        } <
        /ul> <
        /div> <
        /div>

    )

}
export default Home