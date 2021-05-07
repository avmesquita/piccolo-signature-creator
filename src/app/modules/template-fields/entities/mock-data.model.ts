import { IMagicFieldType } from "./imagic-field-type.interface";
import { IMagicField } from "./imagic-field.interface";

export class Mock {

  fields: IMagicField[] =
  [
    {
      "name": "name",
      "type": {
        "name": "Text",
        "realtype": "text"
      },
      "metadata": "##name##",
      "value": null
    },
    {
      "name": "phone",
      "type": {
        "name": "Text",
        "realtype": "text"
      },
      "metadata": "##phone##",
      "value": null
    },
    {
      "name": "mail",
      "type": {
        "name": "Text",
        "realtype": "text"
      },
      "metadata": "##mail##",
      "value": null
    },
    {
      "name": "facebook",
      "type": {
        "name": "Text",
        "realtype": "text"
      },
      "metadata": "##facebook##",
      "value": null
    },
    {
      "name": "instagram",
      "type": {
        "name": "Text",
        "realtype": "text"
      },
      "metadata": "##instagram##",
      "value": null
    },
    {
      "name": "youtube",
      "type": {
        "name": "Text",
        "realtype": "text"
      },
      "metadata": "##youtube##",
      "value": null
    },
    {
      "name": "image file",
      "type": {
        "name": "Image File",
        "realtype": "file"
      },
      "metadata": "##image-file##",
      "value": null
    }
];

    fieldtypes: IMagicFieldType[] =
    [
      {
        name: 'Text',
        realtype: 'text'
      },
      {
        name: 'Image File',
        realtype: 'file'
      },
      {
        name: 'Number',
        realtype: 'number'
      }
    ];
}

