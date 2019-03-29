import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, from } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import * as fromUser from '../actions/user.actions';

import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../models/http-models/user-http.interface';
import { selectUserList } from '../selectors/user.selector';


@Injectable()
export class UserEffects {

	constructor(
		private userService: UserService,
		private actions$: Actions,
		private store: Store<IAppState>
	) { }

	@Effect()
	getUser$ = this.actions$.pipe(
		ofType<fromUser.GetUser>(fromUser.EUserActions.GetUser),
		map(action => action.payload),
		withLatestFrom(this.store.pipe(select(selectUserList))),
		switchMap(([id, users]) => {
			const selectedUser = users.filter(user => user.id === +id)[0];
			return of(new fromUser.GetUserSuccess(selectedUser));
		})
	);

	@Effect()
	getUsers$ = this.actions$.pipe(
		ofType<fromUser.GetUsers>(fromUser.EUserActions.GetUsers),
		switchMap(() => {
			return this.userService.getUsers().pipe(
				map(users => new fromUser.GetUsersSuccess(users)),
				catchError(error => of(console.log(error)))
			);
		}));

	@Effect()
	createUser$ = this.actions$.pipe(ofType(fromUser.EUserActions.CreateUser),
		switchMap(iUser => {
			return this.userService.createUser(iUser['payload']).pipe(
				// tslint:disable-next-line:no-shadowed-variable
				map(iUser => new fromUser.CreateUserSuccess(iUser)),
				catchError(error => of(console.log(error)))
			);
		}));

	@Effect()
	removeUser$ = this.actions$.pipe(ofType(fromUser.EUserActions.RemoveUser),
		map((action: fromUser.RemoveUser) => action.payload),
		switchMap(user => {
			return this.userService.removeUser(user).pipe(
				map(() => new fromUser.RemoveUserSuccess(user)),
						catchError(error => of(console.log(error))));
			}));
}

