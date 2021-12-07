import { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

const Login = () => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = e => {
        e.preventDefault()
        actions.sendForm(state)
    }
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <div className="col-6 offset-3">
            <form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => handleChange(e)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={e => handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link
                to="/register"
            >
                <a href="#">You don't have an account? Click here to register</a>
            </Link>
        </div>
    )
}

export default Login;