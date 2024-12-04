export class UserModel {
  id?: number;
  name?: string;
  email: string;
  password: string;


  constructor(email: string,password:string,name?: string,id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
