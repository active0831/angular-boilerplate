import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HOST = "http://localhost:8000"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  get(url:string, callback: any) {
    this.http.get(HOST+url,
      {withCredentials: true })
    .subscribe(
      (resp)=>{callback(resp)}
    );    
  }

  post(url:string, data:any, callback: any) {
    this.http.post(HOST+url,data,
      {withCredentials: true })
    .subscribe(
      (resp)=>{callback(resp)}
    );    
  }

  login(loginData: any) {
    document.cookie.split(";").forEach(
      function(c) { document.cookie = c.replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
      this.post('/users/login/', loginData, (resp:any)=>{
        window.location.reload()
      })
  }

  logout() {
    this.post('/users/logout/', {}, (resp:any)=>{
      window.location.reload()
    })
  }

  getUser(callback: any) {
    this.get('/users/user/', (resp:any)=>{
      callback(resp)
    })
  }
}
