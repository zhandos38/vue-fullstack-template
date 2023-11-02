import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const httpCommon = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
})
httpCommon.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.getIsLoggedIn()) {
    config.headers.Authorization = 'Bearer ' + authStore.getToken()
  }
  return config
})

httpCommon.interceptors.response.use(response => response,
  error => {
    if (error.response.status === 401) {
      const authStore = useAuthStore()
      authStore.logout()
      return;
    }

    return Promise.reject(error);
  })

export default httpCommon
