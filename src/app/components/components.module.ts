import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { MenuModule } from 'primeng/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
	imports: [
		CommonModule,
		ComponentsRoutingModule,
		MenuModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [ComponentsComponent, SidebarComponent, TopbarComponent]
})
export class ComponentsModule { }
