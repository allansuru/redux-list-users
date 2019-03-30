import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { initialConfigState, IConfigState } from './config.state';


export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
   loaded: boolean;
  loading: boolean;

}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
   loaded: false,
  loading: false
};

export function getInitialState(): IAppState {
  return initialAppState;
}
