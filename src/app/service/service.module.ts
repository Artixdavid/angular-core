import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './api/rest/user.service';


@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		//aqui van los servicios
		UserService
	]
})
export class ServiceModule { }
