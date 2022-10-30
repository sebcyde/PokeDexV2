import {
	configureStore,
	createSlice,
	ThunkAction,
	Action,
} from '@reduxjs/toolkit';

type ReducerType = {
	loading: boolean;
	pokemon: object[];
	items: object[];
	moves: object[];
};

const initial: ReducerType = {
	loading: true,
	pokemon: [],
	items: [],
	moves: [],
};

const MultiSlice = createSlice({
	name: 'MultiReducer',
	initialState: initial,
	reducers: {
		SetLoading(state) {
			state.loading = !state.loading;
		},
		AddPokemon(state, action) {
			state.pokemon.push(...action.payload);
			// state.pokemon = [...state.pokemon, state.pokemon.push(action.payload) action.payload];
		},
		AddItems(state, action) {
			state.items = [...state.items, action.payload];
		},
		AddMoves(state, action) {
			state.moves = [...state.moves, action.payload];
		},
	},
});

export const store = configureStore({ reducer: MultiSlice.reducer });
export const MultiSliceActions = MultiSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
