import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, Photo } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  URL = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getAlbumsService() {
    return this.http.get<Album[]>(`${this.URL}albums`)
  }

  getAlbumByIdService(id:number) {
    return this.http.get<Album>(`${this.URL}albums/${id}`)
  }

  getPhotosByAlbumService(id:number) {
    return this.http.get<Photo[]>(`${this.URL}albums/${id}/photos`)
  }
}
