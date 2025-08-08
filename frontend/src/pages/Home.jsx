import Header from "../components/Header"
import TaskList from "../components/TaskList"
import '../styles/Home.css'

const Home = () => {
    return (
        <div >
            <Header />
            <div className="home-container">
                <input type="text" />
                <button>Agregar Tarea</button>
            </div>
            <TaskList />
        </div >
    )
}

export default Home