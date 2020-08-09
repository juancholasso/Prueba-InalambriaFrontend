import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private service:ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['login']);
    this.service.makeLogout();
  }

  public navigateTo(path:string){
    this.router.navigate([path]);
  }
}
