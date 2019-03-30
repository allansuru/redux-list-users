import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectSelectedUser, getUsersLoaded } from './../store/selectors/user.selector';
import { IAppState } from '../store/state/app.state';
import { IUser } from '../models/user.interface';
import { GetUsers, GetUser } from '../store/actions/user.actions';


@Injectable()
export class UserExistGuard implements CanActivate {

	constructor(private store: Store<IAppState>, 	private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new GetUser(route.params.id));
		const id = parseInt(route.params.id, 10);
		const existe$ = this.hasUser(id);
		return existe$;
	}

	hasUser(id: number): Observable<boolean> {

		return this.store.select(selectSelectedUser).pipe(
			map((users: IUser) => {
				if (users) {
						return users.id === id;
				} else {
					this.router.navigate(['users']);
				}
			 }),
			take(1)
		);
		// return this.store.pipe(select(selectSelectedUser))

	}

}
