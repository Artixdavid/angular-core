import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [
		LoginComponent,
		ForgotPasswordComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		ButtonModule,
		InputTextModule
	]
})
export class AuthModule { }
