
const Singup = ({ correo, contrasena, handleRegister, setEmail, setPassword }) => {



    return (
        <div className='container'>
            <h1 className='title'>Sing up</h1>

            <form className='form-container' onSubmit={handleRegister}>

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" placeholder="Correo" value={correo}
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="">Password</label>
                <input type="password" name="Contraseña" id="" value={contrasena}
                    placeholder="Contrasena"
                    onChange={(e) => setPassword(e.target.value)} />

                <button >Resgistrarse</button>
            </form>
        </div>
    )
}

export default Singup


