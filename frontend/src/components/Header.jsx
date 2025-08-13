import logo from '../../public/img/Gemini_Generated_Image_ec0lwqec0lwqec0l.png'
import { signOut } from 'firebase/auth'
import { auth } from '../db/firebase'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'
const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    }

    return (

        < div className='header' >
            <img src={logo} className='logo' alt="" />
            <h1>To Do App</h1>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div >
    )
}


export default Header

