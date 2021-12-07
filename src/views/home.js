import { useContext } from "react"
import CardUser from "../components/CardUser"
import Login from "../components/Login"
import { Context } from "../store/appContext"

const Home = () => {
    const { store } = useContext(Context)
    return (
        <div className="row pt-5">
            {
                store.currentUser === null ?
                    <Login />           
                    :
                   <div className="col-6 offset-3">
                       {
                           store?.userData?.users?.map(user => {
                               return (
                                   <div key={user.id}>
                                       {<CardUser user= {user} />}
                                   </div>
                               )
                            })
                       }
                    </div>
            }
        </div>
    )
}
export default Home;