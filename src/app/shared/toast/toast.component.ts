import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Validation } from '../global/validation';

@Component({
	template: '<p-toast></p-toast>'
})
export class ToastComponent  {

	public validation = null;
	constructor(
		public messageService: MessageService,
		public router: Router,
	) {
		this.validation = new Validation();
	}

	showError(titulo: string, mensaje: string) {
		this.clearMessage();
		this.messageService.add({
			severity: 'error',
			summary: titulo, //titulo
			detail: mensaje //mensaje
		});

	}

	clearMessage(){
		this.messageService.clear();
	}

}
