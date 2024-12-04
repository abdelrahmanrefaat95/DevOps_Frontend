import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user-model";
import {BaseResponse} from "../models/base-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/DevOpsBuildToolDemo/user/';
  }

  public findAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersUrl+"getAll");
  }

  public save(user: UserModel): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.usersUrl+"create", user);
  }

  public login(user: UserModel): Observable<BaseResponse> {
    return this.http.get<any>(this.usersUrl+"login",   {
      params: {
        email: user.email,
        password: user.password,
      }
    });
  }
}
