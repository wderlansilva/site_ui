import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Interactor } from "src/app/shared/common-behaviors/interactor";
import { CreateAccountGateway } from "../boundaries/create-account.gateway";
import { User } from "../model/user";

@Injectable()
export class SaveUserInteractor implements Interactor<Observable<User>>{

  constructor(
    private gateway: CreateAccountGateway
  ) {}

  execute(user: User): Observable<User> {
    return this.gateway.saveUser(user);
  }
}
