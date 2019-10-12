import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
   path:'',
   loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)
 },
 {
   path:'',
   loadChildren:()=>import('./slot/slot.module').then(mod=>mod.SlotModule)
 },
 {
   path:'',
   loadChildren:()=>import('./search/search.module').then(mod=>mod.SearchModule)
 },
 {
   path:'',
   loadChildren:()=>import('./main/main.module').then(mod=>mod.MainModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
