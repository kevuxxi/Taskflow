import { useState } from 'react'
import '../styles/Login.css'
import {  useNavigate } from 'react-router-dom'
import Singup from '../components/Singup'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../db/firebase.js'



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario creado:", userCredential.user);
            navigate('/home');
        } catch (error) {
            console.error("Error en el registro:", error.message);
            alert(error.message);
        }
    };

    const handleLogin = async (e) => {

        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user

            navigate('/home');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Usuario o password Incorrecto", errorCode, errorMessage);
        }
    };

    const [singup, setSingup] = useState(false)

    const singupform = (e) => {
        e.preventDefault();
        setSingup(!singup)
    }


    return (
        <div>
            {singup ? (<Singup correo={email} setEmail={setEmail} setPassword={setPassword} contrasena={password} handleRegister={handleRegister} />) :
                (<div className='container'>

                    < h1 className='title' > Login</h1 >

                    <form className='form-container' onSubmit={handleLogin}>

                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button>Iniciar sesión</button>

                        <a href="#" onClick={singupform}>Registrarse</a>
                    </form>
                </div >)}
        </div>

    )
}

export default Login



