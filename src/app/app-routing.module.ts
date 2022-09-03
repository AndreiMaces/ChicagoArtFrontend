import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtworksPageComponent} from "./pages/artworks-page/artworks-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/artworks'
  },
  {
    path: 'artworks',
    loadChildren: () => import('./pages/artwork.module').then(m => m.ArtworkModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
