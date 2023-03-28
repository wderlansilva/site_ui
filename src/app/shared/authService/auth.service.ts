import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user.model";
import {AuthenticationReponse} from "./model/authenticationReponse.model";
import {ReportSnack} from "../report/report.snack";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  public currentUser: User = new User();
  static isAuthenticate = new EventEmitter<boolean>();

  private readonly API = 'api/v1/';

  constructor(
    private _http: HttpClient,
    private _report: ReportSnack,
    private _router: Router
  ) {}

  // login({...params}: UserModel)
  // {
  //   this._http.post<UserModel>(`${this.API}/authenticate`, params);
  // }

  createAccount(user: User): void {
    this.logout();

    let URL = `${this.API}auth/register`;
    this._http.post<AuthenticationReponse>(URL, user)
      .subscribe({
        next: res => {
          this.authSucess(res.token, res.cd_user);
          this._report.onSucess('Usuário criado com sucesso!');
          AuthService.isAuthenticate.emit(true);
          this._router.navigate(['/account-panel']);
        },
        error: err => {
          this._report.onError(`Ocorreu um erro de status: [${err.status}]
          estamos acordando o programador da NASA ;(`);
        }
      })
  };

  private authSucess(token: string, id: string): void {
    localStorage.setItem('id_token', token);
    this.getUserProfile(id);
  }

  private getUserProfile(id: string): void {
    let URL = `${this.API}users/${id}`
    this._http.get<User>(URL).pipe(
    ).subscribe({
      next: user => {
        this.currentUser = user;
      },
      error: err => console.log(err)
    });
  }

  getToken(): string {
    let token = localStorage.getItem('id_token');
    if (token) {
      return token;
    }
    return '';
  }

  logout(): void {
    const token = localStorage.getItem('id_token');
    if (token) {
      localStorage.removeItem('id_token');
      AuthService.isAuthenticate.emit(false);
      this._router.navigate(['/home']);
    }
  }
}
