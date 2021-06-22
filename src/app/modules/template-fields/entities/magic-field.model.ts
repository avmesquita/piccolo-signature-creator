import { IMagicFieldType } from "./imagic-field-type.interface";
import { IMagicField } from "./imagic-field.interface";

export class MagicField implements IMagicField {
  name: string;
  type: IMagicFieldType;
  metadata: string;
  value: any;

  constructor() {
    this.name = "";
    this.type = {
      name: "Text",
      realtype: "text"
    };
    this.metadata = "##" + this.name + "##";
    this.value = null;

  }
}
