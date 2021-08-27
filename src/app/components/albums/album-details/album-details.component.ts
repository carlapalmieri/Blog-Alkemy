import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Photo } from 'src/app/interfaces/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  photos: Photo[] = [];

  album: Album = {
    id: 0,
    userId: 0,
    title: '',
  }
  constructor(private albumsService: AlbumsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getAlbumById(params.id)
    this.getPhotosByAlbum(params.id)
  }

  getPhotosByAlbum(id:number) {
    this.albumsService.getPhotosByAlbumService(id).subscribe(
      res => {
      this.photos = res
      console.log(res)
      },
      err => console.log(err))
  }

  getAlbumById(id:number) {
    this.albumsService.getAlbumByIdService(id).subscribe(
      res => {
      this.album = res
      console.log(res)
      },
      err => console.log(err))
  }

}
