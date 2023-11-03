export const uploadFile = async (filename: string, data: string) => {
  const fs = await import('fs')

  fs.writeFileSync(`${process.cwd()}/public/uploads/` + filename, data, 'base64')
}

export const generateNewFilename = (filename: string) => {
  return Date.now() + `-${filename}`
}

export const convertFileToBase64 = async (file: File) => {
  const result = await toBase64(file)
  if (result) {
    return result.toString().replace('data:', '').replace(/^.+,/, '')
  }

  return null
}

const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })
