import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-components',
	templateUrl: './components.component.html',
	styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

	constructor(
		public router: Router,
	) { }

	ngOnInit() {
		console.log(this.router);

		if(this.router.url == '/componentes'){
			this.router.navigate([`componentes/dashboard`]);
		}
		
	}

}
