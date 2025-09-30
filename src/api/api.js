// Importação do Axios para o funcionamento da API e buscar CEP na Data Base do Via CEP!.
import axios from "axios";

// Referencia de URL para a API.
// https://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

// Exporta a API para o uso da Aplicação!.
export default api;