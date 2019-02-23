import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { MenuModule } from 'primeng/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
	imports: [
		CommonModule,
		ComponentsRoutingModule,
		MenuModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		InputTextModule,
		ButtonModule
	],
	declarations: [
		ComponentsComponent,
		SidebarComponent,
		TopbarComponent,
		CreateUserComponent,
		LoginComponent,
		ForgotPasswordComponent
	]
})
export class ComponentsModule { }
