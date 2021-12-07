import { useContext, useState } from "react"
import { Context } from "../store/appContext"

const Register = () => {
    const { actions } = useContext(Context)
    const [state, setState] = useState({
        email: "",
        password: "",
        username: "",
    })
    const handleSubmit = e => {
        e.preventDefault()
        actions.sendFormRegister(state)
    }
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <div className="col-6 offset-3">
            <h1>Register</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <label for="exampleInputUsername1" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" onChange={e => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => handleChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={e => handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register;