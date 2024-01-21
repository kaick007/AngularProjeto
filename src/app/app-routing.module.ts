import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { AppDepartmentosModule } from './components/departamentos/departamentos.component.module';

const routes: Routes = [{
  path: 'departamento', component: DepartamentosComponent,
  // path: "departamento",
  // loadChildren: () => import("./components/departamentos/departamentos.component.module").then( m => m.AppDepartmentosModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
