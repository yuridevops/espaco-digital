import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sintetizador.rj.r.appspot.com'
})

export default api