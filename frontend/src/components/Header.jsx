import logo from '../../public/img/Gemini_Generated_Image_ec0lwqec0lwqec0l.png'
import '../styles/Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo}  className='logo' alt="" />
            <h1>To Do App</h1>
            <button>Cerrar sesion</button>
        </div>
    )
}

export default Header