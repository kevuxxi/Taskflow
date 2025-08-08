import { useState } from "react"
import Header from "../components/Header"
import TaskList from "../components/TaskList"
import '../styles/Home.css'

const Home = () => {

    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState('')



    const aggTarea = (texto) => {

        if (texto.trim() === '') return;


        const nuevatarea = {
            id: Date.now(),
            text: texto,
            isCompleted: false,
        }

        setTareas([...tareas, nuevatarea])

        setTexto('')

    }


    return (
        <div >
            <Header />
            <div className="home-container">
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe una nueva tarea..." />
                <button onClick={() => (aggTarea(texto))}>Agregar Tarea</button>
            </div>
            <TaskList tareas={tareas} />
        </div >
    )
}

export default Home 