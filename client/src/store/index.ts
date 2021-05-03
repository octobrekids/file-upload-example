import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import uploadReducer from '../reducers/uploadFileReducer/index';

const rootReducer = combineReducers({
	upload: uploadReducer,
});

export const middleware: ThunkMiddleware[] | Middleware[] = [thunk];

export type StoresState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
	middleware,
});

export { store, rootReducer };
