import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotComponent } from './slot/slot.component';


const routes: Routes = [
  {
    path:"slot",
    component:SlotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SlotComponent]
})
export class SlotRoutingModule { }
