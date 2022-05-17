import axios from 'axios'

const recetasApi = axios.create({
    baseURL: 'http://localhost:3000/receta-controler/recetas',
    timeout: 5000,
    headers: {
        "Content-type": "application/json"
    }
});

export {
    recetasApi
}
