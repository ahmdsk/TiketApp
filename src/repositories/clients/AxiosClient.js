import axios from "axios"

const baseDomain = "http://127.0.0.1:3333"
const baseURL    = `${baseDomain}/api/v1`

const httpClient = axios.create({
    baseURL
})

httpClient.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default httpClient