import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  
  constructor(private service:ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  public async login(){
    this.service.makeLogin(this.email, this.password).subscribe(
      (data:any)=>{
        localStorage.setItem("session", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        this.service.getToken();
        this.router.navigate(['songs']);
      },
      (err)=>{
        console.log(err)
      }
    )
  }


}
