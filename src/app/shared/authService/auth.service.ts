import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user.model";
import {AuthenticationReponse} from "./model/authenticationReponse.model";
import {ReportSnack} from "../report/report.snack";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt"
import {BehaviorSubject, Observable} from 'rxjs';
import * as url from "url";

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   public currentUser: User = new User();
   private readonly _isAuthenticate = new BehaviorSubject<boolean>(false);

   private readonly API: string = 'api/v1/';
   private readonly JWT_TOKEN: string = 'jwt_token';

   constructor(
      private _http: HttpClient,
      private _report: ReportSnack,
      private _router: Router,
      private jwtHelper: JwtHelperService
   ) {
      this.checkLogin();
   }

   login(params: User): void {
      const URL: string = `${this.API}auth/authenticate`;
      this._http.post<AuthenticationReponse>(URL, params)
         .subscribe({
               next: (res: AuthenticationReponse) => {
                  this.authSucess(res.token, res.cd_user)
               },
               error: err => console.log(err)
            }
         );
   }

   createAccount(user: User): void {
      this.removeToken();

      const URL: string = `${this.API}auth/register`;
      this._http.post<AuthenticationReponse>(URL, user).subscribe({
         next: (res) => {
            this.authSucess(res.token, res.cd_user);
         },
         error: (err) => {
            // Todo: gerar respostas do back-end;
            this._report.onError(`Ocorreu um erro de status: [${err.status}]
          estamos acordando o programador da NASA ;(`);
         },
      });
   }

   logout(): void {
      const token: string = this.getToken();
      if (token) {
         localStorage.removeItem(this.JWT_TOKEN);
         this._isAuthenticate.next(false);
         this._router.navigate(['/home']);
      }
   }

   public isAuthenticate(): Observable<boolean> {
      return this._isAuthenticate.asObservable();
   }

   private authSucess(token: string, id: string): void {
      localStorage.setItem(this.JWT_TOKEN, token);
      this.getUserProfile(id);

      this._isAuthenticate.next(true);

      this._report.onSucess('Usuário criado com sucesso!');
      this._router.navigate(['/account-panel']);
   }

   private getUserProfile(id: string): void {
      let URL = `${this.API}users/${id}`;
      this._http
         .get<User>(URL)
         .pipe()
         .subscribe({
            next: (user) => {
               this.currentUser = user;
            },
            error: (err) => console.log(err),
         });
   }

   private removeToken(): void {
      const token = this.getToken();
      if (token) {
         localStorage.removeItem(this.JWT_TOKEN);
      }
   }

   public getToken(): string {
      const token = localStorage.getItem(this.JWT_TOKEN);
      if (token) {
         return token;
      }
      return '';
   }

   checkLogin(): void {
      /*
        Ao simular uma alteração do token direto do localStorage
        estava gerando um erro, coloquei o catch para cuidar desse erro, porém é
        necessário entender melhor o que gera o erro.
      */
      try {
         const token = this.getToken();
         if (token && !this.jwtHelper.isTokenExpired(token)) {
            this._isAuthenticate.next(true);
         }
      } catch (err) {
         this._report.onError('Realize login novamente ;D')
      }
   }
}
