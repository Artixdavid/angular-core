import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthModule } from './components/auth/auth.module';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceModule,
		BrowserAnimationsModule,
		ServiceModule,
		AuthModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
