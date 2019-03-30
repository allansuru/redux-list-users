import { IUser } from '../../models/user.interface';

export interface IUserState {
  users: IUser[];
  user: IUser;
  selectedUser: IUser;
  loaded: boolean;
  loading: boolean;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  user: null,
  loaded: false,
  loading: false,
};
