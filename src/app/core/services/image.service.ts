import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImage(identifier: string , region: string , size: string , rotation: string , quality:string , format: string): string {
    return `https://www.artic.edu/iiif/2/${identifier}/${region}/${size}/${rotation}/${quality}.${format}`;
  }

  getImageDefault(identifier: any): string {
    return `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;
  }
}
