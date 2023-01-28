import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./userLoginModel/user.model";
import {Observable, shareReplay, tap} from "rxjs";
import * as moment from "moment";

@Injectable()
export class AuthService {

  static userAuthenticate = new EventEmitter<boolean>();

  private readonly API = 'api/v1/auth';

  constructor(
    private http: HttpClient,
  ) {
  }

  login({...params}: UserModel) {
    this.http.post<UserModel>(`${this.API}/authenticate`, params);
  }

  createAccount(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.API}/register`, userModel).pipe(
      tap( token => this.setSession(token)),
      shareReplay(1)
    )};

  private setSession(token: any) {
    const expireAt = moment().add(token.expiresIn,'second');
    console.log(token)

    localStorage.setItem('id_token', token.token);
    localStorage.setItem('expires_at', JSON.stringify(expireAt.valueOf()) );
  }

  isLogedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration ? expiration : '');

    return moment(expiresAt);
  }
}
