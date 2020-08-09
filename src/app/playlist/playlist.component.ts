import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public playlists:any;
  public isCreateOpen:boolean = false;
  public newPlaylist: string;

  constructor(private service:ApiService, public router: Router)  { }

  ngOnInit(): void {
    this.getPlaylist();
  }

  public getPlaylist(){
    this.service.getPlaylists().subscribe(
      (data:any)=>{
        this.playlists = data.playlists;
        console.log(this.playlists)
      }
    )
  }

  goToPlaylist(id:number){
    this.router.navigate(['playlist/'+id]);
  }

  deletePlaylist(id:number){
    this.service.deletePlaylist(id).subscribe(
      (data:any)=>{
        this.getPlaylist();
      }
    )
  }

  create(){
    this.isCreateOpen = !this.isCreateOpen;
  }

  createPlaylist(){
    console.log(this.newPlaylist)
    this.service.createPlaylist(this.newPlaylist).subscribe(
      (data:any)=>{
        this.newPlaylist = null;
        this.isCreateOpen = false;
        this.getPlaylist();
      }
    )
  }

}
