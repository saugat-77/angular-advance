import { createAction, props } from '@ngrx/store';

export const userLoginAction = createAction(
    '[Header Component] Login',
    props<{isLoggedin: boolean}>()
);