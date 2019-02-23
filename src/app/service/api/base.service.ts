import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Base } from '../models/dto/Base';
import { BaseMetadata } from '../models/dto/BaseMetadata';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export abstract class BaseService <E extends Base, Z extends BaseMetadata<E>> {

	static readonly API_URL = environment.API_URL + "";

	constructor(protected http: HttpClient) {

	}

	getBaseUrl(): string {
		return BaseService.API_URL;
	}

	abstract getClassUrl(): string;

	getUrl(): string {
		return `${this.getBaseUrl()}${this.getClassUrl()}`;
	}

	protected getHeader(): HttpHeaders {
		return new HttpHeaders({
			'etag': localStorage.getItem("eTag")
		});
	}

	getById(id: number): Observable<E> {
		return this.http.get<E>(`${this.getUrl()}/${id}`, { headers: this.getHeader() });
	}

	getList(): Observable<E[]> {
		return this.http.get<E[]>(`${this.getUrl()}`, { headers: this.getHeader() });
	}
}
