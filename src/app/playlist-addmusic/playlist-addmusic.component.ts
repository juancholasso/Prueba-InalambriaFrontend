import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-addmusic',
  templateUrl: './playlist-addmusic.component.html',
  styleUrls: ['./playlist-addmusic.component.css']
})
export class PlaylistAddmusicComponent implements OnInit {

  public songs:any = [];
  public songsAdded:any = [];
  public idplaylist:number;
  public msbapTitle = 'Audio Title';
  public msbapAudioUrl = 'Link to audio URL';   
  public msbapDisplayTitle = false; 
  public msbapDisplayVolumeControls = true;  
  public URLSONGS:string = this.service.URL+"/public/uploads/songs/";

  constructor(private service:ApiService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idplaylist = parseInt(this.route.snapshot.paramMap.get('idplaylist'));
    this.getSongs();
  }

  public getSongs(){
    this.service.getSongs().subscribe(
      (data:any)=>{
        this.songs = data.song;
        this.service.getPlaylist(this.idplaylist).subscribe(
          (data:any)=>{
            this.songsAdded = data.playlist.songs;
            for(var added of this.songsAdded){
              this.songs = this.songs.filter(
                (value)=>{
                  return value.idmusic != added.idmusic;
                }
              )
            }
            console.log(data)
          }
        )
      }
    )
   
  }

  addToPlaylist(song:any){
    console.log(song, this.idplaylist)
    this.service.addSongToPlaylist(this.idplaylist, song.idmusic).subscribe(
      (data:any)=>{
        this.songsAdded.push(song)
        this.songs = this.songs.filter(
          (value)=>{
            return value != song;
          }
        )
        console.log(this.songs)
      }
    )
  }

  removeToPlaylist(song:any){
    console.log(song, this.idplaylist)
    this.service.removeSongToPlaylist(this.idplaylist, song.idmusic).subscribe(
      (data:any)=>{
        this.songs.push(song)
        this.songsAdded = this.songsAdded.filter(
          (value)=>{
            return value != song;
          }
        )
        console.log(this.songs)
      }
    )
  }

}
