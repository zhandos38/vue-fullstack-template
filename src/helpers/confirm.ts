import { useConfirm } from 'primevue/useconfirm'

interface ConfirmParams {
  message?: string
  header?: string
  accept?: () => void
  reject?: () => void
}

export const useAppConfirm = () => {
  const confirm = useConfirm()

  const showDelete = (params: ConfirmParams) => {
    confirm.require({
      message: params.message ?? 'Вы точно хотите удалить?',
      header: params.header ?? 'Подтверждение удаление',
      icon: 'pi pi-info-circle',
      acceptClass: 'p-button-danger',
      accept: params.accept,
      reject: params.reject,
      acceptLabel: 'Да',
      rejectLabel: 'Нет'
    })
  }

  return {
    showDelete
  }
}
