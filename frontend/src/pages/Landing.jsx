import imagenrefef from '../../public/img/Gemini_Generated_Image_e4kjl3e4kjl3e4kj.png'
import '../styles/Landing.css'
const Landing = () => {
    return (
        <div className='landing-container'>
            <h1 className='landing-title'>To do  App</h1>
            <p>Simplificá tu día. Organizá tus tareas, cumplí tus metas y liberá tu mente con nuestra app</p>
            <button>Inciar sesion</button>
            <img src={imagenrefef} alt="lista de tareas pendientes" />
        </div>
    )
}

export default Landing