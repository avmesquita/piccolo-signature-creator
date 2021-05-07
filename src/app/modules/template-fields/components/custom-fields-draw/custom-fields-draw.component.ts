import { Component, Input, OnInit } from '@angular/core';
import { IMagicField } from '../../entities/imagic-field.interface';

@Component({
  selector: 'app-custom-fields-draw',
  templateUrl: './custom-fields-draw.component.html',
  styleUrls: ['./custom-fields-draw.component.css']
})
export class CustomFieldsDrawComponent implements OnInit {

  @Input() field: IMagicField;

  constructor() { }

  ngOnInit(): void {
    /*
    console.log(this.field);
    */
  }

  onMainImageUpload(event): void {
      for(let file of event.files) {
        let me = this;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          me.field.value = reader.result;
        };
      }
  }

  capitalizeFirstLetter(string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  capitalizeWords(string): string {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

}
