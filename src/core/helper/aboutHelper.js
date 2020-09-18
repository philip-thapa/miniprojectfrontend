import { API } from "../../backend"

export const AboutAPI = () => {
    return fetch(`${API}`, {
        method: "GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(error=>console.log(error))
}