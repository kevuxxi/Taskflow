import '../styles/TaskList.css'
import TaskItem from './TaskItem'

const TaskList = ({ tareas, tareaCompletada, eliminarTarea }) => {
    return (
        <ul className="task-list">
            {tareas.map((tarea) => (<li key={tarea.id}><TaskItem tareaCompletada={tareaCompletada} eliminarTarea={eliminarTarea} tarea={tarea} /></li>))}
        </ul>
    )
}

export default TaskList