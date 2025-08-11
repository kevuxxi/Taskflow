import { useEffect, useState } from "react"
import Header from "../components/Header"
import TaskList from "../components/TaskList"
import '../styles/Home.css'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../db/firebase.js"


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

    const tareaCompletada = (id) => {
        const tareaActualizada = tareas.map((tarea) => (tarea.id === id ? { ...tarea, isCompleted: !tarea.isCompleted } : tarea))
        setTareas(tareaActualizada)
    }


    const eliminarTarea = (id) => {
        const tareasRestantes = tareas.filter((tarea) => (tarea.id !== id))
        setTareas(tareasRestantes)
    }

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const snap = await getDocs(collection(db, "tasks"));
                const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTareas(data);
            } catch (err) {
                console.error("Error leyendo tasks:", err);
            }
        };
        fetchTasks();
    }, [])



    return (
        <div >
            <Header />
            <div className="home-container">
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe una nueva tarea..." />
                <button onClick={() => (aggTarea(texto))}>Agregar Tarea</button>
            </div>
            <TaskList tareas={tareas} tareaCompletada={tareaCompletada} eliminarTarea={eliminarTarea} />
        </div >
    )
}


export default Home 