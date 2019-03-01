import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/api/rest/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginDto } from 'src/app/service/models/dto/login-dto';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent extends ToastComponent implements OnInit {

	@ViewChild("btn") btn: any;

	formLogin: FormGroup;
	iconBtn = "pi pi-user";
	valid = false;

	constructor(
		public messageService: MessageService,
		public router: Router,
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private auth: AuthService
	) {

		super(messageService, router);
	}

	ngOnInit() {
		this.formInit();
	}

	formInit() {
		this.formLogin = this.formBuilder.group({
			username: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(20),
			]),
			password: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(20),
				Validators.minLength(3)
			]),
		});
	}

	login() {
		let dataLogin: LoginDto = this.getDataLogin();

		this.loginService.login(dataLogin).subscribe((data: any) => {
			this.controlLogin(true);
			this.auth.login(data);
		}, (error: HttpErrorResponse) => {
			this.showError("Error", "Algo salio mal ☹");
			this.controlLogin(false);
		});
	}

	getDataLogin(): LoginDto {
		let dataLogin: LoginDto = new LoginDto();
		let form = this.formLogin.value;
		dataLogin.username = form.username;
		dataLogin.password = form.password;
		return dataLogin;
	}

	controlLogin(data) {
		if (data) {
			this.btn.nativeElement.disabled = true;
			this.iconBtn = "pi pi-spin pi-spinner";
		} else {
			this.btn.nativeElement.disabled = false;
			this.iconBtn = "pi pi-user";
		}

	}

}
