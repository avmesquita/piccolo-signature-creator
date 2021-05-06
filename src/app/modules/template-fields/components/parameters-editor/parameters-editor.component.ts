import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IMagicField } from '../../entities/imagic-field.interface';
import { TemplateFieldsService } from '../../services/template-fields.service';

@Component({
  selector: 'app-parameters-editor',
  templateUrl: './parameters-editor.component.html',
  styleUrls: ['./parameters-editor.component.css']
})
export class ParametersEditorComponent implements OnInit {

  constructor(public engine: TemplateFieldsService,
              private ref: DynamicDialogRef) { }

  ngOnInit(): void {

  }

  newField(): void {
    /*
    field = new IMagicField() {
      name = "",

    };
    this.engine.fields.push(field);
    */
  }

  editField(field: IMagicField): void {
    this.engine.fields.forEach(x => {
      if (x.name === field.name) {
        x = field;
      }
    });

  }
  deleteField(field: IMagicField): void {
    const index = this.engine.fields.indexOf(field);
    if (index > -1) {
       this.engine.fields.splice(index, 1);
    }
  }

  close(): void {
    this.ref.close();
  }

}
