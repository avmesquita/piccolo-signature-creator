import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/template-fields' },
  {
      path: 'template-fields',
      loadChildren: () => import('./modules/template-fields/template-fields.module').then((m) => m.TemplateFieldsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
