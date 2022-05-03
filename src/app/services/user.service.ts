import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http:HttpClient
  ) { }

  __be_login(data: any) {
    return this.http.post<any>('https://localhost:44309/api/user/login',data);

  }

  __be_insert(data: any) {
    return this.http.post<any>('https://localhost:44309/api/user/insert',data);

  }
}
