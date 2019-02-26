import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { UserMetadata } from '../../models/metadata/user-metadata';

@Injectable({
	providedIn: 'root'
})

export class UserService extends BaseService<User, UserMetadata> {

	constructor(protected http: HttpClient) {
		super(http);
	}
	getClassUrl(): string {
		return 'users';
	}
	
}
