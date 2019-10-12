import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Floor1Component } from './floor1/floor1.component';
import { Floor2Component } from './floor2/floor2.component';
import { Floor3Component } from './floor3/floor3.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path:"floor1",
    component:Floor1Component
  },
  {
    path:"floor2",
    component:Floor2Component 
  },
  {
    path:"floor3",
    component:Floor3Component 
  },
  {
    path:"add",
    component:AddComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [Floor1Component, Floor2Component, Floor3Component, AddComponent],
})
export class MainRoutingModule { }
