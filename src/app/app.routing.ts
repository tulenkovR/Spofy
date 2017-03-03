import { SearchComponent } from './search/search.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './service/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
