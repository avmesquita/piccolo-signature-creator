import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IMagicField } from '../../entities/imagic-field.interface';
import { MagicField } from '../../entities/magic-field.model';
import { TemplateFieldsService } from '../../services/template-fields.service';

@Component({
  selector: 'app-parameters-editor',
  templateUrl: './parameters-editor.component.html',
  styleUrls: ['./parameters-editor.component.css']
})
export class ParametersEditorComponent implements OnInit {

  selectedField: IMagicField = null;

  dropdownSelected: any;

  constructor(public engine: TemplateFieldsService,
              private ref: DynamicDialogRef) { }

  ngOnInit(): void {

  }

  newField(): void {
    debugger;
    this.selectedField = new MagicField();
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

  metadataCalc(event): void {
    if (this.selectedField) {
      this.selectedField.metadata = '##' + event.target.value + '##';
      this.selectedField.name = event.target.value;
    }
  }

  changeDropdown(event): void {
    debugger;
    this.selectedField.type = event.target.value;
  }

  incluir(): void {
    debugger;
    if (this.selectedField){
      const model = new MagicField();
      model.name = this.selectedField.name;
      model.value = "";
      model.metadata = this.selectedField.metadata;
      model.type = this.dropdownSelected;
      this.engine.fields.push(model);
      this.selectedField = null;
    }
  }

  cancelar(): void {
    this.selectedField = null;
  }

}
