import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers({});

export const middleware: ThunkMiddleware[] | Middleware[] = [thunk];

export type StoresState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
	middleware,
});

export { store, rootReducer };
