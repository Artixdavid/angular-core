import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateUserDto } from 'src/app/service/models/dto/create-user-dto';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {

	formCreateUser: FormGroup;

	constructor(
		public formBuilder: FormBuilder
	) {
		
	}

	ngOnInit() {
		this.formInit();
	}

	formInit(){
		this.formCreateUser = this.formBuilder.group({
			name: this.formBuilder.control(null, [Validators.required]),
			lastName: this.formBuilder.control(null, [Validators.required]),
			email: this.formBuilder.control(null, [Validators.required, Validators.email]),
			password: this.formBuilder.control(null, [Validators.required]),
			repeatPassword: this.formBuilder.control(null, [Validators.required])
		});
	}


	onRegistrar(){
		let createUser:CreateUserDto  = this.getDataForm();

		console.log(createUser);
		
	}

	getDataForm(): CreateUserDto{

		let match: CreateUserDto = new CreateUserDto();
		let form = this.formCreateUser.value;

		match.name = form.name;
		match.lastName = form.lastName;
		match.email = form.email;
		match.password = form.password;

		return match;
	}



}
