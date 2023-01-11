import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

import {CreateAccountPresenter} from '../presenters/create-account.presenter';
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {ReportSnack} from "../../../../shared/report/report.snack";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  delayTime: any;
  hide = true;
  form: FormGroup;


  private destroy$ = new Subject<void>();

  constructor(
    private createAccountPresenter: CreateAccountPresenter,
    private formBuilder: FormBuilder,

    private report: ReportSnack,

    private route: Router
  ) {
    this.form = this.formBuilder.group({
      nm_user: [null],
      email: ['', [
        Validators.required, Validators.email]],
      password: [null]
    })
  }

  ngOnInit(): void {

  }

  getErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.createAccountPresenter.saveUser(this.form.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        this.report.onSucess('Usuário criado com sucesso!');
        this.loading = true;
        this.delayTime = setInterval(() => {
          this.route.navigate(['/home']);
        }, 2000)

      },
      error: (err) => {
        this.report.onError(err.error);
      }
    });

  }

  //Todo: Abstrair esse funcionamento.



  onCancel() {
    this.route.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    clearInterval(this.delayTime);
  }

}
