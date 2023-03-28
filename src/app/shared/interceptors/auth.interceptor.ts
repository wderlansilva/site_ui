import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthService} from "../authService/auth.service";

@Injectable()
export class AuthInterceptor implements  HttpInterceptor {
  constructor(
    private _authService: AuthService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler)
  {
    const token = this._authService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req);
  }

}
