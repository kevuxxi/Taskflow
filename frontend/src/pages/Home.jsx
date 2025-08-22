import { useEffect, useState, useContext, use } from "react"
import Header from "../components/Header"
import TaskList from "../components/TaskList"
import '../styles/Home.css'
import { collection, addDoc, query, where, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "../db/firebase.js"
import { AuthContext } from "../Context/AuthContext.jsx"
import Loading from "../components/Loading.jsx"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from "@mui/material/AlertTitle"

const Home = () => {

    const { currentUser } = useContext(AuthContext);

    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState('')
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const [confirmMessage, setconfirmMessage] = useState(null);
    const [deleteMessage, setdeleteMessage] = useState(null);
    const [isAddingTask, setisAddingTask] = useState(false);

    const aggTarea = async (texto) => {

        if (texto.trim() === '') {
            seterror("❌ El campo no puede estar vacío ❌");
            setTimeout(() => {
                seterror(null)
            }, 2000);


            return
        };

        if (!currentUser) {
            console.error("No hay un usuario autenticado.");
            return;
        }

        const nuevatarea = {
            text: texto,
            isCompleted: false,
            userId: currentUser.uid,
        }

        setisAddingTask(true);

        try {
            await addDoc(collection(db, "tasks"), nuevatarea);
            setconfirmMessage("¡Tarea agregada con éxito!")
            console.log("✅ Tarea agregada con el ID del usuario. ✅");
        } catch (e) {
            console.error("Error al agregar la tarea:", e);
        } finally {
            setisAddingTask(false)
        }

        setTimeout(() => {
            setconfirmMessage(null)
        }, 2000);

        setTexto('');
        seterror(null);
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
        await deleteDoc(taskref)
        setdeleteMessage("❌ Tarea eliminada  ❌")
        setTimeout(() => {
            setdeleteMessage(null)
        }, 2000);

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
                <button disabled={isAddingTask} onClick={() => (aggTarea(texto))}>Agregar Tarea</button>
            </div>
            <Stack className="exito" spacing={4}>
                {error &&
                    <Alert severity="error" sx={{ fontSize: '1.6rem' }}>
                        {error}
                    </Alert>}
                {confirmMessage &&
                    <Alert severity="success" sx={{ fontSize: '1.6rem' }} >
                        {confirmMessage}
                    </Alert>}
                {deleteMessage &&
                    <Alert severity="info" sx={{ fontSize: '1.6rem' }}>
                        {deleteMessage}
                    </Alert>}
            </Stack>
            <TaskList tareas={tareas} tareaCompletada={tareaCompletada} eliminarTarea={eliminarTarea} />
        </div >
    )
}


export default Home 