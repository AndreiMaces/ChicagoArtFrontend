import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtworksPageComponent} from "./artworks-page/artworks-page.component";
import {ArtworkPageComponent} from "./artwork-page/artwork-page.component";

const routes: Routes = [
  {
    path: '',
    component: ArtworksPageComponent
  },
  {
    path: ':id',
    component: ArtworkPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtworkRoutingModule { }
