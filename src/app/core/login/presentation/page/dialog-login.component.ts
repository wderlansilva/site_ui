import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {CheckLoginPresenter} from "../presenter/checkLoginPresenter";

@Component({
  selector: 'app-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLogin implements OnInit {

  hide = true;
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private checkLoginPresenter: CheckLoginPresenter
  ) {
    this.form = this.formBuilder.group({
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
    this.checkLoginPresenter.checkLogin(this.form.value).subscribe({
      next: (user) => {
        console.log(user)
        this.onSucess();
      },
      error: () => {
        this.onError();
      }
    });
  }

  //Todo: Abstrair esse funcionamento.
  onSucess() {
    this.snackBar.open('Usuario autenticado com sucesso!', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
    });
  }

  onError() {
    this.snackBar.open('Ocorreu um erro, verifique suas credenciais.', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
    });
  }

  onCancel() {
  }

}
