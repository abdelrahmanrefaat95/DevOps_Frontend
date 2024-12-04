import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../models/user-model";
import {UserService} from "../../services/user-service";
import {BaseResponse} from "../../models/base-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private userService:UserService,
              private router: Router) {

  }

  form = new FormGroup({
    email: new FormControl('',  [Validators.required]),
    password: new FormControl('',  [Validators.required]),
  });
  public login(): void {
    if (this.form.valid) {
      const userModel = new UserModel(
        this.form.get('email')?.value as string,
        this.form.get('password')?.value as string
      );
      userModel.id = 0;

      this.userService.login(userModel).subscribe({
        next: (response: BaseResponse) => {
          if (response.replyCode === "200") {
            console.log('Navigation triggered to /welcome');
            this.router.navigate(['/welcome']).then(success => {
              console.log('Navigation success:', success);
            }).catch(err => {
              console.error('Navigation error:', err);
            });
          }else {
            alert("Login Failed , Email or Password Error");
          }
        },
        error: (err) => {
          console.error('HTTP Error:', err);
        },
      });
    }
  }

public navigateToSignUp(){
  this.router.navigate(['/signUp']).then(success => {
    console.log('Navigation success:', success);
  }).catch(err => {
    console.error('Navigation error:', err);
  });
}
  // public login(): void {
  //   if (this.form.valid) {
  //     const userModel = new UserModel(
  //       this.form.get('email')?.value as string,
  //       this.form.get('password')?.value as string,
  //     );
  //       userModel.id = 0;
  //         this.userService.login(userModel).subscribe((response: BaseResponse) => {
  //           if(response.replyCode === 200){
  //             this.router.navigate(['/welcome']);
  //           }
  //       });
  //     }
  // }

  ngOnInit(): void {
  }
}
