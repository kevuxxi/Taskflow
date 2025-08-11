import { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import Singup from '../components/Singup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../db/firebase.js'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleRegister = async (e) => {

        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario creado:", userCredential.user);
            alert("Usuario registrado con éxito!");
        } catch (error) {
            console.error("Error en el registro:", error.message);
            alert(error.message);
        }
    };

    const [singup, setSingup] = useState(false)

    const singupform = (e) => {
        e.preventDefault();
        setSingup(!singup)
        console.log('clickeado, singup:', !singup);
    }


    return (
        <div>
            {singup ? (<Singup correo={email} setEmail={setEmail} setPassword={setPassword} contrasena={password} handleRegister={handleRegister} />) :
                (<div className='container'>

                    < h1 className='title' > Login</h1 >

                    <form className='form-container'>

                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Link to={'/login'} > <button>Iniciar sesión</button></Link>

                        <a href="#" onClick={singupform}>Registrarse</a>
                    </form>
                </div >)}
        </div>

    )
}

export default Login



