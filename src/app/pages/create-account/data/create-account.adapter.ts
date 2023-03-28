import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateAccountGateway } from "../domain/boundaries/create-account.gateway";
import { User } from "../domain/model/user";
import { CreateAccountRepository } from "./create-account.repository";

@Injectable()
export class CreateAccountAdapter implements CreateAccountGateway {

  constructor(
    private repository: CreateAccountRepository
    ) {}

  saveUser(user: User): Observable<User> {
    return this.repository.saveUser(user);
  }


}
