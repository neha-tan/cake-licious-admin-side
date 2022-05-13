import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
password="";
email="";
  constructor(private _admin:AdminService,private _router:Router) { }
  public signin(){
    alert("email : " + this.email+this.password );
    this._admin.signinuser(this.email,this.password).subscribe(data=>{
        console.log(data)
      if(data.status=="login success"){
        alert("Logged in"+ data.token)
        sessionStorage.setItem('jwt-token',data.token)
        this._router.navigate(['']);
      }
      else{
        alert("invalid")
      }
    });
  }

  ngOnInit(): void {
  }

}
