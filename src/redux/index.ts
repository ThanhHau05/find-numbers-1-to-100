/* eslint-disable import/no-duplicates */
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import type { DataState } from "./Data/DataRedux";
import DataActions, { reducer as DataReducer } from "./Data/DataRedux";
import immutablePersistenceTransform from "./immutable-persistence-transfrom";
import Saga from "./saga";
import type { UserState } from "./User/UserRedux";
import UserActions, { reducer as UserReducer } from "./User/UserRedux";
import IdPlayWithFriendActions, {
  IDState,
  reducer as IdPlayWithFriendReducer,
} from "./Data/IDPlayWithFriend";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  user: UserReducer,
  data: DataReducer,
  idPlayWithFriend: IdPlayWithFriendReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "data", "idPlayWithFriend"],
  transforms: [immutablePersistenceTransform],
};

const Redux = () => {
  const finalReducers = persistReducer(persistConfig, reducers);

  const store = createStore(finalReducers, Saga);

  const persistor = persistStore(store);

  return { store, persistor };
};

export default Redux;

const createStore = (rootReducer: any, rootSaga: any) => {
  const middleware = [];
  // middleware.push(logger)

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

export type RootState = ReturnType<typeof reducers>;
export const selector = {
  user: (state: RootState) => state.user as unknown as UserState,
  data: (state: RootState) => state.data as unknown as DataState,
  idPlayWithFriend: (state: RootState) =>
    state.idPlayWithFriend as unknown as IDState,
};
export { DataActions, UserActions, IdPlayWithFriendActions };
