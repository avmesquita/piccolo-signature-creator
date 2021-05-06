import { IMagicFieldType } from "./imagic-field-type.interface";

export interface IMagicField {
   name: string;
   type: IMagicFieldType;
   metadata: string;
   value: any;
}
