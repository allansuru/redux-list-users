import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUser } from '../models/user.interface';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3004/users');

  }

  createUser(payload: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3004/users', payload);
  }
}
