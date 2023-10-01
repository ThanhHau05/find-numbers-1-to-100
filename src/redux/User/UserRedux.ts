import type { AnyAction } from 'redux';
import type { DefaultActionCreators, DefaultActionTypes } from 'reduxsauce';
import { createActions, createReducer } from 'reduxsauce';
import * as Immutable from 'seamless-immutable';

/* ------------- Model interface Create Action ------------- */
interface UserAction extends AnyAction {}

interface IActionTypes extends DefaultActionTypes {
  SET_CURRENT_USER_ID: 'setCurrentUserID';
}

interface IActionCreators extends DefaultActionCreators {
  setCurrentUserID: (id: number) => AnyAction;
}

type IActions = UserAction | AnyAction;

export interface UserState {
  currentUserID: number;
}

type ImmutableMyType = Immutable.ImmutableObject<UserState>;

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions<IActionTypes, IActionCreators>({
  setCurrentUserID: ['user'],
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE: ImmutableMyType = Immutable.from({
  currentUserID: 0,
});

const setCurrentUserID = (state: ImmutableMyType, { user }: { user: number }) =>
  state.merge({ currentUserID: user });

export const reducer = createReducer<ImmutableMyType, IActions>(INITIAL_STATE, {
  [Types.SET_CURRENT_USER_ID]: setCurrentUserID,
});
