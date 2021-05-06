import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFieldsComponent } from './components/template-fields/template-fields.component';

const routes: Routes = [
  {
      path: '',
      component: TemplateFieldsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFieldsRoutingModule { }
