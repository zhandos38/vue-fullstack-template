import httpCommon from '@/helpers/http-common'
import type { AxiosPromise } from 'axios'

const baseUrl = `${import.meta.env.VITE_API_URL}/auth`
class AuthService {
  login(username: string, password: string): AxiosPromise {
    return httpCommon.post(`${baseUrl}/login`, { username, password })
  }
}

export default new AuthService()
