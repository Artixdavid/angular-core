import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/api/rest/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { Router } from '@angular/router';
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent extends ToastComponent implements OnInit {

	constructor(
		private userService: UserService,
		public messageService: MessageService,
		public router: Router,
	) {
		super(messageService,router);
	}

	user = [];

	ngOnInit() {
		this.getList();
	}

	getList(){
		this.userService.getList().subscribe((data)=>{
			this.user = data;

		}, (error:HttpErrorResponse) =>{
			this.showError("Error","Algo salio mal ☹");
			
			/*if(error.message){
				this.showError(error.message);
				return;
			}
			*/
			
		});
	}

	viewProfile(data:any){
		this.router.navigate([`componentes/user/${data.username}/profile`]);
	}

	

}
