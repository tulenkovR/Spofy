import { SpotifyService } from './../service/spotify.service';
import { Album } from './../data/album';
import { Artist } from './../data/artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from './../service/auth.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _router: ActivatedRoute,
    private _auth: Auth
  ) { }

  ngOnInit() {

    this._router.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });
        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          });
      });

  }

}
