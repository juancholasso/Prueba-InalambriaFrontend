import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public songs:any = [];
  public msbapTitle = 'Audio Title';
  public msbapAudioUrl = 'Link to audio URL';   
  public msbapDisplayTitle = false; 
  public msbapDisplayVolumeControls = true;  
  public URLSONGS:string = this.service.URL+"/public/uploads/songs/";

  constructor(private service:ApiService, public router: Router) { }

  ngOnInit(): void {
    this.getSongs();
  }

  public getSongs(){
    this.service.getMySongs().subscribe(
      (data:any)=>{
        this.songs = data.song;
        console.log(this.songs)
      }
    )
  }

  public deleteSong(idmusic:number){
    this.service.deleteSong(idmusic).subscribe(
      (data:any)=>{
        this.songs = this.songs.filter(
          (value)=>{
            return value.idmusic != idmusic;
          }
        )
        console.log(this.songs)
      }
    )
  }

  addMusic(){
    this.router.navigate(['songs/addsong']);
  }
}
