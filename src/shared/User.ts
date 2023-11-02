import { Entity, Fields } from "remult";

@Entity("users", {
  allowApiCrud: true,
})
export class User {
  @Fields.autoIncrement()
  id = 0;
  @Fields.string()
  username = "";
  @Fields.string()
  password = "";
  @Fields.string()
  name = "";
  @Fields.string()
  surname? = "";
  @Fields.object()
  role = UserRole.USER;
  @Fields.createdAt()
  createdAt? = "";
  @Fields.updatedAt()
  updatedAt? = "";
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const roles = [
  { label: "Админ", value: UserRole.ADMIN },
  { label: "Пользователь", value: UserRole.USER },
];
