import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoginService } from 'src/app/service/api/rest/login.service';
import { UserService } from 'src/app/service/api/rest/user.service';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends ToastComponent implements OnInit {

	formRecuperar: FormGroup;

	constructor(
		public messageService: MessageService,
		public router: Router,
		private formBuilder: FormBuilder,
		private userService: UserService
	) {
		super(messageService, router);
	}

	ngOnInit() {
		this.formInit();
	}

	formInit() {
		this.formRecuperar = this.formBuilder.group({
			email: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(50),
				Validators.minLength(10),
				Validators.email
			]),
		});
	}

	recuperar() {
		let email: string = this.formRecuperar.value.email;
		console.log("Email: " + email);
		
		this.userService.getUserByEmail(email).subscribe((data) => {
			console.log(data)
		});
	}



}
