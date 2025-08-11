import { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import Singup from '../components/Singup'

const Login = () => {

    const [singup, setSingup] = useState(false)

    const singupform = (e) => {
        e.preventDefault();
        setSingup(!singup)
        console.log('clickeado, singup:', !singup);
    }
   

    return (
        <div>
            {singup ? (<Singup/>) :
                (<div className='container'>

                    < h1 className='title' > Login</h1 >

                    <form className='form-container'>

                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" />

                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" />

                        <Link to={'/login'} > <button>Iniciar sesión</button></Link>

                        <a href="#" onClick={singupform}>Registrarse</a>
                    </form>
                </div >)}
        </div>

    )
}

export default Login



