import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SaveUserInteractor } from "../../domain/interactors/save-user.interactors";
import { User } from "../../domain/model/user";

@Injectable()
export class CreateAccountPresenter {
  constructor(
    private saveUserInteractors: SaveUserInteractor
  ) {}

  saveUser(user: User): Observable<User> {
    return this.saveUserInteractors.execute(user);
  }
}
