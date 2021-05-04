import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sicredi-api.rj.r.appspot.com'
})

export const user = "sicredi_admin@sicredi.com.br"
export const secret = "Saporei1"

export default api