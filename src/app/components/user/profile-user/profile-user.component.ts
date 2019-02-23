import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html'
})
export class ProfileUserComponent implements OnInit {

	userName:string = "David";

	constructor() {
		
	}

	ngOnInit() {
	}

}
