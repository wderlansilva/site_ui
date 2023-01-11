import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import {User} from "../model/user.model";

@Injectable()
export abstract class LoginGateway {

  abstract checkLogin(user: User): Observable<User>;

}
