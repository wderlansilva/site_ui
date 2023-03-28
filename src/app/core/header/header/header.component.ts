import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogLogin} from "../../login/presentation/page/dialog-login.component";
import {AuthService} from "../../../shared/authService/auth.service";
import {
  NavigationEnd, NavigationStart,
  Router
} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visible: boolean = true;
  userAuthenticate: boolean = true;

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    AuthService.isAuthenticate.subscribe(
      {
        next: (isAuthenticate: boolean) => {
          this.userAuthenticate = isAuthenticate;
        }
      }
    )

    this.route.events.subscribe({
      next: event => {
        if (event instanceof NavigationStart) {
          console.log(event);
          this.visible = !event.url.includes('/account-panel');
        }
      }
    })
  }

  openDialog(): void {
    this.dialog.open(DialogLogin, {
      width: '250px',
      height: '20rem'
    });
  }

  openProfile() {
    this.route.navigate(['/account-panel']);
    this.visible = false;
  }

  public logout(): void {
    this._authService.logout();
  }
}

