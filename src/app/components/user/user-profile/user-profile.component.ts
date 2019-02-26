import { Component, OnInit } from '@angular/core';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { UserService } from 'src/app/service/api/rest/user.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html'
})
export class UserProfileComponent extends ToastComponent implements OnInit {

	userName:string = null;
	user: any = null;

	headerCard: string = null;
	subHeaderCard: string = null;

	aboutMe:string = null;

	formUser: FormGroup;

	constructor(
		private userService: UserService,
		public messageService: MessageService,
		public router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder
	) {
		super(messageService,router);
		this.route.params.subscribe((params) => {
			this.userName = params.userName;

			if(this.userName == null || this.userName == undefined){
				this.showError("Error", "No se pudo mostrar el usuario");
				this.router.navigate([`componentes/user/list-user`]);
			}

			this.viewProfile();
			
		});

	}

	ngOnInit() {
		this.formInit();
	}

	viewProfile(){
		this.userService.getUserByUserName(this.userName).subscribe((data)=>{
			this.user = data;
			console.log(data);
			
			this.setValueUser();
		},(error:HttpErrorResponse) =>{
			this.showError("Error","Algo salio mal ☹");
			console.log(error);
			
		});
	}

	formInit(){
		this.formUser = this.formBuilder.group({
			userName: this.formBuilder.control({value:null, disabled: true}, [Validators.required]),
			email: this.formBuilder.control(null, [Validators.required, Validators.email]),
			name: this.formBuilder.control(null, [Validators.required]),
			secondName: this.formBuilder.control(null),
			lastName: this.formBuilder.control(null, [Validators.required]),
			motherLastName: this.formBuilder.control(null),
			phone: this.formBuilder.control(null),
			fechaNacimiento: this.formBuilder.control(null),
			address: this.formBuilder.control(null),
			aboutMe: this.formBuilder.control(null)
		});
	}

	setValueUser(){

		let name = this.toCapitalCase(this.user.firstName);
		let lastName = this.toCapitalCase(this.user.lastName);
		let username = this.user.username;
		let aboutme = this.user.aboutMe;

		this.subHeaderCard = username;
		this.headerCard = `${name} ${lastName}`;
		this.aboutMe = aboutme;


		this.formUser.patchValue({
			userName: username,
			email: this.user.email,
			name: this.user.firstName,
			secondName: this.user.secondName,
			lastName: this.user.lastName,
			motherLastName: this.user.motherLastName,
			phone: this.user.phone,
			fechaNacimiento: new Date(this.user.fechaNacimiento),
			address: this.user.address,
			aboutMe: this.user.aboutMe,
		});
	}

}
