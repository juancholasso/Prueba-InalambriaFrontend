import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    this.service.getSongs().subscribe(
      (data:any)=>{
        this.songs = data.song;
        console.log(this.songs)
      }
    )
  }

}
