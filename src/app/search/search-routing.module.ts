import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:"search",
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [SearchComponent]
})
export class SearchRoutingModule { }
