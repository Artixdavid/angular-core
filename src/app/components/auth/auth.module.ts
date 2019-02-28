import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
	declarations: [
		LoginComponent,
		ForgotPasswordComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		ButtonModule,
		InputTextModule,
		FormsModule,
		ReactiveFormsModule,
		ToastModule
	]
})
export class AuthModule { }
