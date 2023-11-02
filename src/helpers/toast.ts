import { useToast } from 'primevue/usetoast'
import type { ToastMessageOptions } from 'primevue/toast'

export const useAppToast = () => {
  const toast = useToast()

  const showSuccess = (message: string, options?: ToastMessageOptions) => {
    toast.add({ severity: 'success', summary: 'Успех', detail: message, life: 3000, ...options })
  }

  const showInfo = (message: string, options?: ToastMessageOptions) => {
    toast.add({ severity: 'info', summary: 'Информация', detail: message, life: 3000, ...options })
  }

  const showWarn = (message: string, options?: ToastMessageOptions) => {
    toast.add({ severity: 'warn', summary: 'Внимание', detail: message, life: 3000, ...options })
  }

  const showError = (message: string = 'Какая-то ошибка', options?: ToastMessageOptions) => {
    toast.add({ severity: 'error', summary: 'Ошибка', detail: message, life: 3000, ...options })
  }

  return {
    showSuccess,
    showInfo,
    showWarn,
    showError
  }
}
