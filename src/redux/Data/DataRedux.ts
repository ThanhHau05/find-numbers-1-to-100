import type { AnyAction } from 'redux';
import type { DefaultActionCreators, DefaultActionTypes } from 'reduxsauce';
import { createActions, createReducer } from 'reduxsauce';
import * as Immutable from 'seamless-immutable';

import type { PlayingModeInformation } from '@/components/constants/select-options';

/* ------------- Model interface Create Action ------------- */
interface DataAction extends AnyAction {}

interface IActionTypes extends DefaultActionTypes {
  SET_CURRENT_MODE_DATA: 'setCurrentModeData';
}

interface IActionCreators extends DefaultActionCreators {
  setCurrentModeData: (id: PlayingModeInformation) => AnyAction;
}

type IActions = DataAction | AnyAction;

export interface DataState {
  currentModeData: PlayingModeInformation;
}

type ImmutableMyType = Immutable.ImmutableObject<DataState>;

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions<IActionTypes, IActionCreators>({
  setCurrentModeData: ['data'],
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE: ImmutableMyType = Immutable.from({
  currentModeData: <PlayingModeInformation>{},
});

const setCurrentModeData = (
  state: ImmutableMyType,
  { data }: { data: PlayingModeInformation },
) => state.merge({ currentModeData: data });

export const reducer = createReducer<ImmutableMyType, IActions>(INITIAL_STATE, {
  [Types.SET_CURRENT_MODE_DATA]: setCurrentModeData,
});
