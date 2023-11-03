import type { AnyAction } from "redux";
import type { DefaultActionCreators, DefaultActionTypes } from "reduxsauce";
import { createActions, createReducer } from "reduxsauce";
import * as Immutable from "seamless-immutable";

/* ------------- Model interface Create Action ------------- */
interface DataAction extends AnyAction {}

interface IActionTypes extends DefaultActionTypes {
  SET_CURRENT_ID_PLAY_WITH_FRIEND: "setCurrentIDPlayWithFriend";
}

interface IActionCreators extends DefaultActionCreators {
  setCurrentIDPlayWithFriend: (id: number) => AnyAction;
}

type IActions = DataAction | AnyAction;

export interface IDState {
  currentIDPlayWithFriend: number;
}

type ImmutableMyType = Immutable.ImmutableObject<IDState>;

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions<IActionTypes, IActionCreators>({
  setCurrentIDPlayWithFriend: ["idPlayWithFriend"],
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE: ImmutableMyType = Immutable.from({
  currentIDPlayWithFriend: 0,
});

const setCurrentIDPlayWithFriend = (
  state: ImmutableMyType,
  { idPlayWithFriend }: { idPlayWithFriend: number }
) => state.merge({ currentIDPlayWithFriend: idPlayWithFriend });

export const reducer = createReducer<ImmutableMyType, IActions>(INITIAL_STATE, {
  [Types.SET_CURRENT_ID_PLAY_WITH_FRIEND]: setCurrentIDPlayWithFriend,
});
