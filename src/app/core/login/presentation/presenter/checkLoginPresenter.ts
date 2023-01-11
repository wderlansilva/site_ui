import {Injectable} from "@angular/core";
import {CheckLoginInteractors} from "../../domain/interactors/checkLogin.interactors";
import {User} from "../../domain/model/user.model";
import {Observable, shareReplay, tap} from "rxjs";
import * as moment from "moment/moment";

@Injectable()
export class CheckLoginPresenter {
  constructor(
    private checkLoginInteractor: CheckLoginInteractors
  ) {}

  checkLogin(user: User){
    return this.checkLoginInteractor.execute(user)
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay(1)
      );
  }

  private setSession(token: any) {
    const expireAt = moment().add(token.expiresIn,'second');
    console.log('chamada')

    localStorage.setItem('id_token', token);
    localStorage.setItem('expires_at', JSON.stringify(expireAt.valueOf()));
  }

}
