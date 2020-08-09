import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { FormsModule, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { PlaylistAddmusicComponent } from './playlist-addmusic/playlist-addmusic.component';
import { SongsAddsongComponent } from './songs-addsong/songs-addsong.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component' 

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    LoginComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PlaylistComponent,
    PlaylistItemComponent,
    PlaylistAddmusicComponent,
    SongsAddsongComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
