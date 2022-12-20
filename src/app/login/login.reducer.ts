import {createReducer, on} from '@ngrx/store';
import * as UserLoginAction from './login.action';

export interface UserLoginState {
    isLoggedin: boolean;
  }

  export const userInitialState: UserLoginState = {
    isLoggedIn: false
};
export const userFeatureKey = "userLoginState";

// export const userReducer = createReducer(
//   userInitialState,
//   on(UserActions.loginAction, (state, payload) => {
//       const isLoggedIn = payload.isLoggedIn;
//       return {...state, isLoggedIn};
//   })
// )