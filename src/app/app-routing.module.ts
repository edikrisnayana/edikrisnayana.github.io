import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Constant } from './core/class/constant';

const routes: Routes = Constant.ROUTE_MAPPING;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
