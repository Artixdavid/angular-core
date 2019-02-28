import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Base } from '../models/dto/Base';
import { BaseMetadata } from '../models/dto/BaseMetadata';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export abstract class BaseService <E extends Base, Z extends BaseMetadata<E>, T extends any = null> {

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
			"etag": localStorage.getItem("eTag"),
			//"Access-Control-Allow-Origin": "*",
			//"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, HEAD",
			//"Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, Accept",
		});
	}

	getById(id: number): Observable<E> {
		return this.http.get<E>(`${this.getUrl()}/${id}`, { headers: this.getHeader() });
	}

	getList(): Observable<E[]> {
		return this.http.get<E[]>(`${this.getUrl()}`, { headers: this.getHeader() });
	}

	create(E): Observable<E>{
		return this.http.post<E>(this.getUrl(), E, {headers: this.getHeader()});
	}
}
