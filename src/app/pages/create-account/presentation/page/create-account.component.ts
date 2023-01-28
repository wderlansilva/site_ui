import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {ReportSnack} from "../../../../shared/report/report.snack";
import {AuthService} from "../../../../shared/authService/auth.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  hide = true;
  form: FormGroup;
  delayTime: any;

  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private report: ReportSnack,
    private route: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      nm_user: [null],
      email: ['', [
        Validators.required, Validators.email]],
      password: [null]
    })
  }

  ngOnInit(): void {
    AuthService.userAuthenticate.subscribe(
      authSucess => this.loading = authSucess
    );
  }

  getErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.authService.createAccount(this.form.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        this.loading = true;
        this.report.onSucess('Usuário criado com sucesso!');
        this.delayTime = setInterval(() => {
          AuthService.userAuthenticate.emit(true);
          this.route.navigate(['/home']);
        }, 2000)
      },
      error: (err) => {
        this.report.onError(`Ocorreu um erro de status: ${err.status} estamos acordando o programador da Nasa  ;(`);
        console.error(err)
      }
    });
  }

  onCancel() {
    this.route.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    clearInterval(this.delayTime);
  }

}
