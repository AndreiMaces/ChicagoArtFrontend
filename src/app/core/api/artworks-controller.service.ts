import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {environment as env} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtworksControllerService {

  path = env.apiURL + '/v1/artworks';

  constructor(private apiService: ApiService) {
  }

  getAllArtworks(params: any): Observable<any>
  {
    return this.apiService.get(`${this.path}` , params);
  }

  getArtworkById(id:string): Observable<any> {
    return this.apiService.get(`${this.path}/${id}`);
  }

  searchArtworks(body: any): Observable<any>
  {
    return this.apiService.get(`${this.path}` , body);
  }

}
