import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtwoksPageComponent} from "./pages/artwoks-page/artwoks-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/artworks'
  },
  {
    path: '/artworks',
    component: ArtwoksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
