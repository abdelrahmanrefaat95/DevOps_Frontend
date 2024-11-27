import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserModel} from "../../models/user-model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user-service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

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
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
  }

  onSubmit() {
    const userModel = new UserModel(
      this.form.get('email')?.value as string,
      this.form.get('password')?.value as string,
    );
    this.userService.save(userModel).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
  }
}
