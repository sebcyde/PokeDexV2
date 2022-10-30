import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PopulatePokemon } from './API/Pokemon';
import { useDispatch, useSelector } from 'react-redux';
import { MultiSliceActions, RootState } from './Redux/store';
import PokeDex from './Pages/PokeDex';

function App() {
	const Loading = useSelector((state: RootState) => state.loading);
	const Pokemon = useSelector((state: RootState) => state.pokemon);
	const dispatch = useDispatch();

	const Initialisation = async () => {
		console.log(Loading);
		await PopulatePokemon();
		// await dispatch(MultiSliceActions.AddPokemon(Pokes));

		// await dispatch(MultiSliceActions.AddPokemon(await PopulatePokemon()));
		await dispatch(MultiSliceActions.SetLoading);
		await console.log(Pokemon);
		// await console.log(Pokes);
	};

	useEffect(() => {
		// PopulatePokemon();
		// Initialisation();
	}, []);

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			{Loading ? (
				<h2 style={{ color: 'red' }}>Loading</h2>
			) : (
				<h2 style={{ color: 'red' }}>Loaded Home</h2>
			)}

			<PokeDex />
			{/* {Loading ? (
				<h2 style={{ color: 'red' }}>Loading...</h2>
			) : (
				<>
					<h2 style={{ color: 'red' }}>Loaded Home</h2>
					<PokeDex />
				</>
			)} */}
		</div>
	);
}

export default App;
