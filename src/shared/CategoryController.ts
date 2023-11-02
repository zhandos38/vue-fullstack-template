import { BackendMethod, Controller } from "remult";

@Controller("categories")
export class CategoryController {
  @BackendMethod({ allowed: true, apiPrefix: "categories" })
  static uploadImg(data: any): void {
    console.log("data", data);
  }
}
