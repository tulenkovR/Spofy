import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpotifyService } from './service/spotify.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Auth } from './service/auth.service';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Auth, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
