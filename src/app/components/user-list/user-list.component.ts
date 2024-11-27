import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserModel} from "../../models/user-model";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: UserModel[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
