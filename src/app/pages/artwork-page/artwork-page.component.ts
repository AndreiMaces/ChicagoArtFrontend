import { Component, OnInit } from '@angular/core';
import {IArtwork} from "../../core/models/artwork";
import {ArtworksControllerService} from "../../core/api/artworks-controller.service";
import {ActivatedRoute} from "@angular/router";
import {ImageService} from "../../core/services/image.service";

@Component({
  selector: 'app-artwork-page',
  templateUrl: './artwork-page.component.html',
  styleUrls: ['./artwork-page.component.scss']
})
export class ArtworkPageComponent implements OnInit {

  artwork: IArtwork;

  constructor(private artworkController: ArtworksControllerService,
              private route: ActivatedRoute,
              private imageService: ImageService) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params["id"];
    this.artworkController.getArtworkById(id).subscribe({
      next: (response: { data: IArtwork }) => {
        console.log(response)
        this.artwork = response.data;
        this.artwork.imageURL = this.imageService.getImageDefault(this.artwork.image_id);
      }
    });
  }

}
