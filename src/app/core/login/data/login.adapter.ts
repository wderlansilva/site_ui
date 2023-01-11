import {LoginGateway} from "../domain/boundaries/login.gateway";
import {LoginRepository} from "./login.repository";
import {User} from "../domain/model/user.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginAdapter implements LoginGateway {

  constructor(
    private repository: LoginRepository
  ) {

  }
  checkLogin(user: User): Observable<User> {
    return this.repository.checkLogin(user);
  }

}
