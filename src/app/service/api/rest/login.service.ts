import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from '../../models/dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<any, any, LoginDto> {

	constructor(protected http: HttpClient) {
		super(http);
	}

	getClassUrl(): string {
		return 'login';
	}

	login(E:LoginDto):Observable<LoginDto>{
		let headers = this.getHeader();
		headers = headers.append('Access-Control-Allow-Credentials', "true");
		headers = headers.append( 'Access-Control-Allow-Headers','application/json');
		return this.http.post<LoginDto>(this.getUrl(), E, {headers: headers });
	}


}
