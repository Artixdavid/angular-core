import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [

	{ path: '', redirectTo: 'componentes', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'componentes', loadChildren: './components/components.module#ComponentsModule'}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
