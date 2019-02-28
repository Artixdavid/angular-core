import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './api/rest/user.service';
import { LoginService } from './api/rest/login.service';
import { AuthGuardService } from './auth/auth-guard.service';


@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		//aqui van los servicios
		UserService,
		LoginService,
		AuthGuardService
	]
})
export class ServiceModule { }
