import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserLoginState, userFeatureKey } from "./login.reducer";

export const selectUserState = createFeatureSelector<UserLoginState>(userFeatureKey);

export const selectUsers = createSelector(selectUserState, (state: UserLoginState)=> state && state.isLoggedIn);