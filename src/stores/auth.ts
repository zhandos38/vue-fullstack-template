import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import authService from '@/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const returnUrl = ref<string | null>(null)

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user') || '')
  }

  const getIsLoggedIn = () => {
    return localStorage.getItem('token') && localStorage.getItem('token')
  }

  const getToken = () => {
    return localStorage.getItem('token')
  }

  const login = async (username: string, password: string) => {
    const response = await authService.login(username, password)

    const { user, access_token } = response.data

    // store user details and jwt in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', access_token)

    // redirect to previous url or default to home page
    router.push(returnUrl.value || '/')
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.push('/login')
  }

  return { getUser, returnUrl, login, logout, getIsLoggedIn, getToken }
})
