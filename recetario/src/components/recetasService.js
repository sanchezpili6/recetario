import {recetasApi} from "@/components/recetasApi";

const listarRecetas = async () => {
    const response = await recetasApi.get('/');
    return response.data;
}
const borrarReceta = async (id) => {
    const response = await recetasApi.delete(`/${id}`);
    return response.data;
}
const editarReceta = async (id, data) => {
    const response = await recetasApi.put(`/${id}`, data);
    return response.data;
}
const conseguirReceta = async (id) => {
    const response = await recetasApi.get(`/${id}`);
    return response.data;
}

export {
    listarRecetas,
    borrarReceta,
    editarReceta,
    conseguirReceta
}
