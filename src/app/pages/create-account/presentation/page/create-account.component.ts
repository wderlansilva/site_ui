import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from "@angular/router";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
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

  private _ngUnsubscribe$: Subject<boolean> = new Subject;

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
  }

  getErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      return 'Você precisa digitar algum valor meu jovem.';
    }

    return this.form.get('email')?.hasError('email') ? 'Esse email não é valido, pequeno padawan ;( ' : '';
  }

  onSubmit() {
    this.authService.createAccount(this.form.value);
  }

  onCancel() {
    this.route.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next(true) ;
    this._ngUnsubscribe$.complete();
  }

}
