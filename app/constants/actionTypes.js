/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Login page
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';

// Sign Up
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

// Password Reset
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

// User Details
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const SET_USER_REQUEST = 'SET_USER_REQUEST';
export const SET_AUTH_ERROR_REQUEST = 'SET_AUTH_ERROR_REQUEST';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// Permissions
export const GET_PERMISSIONS_REQUEST = 'GET_PERMISSIONS_REQUEST';
export const GET_PERMISSIONS_SUCCESS = 'GET_PERMISSIONS_SUCCESS';
export const GET_PERMISSIONS_FAILED = 'GET_PERMISSIONS_FAILED';

export const CREATE_PERMISSIONS_REQUEST = 'CREATE_PERMISSIONS_REQUEST';
export const CREATE_PERMISSIONS_SUCCESS = 'CREATE_PERMISSIONS_SUCCESS';
export const CREATE_PERMISSIONS_FAILED = 'CREATE_PERMISSIONS_FAILED';

export const DELETE_PERMISSIONS_REQUEST = 'DELETE_PERMISSIONS_REQUEST';
export const DELETE_PERMISSIONS_SUCCESS = 'DELETE_PERMISSIONS_SUCCESS';
export const DELETE_PERMISSIONS_FAILED = 'DELETE_PERMISSIONS_FAILED';

// Roles
export const GET_ROLES_REQUEST = 'GET_ROLES_REQUEST';
export const GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS';
export const GET_ROLES_FAILED = 'GET_ROLES_FAILED';

export const GET_ROLE_REQUEST = 'GET_ROLE_REQUEST';
export const GET_ROLE_SUCCESS = 'GET_ROLE_SUCCESS';
export const GET_ROLE_FAILED = 'GET_ROLE_FAILED';

export const CREATE_ROLE_REQUEST = 'CREATE_ROLE_REQUEST';
export const CREATE_ROLE_SUCCESS = 'CREATE_ROLE_SUCCESS';
export const CREATE_ROLE_FAILED = 'CREATE_ROLE_FAILED';

export const DELETE_ROLE_REQUEST = 'DELETE_ROLE_REQUEST';
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';
export const DELETE_ROLE_FAILED = 'DELETE_ROLE_FAILED';

// Users
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const CREATE_USERS_REQUEST = 'CREATE_USERS_REQUEST';
export const CREATE_USERS_SUCCESS = 'CREATE_USERS_SUCCESS';
export const CREATE_USERS_FAILED = 'CREATE_USERS_FAILED';

export const DELETE_USERS_REQUEST = 'DELETE_USERS_REQUEST';
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
export const DELETE_USERS_FAILED = 'DELETE_USERS_FAILED';

export const GET_FILTERS_REQUEST = 'GET_FILTERS_REQUEST';
export const GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS';
export const GET_FILTERS_FAILED = 'GET_FILTERS_FAILED';

// Courses
export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILED = 'GET_COURSES_FAILED';

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILED = 'GET_COURSE_FAILED';

export const CREATE_COURSES_REQUEST = 'CREATE_COURSES_REQUEST';
export const CREATE_COURSES_SUCCESS = 'CREATE_COURSES_SUCCESS';
export const CREATE_COURSES_FAILED = 'CREATE_COURSES_FAILED';

export const DELETE_COURSES_REQUEST = 'DELETE_COURSES_REQUEST';
export const DELETE_COURSES_SUCCESS = 'DELETE_COURSES_SUCCESS';
export const DELETE_COURSES_FAILED = 'DELETE_COURSES_FAILED';

// Sections
export const GET_SECTIONS_REQUEST = 'GET_SECTIONS_REQUEST';
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';
export const GET_SECTIONS_FAILED = 'GET_SECTIONS_FAILED';

export const CREATE_SECTIONS_REQUEST = 'CREATE_SECTIONS_REQUEST';
export const CREATE_SECTIONS_SUCCESS = 'CREATE_SECTIONS_SUCCESS';
export const CREATE_SECTIONS_FAILED = 'CREATE_SECTIONS_FAILED';

export const DELETE_SECTIONS_REQUEST = 'DELETE_SECTIONS_REQUEST';
export const DELETE_SECTIONS_SUCCESS = 'DELETE_SECTIONS_SUCCESS';
export const DELETE_SECTIONS_FAILED = 'DELETE_SECTIONS_FAILED';

// Lectures
export const GET_LECTURES_REQUEST = 'GET_LECTURES_REQUEST';
export const GET_LECTURES_SUCCESS = 'GET_LECTURES_SUCCESS';
export const GET_LECTURES_FAILED = 'GET_LECTURES_FAILED';

export const CREATE_LECTURES_REQUEST = 'CREATE_LECTURES_REQUEST';
export const CREATE_LECTURES_SUCCESS = 'CREATE_LECTURES_SUCCESS';
export const CREATE_LECTURES_FAILED = 'CREATE_LECTURES_FAILED';

export const DELETE_LECTURES_REQUEST = 'DELETE_LECTURES_REQUEST';
export const DELETE_LECTURES_SUCCESS = 'DELETE_LECTURES_SUCCESS';
export const DELETE_LECTURES_FAILED = 'DELETE_LECTURES_FAILED';

export const GET_PRICING_PLANS_REQUEST = 'GET_PRICING_PLANS_REQUEST';
export const GET_PRICING_PLANS_SUCCESS = 'GET_PRICING_PLANS_SUCCESS';
export const GET_PRICING_PLANS_FAILED = 'GET_PRICING_PLANS_FAILED';

export const ADD_PRICING_PLAN_REQUEST = 'ADD_PRICING_PLAN_REQUEST';
export const ADD_PRICING_PLAN_SUCCESS = 'ADD_PRICING_PLAN_SUCCESS';
export const ADD_PRICING_PLAN_FAILED = 'ADD_PRICING_PLAN_FAILED';

export const DELETE_PRICING_PLAN_REQUEST = 'DELETE_PRICING_PLAN_REQUEST';
export const DELETE_PRICING_PLAN_SUCCESS = 'DELETE_PRICING_PLAN_SUCCESS';
export const DELETE_PRICING_PLAN_FAILED = 'DELETE_PRICING_PLAN_FAILED';

// Files
export const GET_SIGN_URL_REQUEST = 'GET_SIGN_URL_REQUEST';
export const GET_SIGN_URL_SUCCESS = 'GET_SIGN_URL_SUCCESS';
export const GET_SIGN_URL_FAILED = 'GET_SIGN_URL_FAILED';
