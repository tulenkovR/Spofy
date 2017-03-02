import { Artist } from './../data/artist';
import { SpotifyService } from './../service/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Auth } from './../service/auth.service';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];
  constructor(private _spotifyService: SpotifyService, private auth: Auth) { }

  ngOnInit() {
  }
  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }

}