import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
const routes: Routes = [
	{
		path: '',
		component: ComponentsComponent,
		children: [
			{ path: 'user', loadChildren: './user/user.module#UserModule' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComponentsRoutingModule { }
