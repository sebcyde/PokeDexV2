import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PopulatePokemon } from './API/Pokemon';
import { useDispatch, useSelector } from 'react-redux';
import { MultiSliceActions, RootState, store } from './Redux/store';
import PokeDex from './Pages/PokeDex';
import { LoadingObject } from './Pages/AllComponents/Loading/Loading';

function App() {
	const Pokemon = useSelector((state: RootState) => state.pokemon);
	let Loading = LoadingObject.Loading;
	const dispatch = useDispatch();

	const Initialisation = async () => {
		// console.log(Loading);
		// await PopulatePokemon();
		// await dispatch(MultiSliceActions.AddPokemon(Pokes));
		// await dispatch(MultiSliceActions.AddPokemon(await PopulatePokemon()));
		// await dispatch(MultiSliceActions.SetLoading);
		// await console.log(Pokemon);
		// await console.log(Pokes);
	};

	useEffect(() => {
		console.log('Store Updated');
	}, [store]);

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
