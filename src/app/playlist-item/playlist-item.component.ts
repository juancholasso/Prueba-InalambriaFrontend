import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  private id:number;
  public playlist:any= null;

  constructor(private service:ApiService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('idplaylist'));
    this.getPlaylist(this.id);
  }

  public getPlaylist(id:number){
    this.service.getPlaylist(id).subscribe(
      (data:any)=>{
        this.playlist = data.playlist;
        console.log(this.playlist)
      }
    )
  }

  addMusic(){
    this.router.navigate(['playlist/addmusic/'+this.id]);
  }
}
