import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
	imports: [
		ComponentsRoutingModule
	],
	declarations: [ComponentsComponent]
})
export class ComponentsModule { }
