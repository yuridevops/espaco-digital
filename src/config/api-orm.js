import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sicredi-api.rj.r.appspot.com'
})

export const user = "sicredi_admin@admin.com.br"
export const secret = "sicrediadmin"

export default api