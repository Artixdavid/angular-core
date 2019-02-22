import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
	imports: [
		UserRoutingModule,
		InputTextModule
	],
	declarations: [
		UserComponent,
		CreateUserComponent
	]
})
export class UserModule { }
