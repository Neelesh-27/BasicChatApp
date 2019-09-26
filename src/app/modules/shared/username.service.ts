
import { Injectable } from '@angular/core';
import { Username } from 'src/app/model/username.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

 const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

 @Injectable()
export class UsernameService {
   

  mockUrl: string = 'http://localhost:3000/Username';
  allUsername: Username[];
  name: any;

   currentUsername: Username = {
    id: null,
    Username: '',
    Password: '',
    //message: ''
  }
  
   constructor(
    private http: HttpClient
  ) { }

   getAllUsername() {
    return this.http.get(this.mockUrl).subscribe(
      (data: Username[]) => {
        this.allUsername = data;
        console.table(this.allUsername);
      });
  }

  getUsername(): Observable<Username[]>
  {
    return this.http.get<Username[]>(this.mockUrl, headerOption);
  }

   deleteUsername(id: Number): Observable<Username> {
    return this.http.delete<Username>(this.mockUrl + '/' + id, headerOption);
  }
  
   createUsername(username: Username): Observable<Username> {
    return this.http.post<Username>(this.mockUrl, username, headerOption);
  }

   updateUsername(username: Username): Observable<Username> {
    return this.http.put<Username>(this.mockUrl + '/' + username.id, username, headerOption);
  }

  setName(name: any)
  {
    this.name = name;
   // console.log(this.name);
  }

  getName()
  {
    return this.name;
  }

}