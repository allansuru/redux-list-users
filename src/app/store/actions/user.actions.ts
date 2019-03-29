import { Action } from '@ngrx/store';

import { IUser } from '../../models/user.interface';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  RemoveUser = '[User] Remover User',
  RemoveUserSuccess = '[User] Remover User Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class CreateUser implements Action {
  public readonly type = EUserActions.CreateUser;
  constructor(public payload: IUser) {}
}

export class CreateUserSuccess implements Action {
  public readonly type = EUserActions.CreateUserSuccess;
  constructor(public payload: IUser) {}
}

export class RemoveUser implements Action {
  public readonly type = EUserActions.RemoveUser;
  constructor(public payload: IUser) {}
}

export class RemoveUserSuccess implements Action {
  public readonly type = EUserActions.RemoveUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions =
  | GetUsers
  | GetUsersSuccess
  | GetUser
  | GetUserSuccess
  | CreateUser
  | CreateUserSuccess
  | RemoveUser
  | RemoveUserSuccess;
