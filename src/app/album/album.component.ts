import { SpotifyService } from './../service/spotify.service';
import { Album } from './../data/album';
import { Artist } from './../data/artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from './../service/auth.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _router: ActivatedRoute,
    private _auth: Auth
  ) { }

  ngOnInit() {
    this._router.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });
      });
  }

}
