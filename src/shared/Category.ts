import { Entity, Fields } from "remult";

@Entity("categories", {
  allowApiCrud: true,
})
export class Category {
  @Fields.autoIncrement()
  id = 0;
  @Fields.string()
  name = "";
  @Fields.number()
  parentId? = 0;
  @Fields.string()
  img = "";
}
