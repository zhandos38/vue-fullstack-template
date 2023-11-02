import dayjs from 'dayjs'

export const assignParamsOfFirstFromSecondObject = (objectFirst: any, objectSecond: any) => {
  objectFirst = { ...objectFirst }

  const keys = Object.keys(objectFirst)
  keys.forEach((key) => {
    objectFirst[key] = objectSecond[key]
  })

  return objectFirst
}

export const getDateFromDateTime = (dateTime: Date) => {
  return dayjs(dateTime).format('DD/MM/YY')
}

export const getFormattedDate = (dateTime: Date) => {
  return dayjs(dateTime).format('DD/MM/YY HH:mm:ss')
}

export const getOrderString = (order: number) => {
  if (order === -1) {
    return 'desc'
  }

  return 'asc'
}

export const currencyFormatter = (currency: number) => {
  return new Intl.NumberFormat().format(currency)
}
