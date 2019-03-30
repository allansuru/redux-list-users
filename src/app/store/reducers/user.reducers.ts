import { EUserActions, UserActions } from './../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';
import { IUser } from 'src/app/models/user.interface';


export const userReducers = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
        loading: false,
        loaded: true,
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    case EUserActions.CreateUserSuccess: {
      const newUser = action.payload;
      const users = [
        ...state.users,
         newUser
      ];

      return {
        ...state,
         users
      };
    }

    case EUserActions.RemoveUserSuccess: {
      const users = state.users.filter(u => u.id !== action.payload.id);
      return {
        ...state,
       users
      };
    }

    default:
      return state;
  }
};


export const getUsersLoaded = (state: IUserState) => state.loaded;
