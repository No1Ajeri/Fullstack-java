import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudNewFormComponent } from './component/crud-new-form/crud-new-form.component';
import { CrudNewTableComponent } from './component/crud-new-table/crud-new-table.component';


const routes: Routes = [
  {path:"", component: CrudNewTableComponent},
  {path:"form", component: CrudNewFormComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
