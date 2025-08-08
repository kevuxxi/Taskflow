import React from 'react'

const TaskItem = ({ tarea, tareaCompletada, eliminarTarea }) => {




    return (
        <li className={`item ${tarea.isCompleted ? 'completed' : ''}`} >
            <p>{tarea.text}</p>
            <input type="checkbox" checked={tarea.isCompleted} onChange={() => tareaCompletada(tarea.id)} id="" />
            <button onClick={() => (eliminarTarea(tarea.id))}>Eliminar</button>
        </li >
    )
}

export default TaskItem