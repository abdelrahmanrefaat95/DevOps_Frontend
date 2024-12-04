import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserModel} from "../../models/user-model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user-service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseResponse} from "../../models/base-response";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  form = new FormGroup({
    email: new FormControl('',  [Validators.required]),
    password: new FormControl('',  [Validators.required]),
    name: new FormControl('',  [Validators.required]),
  });

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  onSubmit() {
    const userModel = new UserModel(
      this.form.get('email')?.value as string,
      this.form.get('password')?.value as string,
      this.form.get('name')?.value as string,
    );

    this.userService.save(userModel).subscribe({
      next: (response: BaseResponse) => {
        if (response.replyCode === "200") {
          console.log('Navigation triggered to /welcome');
          this.router.navigate(['/welcome']).then(success => {
            console.log('Navigation success:', success);
          }).catch(err => {
            console.error('Navigation error:', err);
          });
        }
      },
      error: (err) => {
        console.error('HTTP Error:', err);
      },
    });
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
  }
}
