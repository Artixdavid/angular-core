import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { UserMetadata } from '../../models/metadata/user-metadata';
import { Observable } from 'rxjs';
import { UpdateUserDto } from '../../models/dto/update-user-dto';

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

	getUserByUserName(userName: string): Observable<any> {
		return this.http.get<any>(`${this.getUrl()}/${userName}/user`, { headers: this.getHeader() });
	}

	getUserByEmail(email: string): Observable<any> {
		return this.http.get<any>(`${this.getUrl()}/${email}/recovery`);
	}

	validateETag(eTag: string): Observable<any> {
		return this.http.get<User>(`${this.getUrl()}/${eTag}/validate`);
	}

	actualizarPerfilUsuario(userDto: UpdateUserDto): Observable<any> {
		return this.http.put<any>(`${this.getUrl()}/${userDto.userName}`, userDto, { headers: this.getHeader() });
	}

}
