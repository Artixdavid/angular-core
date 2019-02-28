import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router) {}

	canActivate() {
		if (localStorage.getItem('isLoggedin')) {
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
