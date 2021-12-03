const getState = ({ getStore, getActions, setStore }) => {
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
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/register', {
                        method: 'POST',
                        headers: { "Content-type": "application/json",
                                    authorization: 'Bearer ' + store.currentUser.token },
                        body: JSON.stringify(state)
                    })
                    const data = await resp.json()
                    await actions.getSingleUser(data.id)
                    setStore({ currentUser: data })
                } catch (error) {
                    console.log(error)
                }
            },
            getSingleUser: async id => {
                try {
                    const resp = await fetch(process.env.REACT_APP_API_URL + 'api/users/' + id)
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
