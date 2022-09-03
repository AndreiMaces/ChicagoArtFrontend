import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ArtworksControllerService} from "../../core/api/artworks-controller.service";
import {ImageService} from "../../core/services/image.service";
import {IArtwork} from "../../core/models/artwork";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Paginator} from "primeng/paginator";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-artworks-page',
  templateUrl: './artworks-page.component.html',
  styleUrls: ['./artworks-page.component.scss']
})
export class ArtworksPageComponent implements OnInit{
  artworks: IArtwork[] = [];
  loading: boolean;
  @ViewChild('paginator' , { static: true }) paginator: Paginator;
  searchFormGroup: FormGroup;
  page = '0';
  search: string;

  constructor(private artworkController: ArtworksControllerService,
              private imageService: ImageService,
              private ref: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.updatePage();
    this.searchFormGroup = new FormGroup({
      search: new FormControl('')
    });
    this.paginator.changePage(parseInt(this.page));
    this.route.queryParams.subscribe((params: Params) => {
      this.loading = true;
      if(params["page"])
      this.paginator.changePage(params["page"]);
      this.artworkController.getAllArtworks({page: this.page , search: this.route.snapshot.queryParams["search"]}).subscribe(
        (subscription: any) => {
          this.artworks = subscription.data;
          this.addExtra();
          this.loading = false;
        }
      )
    })
  }

  updatePage()
  {
    this.page = this.route.snapshot.queryParams["page"];
  }

  updateSearch()
  {
    this.search = this.route.snapshot.queryParams["search"];
  }

  onPageChange(evt: any)
  {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.router.navigate([],
      {
        queryParams: {
          page: evt.page
        },
        queryParamsHandling: "merge"
      });
    this.updatePage();
  }

  addExtra()
  {
    this.artworks.forEach((artwork: any) => {
      artwork.imageURL = this.imageService.getImageDefault(artwork.image_id);
    })
  }

  onSubmit()
  {
    this.loading = true;
    const search: string = this.searchFormGroup.controls["search"].value;
    this.router.navigate([],
      {
        queryParams: {
          search
        },
        queryParamsHandling: "merge"
      });
    const body: any = {search, page: this.page}
    this.artworkController.searchArtworks(body).subscribe({
      next: (response: {data: IArtwork[]}) => {
        this.artworks = response.data;
        this.addExtra();
        this.loading = false;
      }
    })
  }
}
