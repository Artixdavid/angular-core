import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

	name:string = null;
	lastName:string = null;
	constructor(
		private auth:AuthService,
		private router: Router
	) {		
		if(!auth.isAuthenticated()){
			this.router.navigate([`login`]);
		}

		this.name = localStorage.getItem("name");
		this.lastName = localStorage.getItem("lastname");

	}

	ngOnInit() {
	}

	logout(){
		this.auth.logout();
	}

}
