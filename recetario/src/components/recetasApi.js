import axios from 'axios'

const recetasApi = axios.create({
    baseURL: 'https://b064-177-247-106-189.ngrok.io/receta-controller/recetas',
    timeout: 5000,
    headers: {
        "Content-type": "application/json"
    }
});

export {
    recetasApi
}
