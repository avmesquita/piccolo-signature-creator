import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Mock } from '../../entities/mock-data.model';
import { TemplateFieldsService } from '../../services/template-fields.service';
import { ParametersEditorComponent } from '../parameters-editor/parameters-editor.component';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  /*engine: TemplateFieldsService*/

  constructor(public engine: TemplateFieldsService,
              private dialogService: DialogService) {
    /*this.engine = templateFieldsService;*/
  }

  ngOnInit(): void {
  }

  loadParameters(event): void {
      for(let file of event.files) {
        let me = this;
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
          debugger;
          me.engine.parameters = reader.result;
          me.engine.fields = JSON.parse(me.engine.parameters);
        };
      }
  }
  loadDefault(): void {
    const mock = new Mock();
    this.engine.fields = mock.fields;
  }

  openEditor(): void {
    const ref = this.dialogService.open(ParametersEditorComponent, {
      data: {
        dummy: null
      },
      closeOnEscape: false,
      header: 'Parameters Editor',
      /*width: '80%'*/
    });

  }
}
