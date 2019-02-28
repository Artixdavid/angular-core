import { Component, OnInit } from '@angular/core';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/api/rest/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginDto } from 'src/app/service/models/dto/login-dto';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent extends ToastComponent implements OnInit {

	formLogin: FormGroup;

	constructor(
		public messageService: MessageService,
		public router: Router,
		private formBuilder: FormBuilder,
		private loginService:LoginService
	) {

		super(messageService,router);
	}

	ngOnInit() {
		this.formInit();
	}

	formInit(){
		this.formLogin = this.formBuilder.group({
			username: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(20),
				Validators.minLength(6)
			]),
			password: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(20),
				Validators.minLength(3)
			]),
		});
	}

	login(){
		let dataLogin:LoginDto = this.getDataLogin();

		this.loginService.login(dataLogin).subscribe((data:any) => {
			console.log(data,1);
			localStorage.setItem('etag', data.token);
			this.router.navigate([`componentes/user`]);
		}, (error:HttpErrorResponse) =>{
			this.showError("Error","Algo salio mal ☹");
		});
		
	}

	getDataLogin(): LoginDto{
		let dataLogin: LoginDto = new LoginDto();
		let form = this.formLogin.value;

		dataLogin.username = form.username;
		dataLogin.password = form.password;

		return dataLogin;
	}

}
