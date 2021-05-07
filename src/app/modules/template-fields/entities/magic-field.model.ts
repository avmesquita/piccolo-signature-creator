import { IMagicFieldType } from "./imagic-field-type.interface";
import { IMagicField } from "./imagic-field.interface";

export class MagicField implements IMagicField {
  name: string;
  type: IMagicFieldType;
  metadata: string;
  value: any;
}
