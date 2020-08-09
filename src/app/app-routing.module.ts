import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { PlaylistAddmusicComponent } from './playlist-addmusic/playlist-addmusic.component';
import { RegisterComponent } from './register/register.component';
import { SongsAddsongComponent } from './songs-addsong/songs-addsong.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'songs', component: SongsComponent, canActivate: [AuthGuard]  },
  { path: 'songs/addsong', component: SongsAddsongComponent, canActivate: [AuthGuard]  },
  { path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuard]  },
  { path: 'playlist/addmusic/:idplaylist', component: PlaylistAddmusicComponent, canActivate: [AuthGuard]  },
  { path: 'playlist/:idplaylist', component: PlaylistItemComponent, canActivate: [AuthGuard]  },
  { path: '**', component: HomeComponent , canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
