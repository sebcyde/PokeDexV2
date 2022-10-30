import {
	configureStore,
	createSlice,
	ThunkAction,
	Action,
} from '@reduxjs/toolkit';
import { PokemonReducers } from './Reducer';

export const store = configureStore({
	reducer: PokemonReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
