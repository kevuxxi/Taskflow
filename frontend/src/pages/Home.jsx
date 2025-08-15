import { useEffect, useState, useContext } from "react"
import Header from "../components/Header"
import TaskList from "../components/TaskList"
import '../styles/Home.css'
import { collection, addDoc, query, where, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../db/firebase.js"
import { AuthContext } from "../Context/AuthContext.jsx"
import Loading from "../components/Loading.jsx"

const Home = () => {

    const { currentUser } = useContext(AuthContext);

    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState('')
    const [loading, setloading] = useState(true);

    const aggTarea = async (texto) => {

        if (texto.trim() === '') return;

        if (!currentUser) {
            console.error("No hay un usuario autenticado.");
            return;
        }

        const nuevatarea = {
            text: texto,
            isCompleted: false,
            userId: currentUser.uid,
        }

        try {
            await addDoc(collection(db, "tasks"), nuevatarea);
            console.log("Tarea agregada con el ID del usuario.");
        } catch (e) {
            console.error("Error al agregar la tarea:", e);
        }
        setTexto('');
    }





    const tareaCompletada = async (id) => {
        const tareaActualizada = tareas.find((tarea) => (tarea.id === id));
        if (tareaActualizada) {
            const taskref = doc(db, 'tasks', id);
            await updateDoc(taskref, {
                isCompleted: !tareaActualizada.isCompleted
            })
        }
    }


    const eliminarTarea = async (id) => {
        const taskref = doc(db, 'tasks', id);
        await deleteDoc(taskref);
    }

    useEffect(() => {

        if (!currentUser) {
            setTareas([]);
            return;
        }

        const q = query(collection(db, "tasks"), where("userId", "==", currentUser.uid));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTareas(data);
        });
        setloading(false)
        return unsubscribe
    }, [currentUser])

    if (loading) {
        return <Loading />;
    }

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