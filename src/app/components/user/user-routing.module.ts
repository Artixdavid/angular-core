import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileUserComponent,
		children: [
			{
				path: 'profile', component: ProfileUserComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule { }
