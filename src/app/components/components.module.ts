import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { UserComponent } from './user/user.component';

@NgModule({
	imports: [
		CommonModule,
		ComponentsRoutingModule
	],
	declarations: [ComponentsComponent, UserComponent]
})
export class ComponentsModule { }
