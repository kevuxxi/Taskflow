import '../styles/TaskList.css'
import TaskItem from './TaskItem'

const TaskList = () => {
    return (
        <ul className="task-list">
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </ul>
    )
}

export default TaskList