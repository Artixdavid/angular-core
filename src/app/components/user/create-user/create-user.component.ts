import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CreateUserDto } from 'src/app/service/models/dto/create-user-dto';
import { UserService } from 'src/app/service/api/rest/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent extends ToastComponent implements OnInit {

	formCreateUser: FormGroup;

	constructor(
		private userService: UserService,
		public messageService: MessageService,
		public router: Router,
		private formBuilder: FormBuilder
	) {

		super(messageService,router);
		
	}

	ngOnInit() {
		this.formInit();
		this.showError("Error","Algo salio mal ☹");
	}

	formInit(){
		this.formCreateUser = this.formBuilder.group({
			name: this.formBuilder.control(null, [Validators.required, Validators.maxLength(20)]),
			lastName: this.formBuilder.control(null, [Validators.required, Validators.maxLength(20)]),
			email: this.formBuilder.control(null, [Validators.required, Validators.email, Validators.maxLength(50)]),
			password: this.formBuilder.control(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
			repeatPassword: this.formBuilder.control(null)
		});

		this.formCreateUser.controls['repeatPassword'].setValidators([
			Validators.required,
			Validators.minLength(3),
			this.noIguales.bind(this.formCreateUser)
		]);
	}


	onRegistrar(){
		let createUser:CreateUserDto  = this.getDataForm();

		

		this.userService.create(createUser).subscribe((data)=>{
			console.log(data);

			this.router.navigate([`componentes/user/list-user`]);
			
		},(error:HttpErrorResponse) =>{
			this.showError("Error","Algo salio mal ☹");
			console.log(error);
			
		});
		
	}

	getDataForm(): CreateUserDto{

		let match: CreateUserDto = new CreateUserDto();
		let form = this.formCreateUser.value;

		match.firstName = form.name;
		match.lastName = form.lastName;
		match.email = form.email;
		match.password = form.password;

		return match;
	}


	noIguales(control:FormControl) : {[s:string]:boolean} { 
		let formCambio:any = this;
		if (control.value !== formCambio.controls['password'].value) {
			return {
				noIguales: true
			}
		}
		return null;
	}



}
