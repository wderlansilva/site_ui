import {EventEmitter, Injectable} from "@angular/core";
import {CheckLoginInteractors} from "../../domain/interactors/checkLogin.interactors";
import {User} from "../../domain/model/user.model";
import {Observable, shareReplay, tap} from "rxjs";
import * as moment from "moment/moment";

@Injectable()
export class CheckLoginPresenter {

  static userAuthenticte = new EventEmitter<boolean>;
  constructor(
    private checkLoginInteractor: CheckLoginInteractors
  ) {}

  checkLogin(user: User){
    return this.checkLoginInteractor.execute(user)
      .pipe(
        shareReplay(1)
      );
  }



}
