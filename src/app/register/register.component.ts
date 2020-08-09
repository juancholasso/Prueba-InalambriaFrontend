import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email
  password
  name
  lastname
  telephone
  iddocument
  nickname
  gender

  constructor(private service:ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.service.signUp(this.email,this.password,this.name,this.lastname,this.telephone,this.iddocument,this.nickname,this.gender)
    .subscribe(
      (data)=>{
        this.router.navigate(['login'])
      }
    )
  }
}
