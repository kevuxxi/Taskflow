import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <h1 className='title'>Login</h1>

            <form className='form-container'>

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" />

                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" />

                <Link to={'/login'} > <button>Iniciar sesión</button></Link>
                <Link to={'/login'} className='form-container-singup'>Registrarse</Link>
            </form>
        </div>
    )
}

export default Login