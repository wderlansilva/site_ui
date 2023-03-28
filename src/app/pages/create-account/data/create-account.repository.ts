import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../domain/model/user';
import {Observable} from "rxjs";

@Injectable()
export class CreateAccountRepository {

  constructor(
    private httpClient: HttpClient
  ) {}

  private readonly API = '/api/v1/auth/register';

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API, user)
  }
}
