import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../../core/services/image.service";
import {IArtwork} from "../../../../core/models/artwork";

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {

  @Input() artworkInfo: IArtwork;

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {

  }

}
