import axios from 'axios'

const $host = axios.create({ //// создаем инстанс для обычный запросов
 baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({ //// создаем инстанс для обычный запросов
 baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
 config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
 return config
} 

$authHost.interceptors.request.use(authInterceptor) //// бцдет подставлять токен в хэдер

export {
    $host,
    $authHost
}