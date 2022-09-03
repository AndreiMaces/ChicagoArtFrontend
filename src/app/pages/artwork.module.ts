import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {ArtworksPageComponent} from "./artworks-page/artworks-page.component";
import {ArtworkCardComponent} from "./artworks-page/components/artwork-card/artwork-card.component";
import {ArtworksCardsComponent} from "./artworks-page/components/artworks-cards/artworks-cards.component";
import {ArtworkRoutingModule} from "./artwork-routing.module";
import {ImageModule} from 'primeng/image';
import {PaginatorModule} from 'primeng/paginator';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ArtworkPageComponent } from './artwork-page/artwork-page.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ArtworksPageComponent,
    ArtworkCardComponent,
    ArtworksCardsComponent,
    ArtworkPageComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ArtworkRoutingModule,
    ImageModule,
    PaginatorModule,
    ProgressSpinnerModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArtworkModule { }
