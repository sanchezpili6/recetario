import {recetasApi} from "@/components/recetasApi";

const listarRecetas = async () => {
    const response = await recetasApi.get('/');
    return response.data;
}

export {
    listarRecetas
}
