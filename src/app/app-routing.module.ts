import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ChemistComponent} from './chemist/chemist.component';

const routes: Routes = [
  {path:'Chemist',component:ChemistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
