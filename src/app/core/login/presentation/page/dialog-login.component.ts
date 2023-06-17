import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {CheckLoginPresenter} from "../presenter/checkLoginPresenter";
import {AuthService} from "../../../../shared/authService/auth.service";

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
        private _authService: AuthService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private checkLoginPresenter: CheckLoginPresenter
    ) {
        this.form = this.formBuilder.group({
            email: ['', [
                Validators.required, Validators.email]],
            password: [null]
        });
    }

    ngOnInit(): void {
    }

    getErrorMessage() {
        if (this.form.get('email')?.hasError('required')) {
            return 'Você precisa informar um valor!';
        }

        return this.form.get('email')?.hasError('email') ? 'Não é um email valido!' : '';
    }

    public onSubmit(): void {
       this._authService.login(this.form.getRawValue());
    }

}
