import React from 'react'

const TaskItem = ({ tarea }) => {
    return (
        <li className='item'>
            <p>{tarea.text}</p>
            <input type="checkbox" name="" id="" />
            <button>Eliminar</button>
        </li>
    )
}

export default TaskItem