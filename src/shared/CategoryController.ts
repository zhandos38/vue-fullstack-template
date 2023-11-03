import { BackendMethod, Controller, remult } from 'remult'
import { Category } from '@/shared/Category'
import { generateNewFilename, uploadFile } from '@/shared/utils/uploadFile'

interface CategoryCreateDTO extends Category {
  imgFile: ''
}

interface CategoryUpdateDTO extends Partial<CategoryCreateDTO> {}

@Controller('categories')
export class CategoryController {
  @BackendMethod({ allowed: true, apiPrefix: 'categories' })
  static async create(params: CategoryCreateDTO) {
    const categoryRepo = remult.repo(Category)

    try {
      const newFileName = generateNewFilename(params.img)
      await categoryRepo.insert({
        ...params,
        img: newFileName
      })
      await uploadFile(newFileName, params.imgFile)
    } catch (err) {
      console.log(err)
      throw Error('Ошибка')
    }
  }

  @BackendMethod({ allowed: true, apiPrefix: 'categories' })
  static async update(params: CategoryUpdateDTO) {
    const categoryRepo = remult.repo(Category)

    if (params.img && params.imgFile) {
      const newFileName = generateNewFilename(params.img)
      await uploadFile(newFileName, params.imgFile)
      await categoryRepo.save({
        ...params,
        img: newFileName
      })
      return
    }
    await categoryRepo.save(params)
  }
}
