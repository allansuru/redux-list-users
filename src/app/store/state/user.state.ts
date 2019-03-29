import { IUser } from '../../models/user.interface';

export interface IUserState {
  users: IUser[];
  user: IUser;
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  user: null
};
