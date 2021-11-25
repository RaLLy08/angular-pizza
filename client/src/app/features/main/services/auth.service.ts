import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, throttleTime } from 'rxjs/operators';

import { Login, LoginResponse } from './../models/auth';


@Injectable({ providedIn: 'root' })
export class AuthService {
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  constructor(private http: HttpClient) { }

  login(loginData: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('login', loginData)
  }

}


