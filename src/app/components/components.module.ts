import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { MenuModule } from 'primeng/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		ComponentsRoutingModule,
		MenuModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [ComponentsComponent]
})
export class ComponentsModule { }
