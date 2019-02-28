import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../service/auth/auth-guard.service';
const routes: Routes = [
	{
		path: '',
		component: ComponentsComponent,
		children: [
			{ path: 'user', loadChildren: './user/user.module#UserModule' },
			{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
		]
	},
	{ path: 'create-user', component: CreateUserComponent},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComponentsRoutingModule { }
