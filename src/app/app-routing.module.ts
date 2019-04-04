import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { RecoveryComponent } from './components/auth/recovery/recovery.component';

const routes: Routes = [

	{ path: '', redirectTo: 'componentes', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{ path: ':etag/recovery', component: RecoveryComponent },
	{ path: 'componentes', loadChildren: './components/components.module#ComponentsModule'}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
