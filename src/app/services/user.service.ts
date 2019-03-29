import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IUser } from '../models/user.interface';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3004/users')
            .pipe(catchError((error: any) => Observable.throw(error.json())));

  }

  createUser(payload: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3004/users', payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeUser(payload: IUser): Observable<IUser> {
    return this.http.delete<any>(`http://localhost:3004/users/${payload.id}`)
        .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
