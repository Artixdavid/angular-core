import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
	imports: [
		UserRoutingModule,
		InputTextModule,
		CardModule,
		ButtonModule,
		DropdownModule,
		CalendarModule,
		InputTextareaModule
	],
	declarations: [
		ProfileUserComponent,
		CreateUserComponent
	]
})
export class UserModule { }
