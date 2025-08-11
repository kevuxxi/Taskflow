
const Singup = () => {

    return (
        <div className='container'>
            <h1 className='title'>Sing up</h1>

            <form className='form-container'>

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" />

                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" />

                <button>Resgistrarse</button>
            </form>
        </div>
    )
}

export default Singup


