import { EUserActions, UserActions } from './../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';


export const userReducers = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.CreateUserSuccess: {
      return {
         ...state,
        user: action.payload
      };
    }
    case EUserActions.RemoveUserSuccess: {
      debugger
      const users = state.users.filter(u => u.id !== action.payload.id);
      return {
        ...state,
        users: users
      };
    }

    default:
      return state;
  }
};
