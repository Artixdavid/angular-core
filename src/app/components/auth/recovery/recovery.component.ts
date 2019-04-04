import { Component, OnInit } from '@angular/core';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/api/rest/user.service';

@Component({
	selector: 'app-recovery',
	templateUrl: './recovery.component.html',
	styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent extends ToastComponent implements OnInit {

	formRecovery: FormGroup;
	eTag: string = null;

	constructor(
		public messageService: MessageService,
		public router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private userService: UserService
	) {
		super(messageService, router);
		this.route.params.subscribe((params) => {
			this.eTag = params.etag;
			console.log(1,this.eTag);
			if (this.eTag == null || this.eTag == undefined) {
				this.router.navigate([`/login`]);
			}else{
				this.validarETag();
			}
		});
	}

	ngOnInit() {
		this.formInit();
	}

	formInit() {
		this.formRecovery = this.formBuilder.group({
			email: this.formBuilder.control(null, [
				Validators.required,
				Validators.maxLength(50),
				Validators.minLength(10),
				Validators.email
			]),
		});
	}

	validarETag() {
		let user = null ;
		this.userService.validateETag(this.eTag).subscribe((data)=>{
			console.log(2,data);
		})
	}

}
