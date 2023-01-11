import {Observable, shareReplay, tap} from "rxjs";
import {User} from "../domain/model/user.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as moment from "moment";

@Injectable()
export class LoginRepository {

  // Todo: Criar gets para urls da API
  private readonly API = '/api/users/check-login';

  constructor(
    private httpClient: HttpClient
  ) {}

  checkLogin({...params}: User): Observable<User> {
    return this.httpClient.post<User>(this.API, params);

  }



}
