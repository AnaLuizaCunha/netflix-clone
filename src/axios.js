import axios from "axios";

/* url para fazer requerimentos no banco de dados da api */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;