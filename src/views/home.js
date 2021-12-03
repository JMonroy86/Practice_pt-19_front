import { useContext, useState } from "react"
import { Context } from "../store/appContext"

const Home = () => {
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
        <div className="row pt-5">
            {
                store.currentUser === null ?
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
                    </div>
                    :
                   <div className="col-6 offset-3">
                        <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={store.userData?.data.avatar} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{store.userData?.data.first_name} {store.userData?.data.last_name} </h5>
                                    <p className="card-text">{store.userData?.support.text}</p>
                                    <p className="card-text"><small className="text-muted">{store.userData?.data.email}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>

            }
        </div>
    )
}
export default Home;