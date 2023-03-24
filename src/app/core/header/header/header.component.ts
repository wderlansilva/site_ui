import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogLogin} from "../../login/presentation/page/dialog-login.component";
import {AuthService} from "../../../shared/authService/auth.service";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visible: boolean = true;

  value: string = '';

  userAuthenticate: boolean = true;

  constructor(
    public dialog: MatDialog,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    AuthService.userAuthenticate.subscribe(
      {
        next: (isUserAuth: boolean) => {
          this.userAuthenticate = isUserAuth;
        },
        error: (err: any) => {
          console.log(err)
        }
      })

    this.route.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/home') {
            this.value = event.url;
            console.log(event)
          } 
          if (event.url === '/create-account') {
            this.value = event.url;
            console.log(event)
          } 
          console.log(this.value)
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
}

