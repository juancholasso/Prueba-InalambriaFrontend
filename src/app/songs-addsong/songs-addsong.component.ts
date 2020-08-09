import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-songs-addsong',
  templateUrl: './songs-addsong.component.html',
  styleUrls: ['./songs-addsong.component.css']
})
export class SongsAddsongComponent implements OnInit {

  public name:string;
  uploadForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private service:ApiService, public router: Router) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      name: [''],
      song: ['']
    });
  }

  uploadFile(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('song').setValue(file);
    }
  }

  addSong(){
    this.uploadForm.get('name').setValue(this.name);
    this.service.uploadSong(this.uploadForm).subscribe(
      (data:any)=>{
        console.log(data)
        this.router.navigate(['songs']);
      }
    )
  }
}
