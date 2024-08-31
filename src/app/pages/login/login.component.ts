import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginObj:any = {
    "EmailId": "",
    "Password": ""
  };

  http = inject(HttpClient)

  constructor(private router:Router){

  }

  onLogin(){
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any) => {
      if(res.result){
        alert('Login Sucees');
        localStorage.setItem("angular18login", this.loginObj);
        this.router.navigateByUrl("/dashboard")
      }else{
        alert('Check Username or Password');
      }
    })
  }
}
