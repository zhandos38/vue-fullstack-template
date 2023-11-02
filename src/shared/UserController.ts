import { BackendMethod, remult } from "remult";
import { User } from "@/shared/User";

export class UserController {
  @BackendMethod({ allowed: true, apiPrefix: "users" })
  static async deleteMany(ids: number[]) {
    const userRepo = remult.repo(User);
    for (const id of ids) {
      await userRepo.delete(id);
    }
  }
}
