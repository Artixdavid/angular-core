import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
	imports: [
		UserRoutingModule
	],
	declarations: [
		UserComponent,
		CreateUserComponent
	]
})
export class UserModule { }
