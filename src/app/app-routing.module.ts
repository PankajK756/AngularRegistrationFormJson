import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpregisterComponent } from './empregister/empregister.component';

const routes: Routes = [
  {path:'',component:EmpregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

