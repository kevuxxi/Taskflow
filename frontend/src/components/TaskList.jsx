import '../styles/TaskList.css'
import TaskItem from './TaskItem'

const TaskList = ({ tareas }) => {
    return (
        <ul className="task-list">
            {tareas.map((tarea) => (<li key={tarea.id}><TaskItem tarea={tarea} /></li>))}
        </ul>
    )
}

export default TaskList