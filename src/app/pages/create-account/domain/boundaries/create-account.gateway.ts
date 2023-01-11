import { Observable } from "rxjs";
import { User } from "../model/user";

export abstract class CreateAccountGateway {


  abstract saveUser(user: User): Observable<User>;

}
