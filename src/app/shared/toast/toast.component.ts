import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
	template: '<p-toast></p-toast>'
})
export class ToastComponent {

	constructor(
		public messageService: MessageService,
		public router: Router,
	) {

	}

	showError(titulo: string, mensaje: string) {
		this.messageService.add({
			severity: 'error',
			summary: titulo, //titulo
			detail: mensaje //mensaje
		});

		
	}

}
