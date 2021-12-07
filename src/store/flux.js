import { createBrowserHistory } from 'history';
const getState = ({ getStore, getActions, setStore }) => {
    let history = createBrowserHistory();
    return {
        store: {
            currentUser: null,
            userData: null
        },
        actions: {
            // Use getActions to call a function within a fuction
            sendForm: async state => {
                try {
                    const actions = getActions()
                    const store = getStore()
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/auth/login', {
                        method: 'POST',
                        headers: { "Content-type": "application/json"},
                        body: JSON.stringify(state)
                    })
                    const data = await resp.json()
                    setStore({...store, currentUser: data })
                    await actions.getSingleUser(data.token)
                } catch (error) {
                    console.error(error)
                }
            },
            sendFormRegister: async state => {
                try {
                    const store = getStore()
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/auth/register', {
                        method: 'POST',
                        headers: { "Content-type": "application/json"},
                        body: JSON.stringify(state)
                    })
                    const data = await resp.json()
                    setStore({...store, currentUser: data })
                    history.push('/')
                } catch (error) {
                    console.error(error)
                }
            },
            getSingleUser: async (token) => {
                const store = getStore();
                try {
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/users', {
                        headers: { 
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${token}`
                    }
                    })
                    const data = await resp.json()
                    setStore({ userData: data })
                } catch (error) {
                    console.log(error) //UPS se me olvido xD!!!
                }
            }
        }
    };
};

export default getState;
