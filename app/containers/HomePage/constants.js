/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = "boilerplate/Home/CHANGE_USERNAME";
export const SIGNIN = "boilerplate/Home/SIGNIN";
export const SIGNIN_SUCCESS = "boilerplate/Home/SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "boilerplate/Home/SIGNIN_FAILURE";
