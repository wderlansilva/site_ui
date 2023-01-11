import {Interactor} from "../../../../shared/common-behaviors/interactor";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {LoginGateway} from "../boundaries/login.gateway";
import {Injectable} from "@angular/core";

@Injectable()
export class CheckLoginInteractors implements Interactor<Observable<User>> {

  constructor(
    private gateway: LoginGateway
  ) {
  }

  execute(user: User): Observable<User> {
    return this.gateway.checkLogin(user);
  }
}
