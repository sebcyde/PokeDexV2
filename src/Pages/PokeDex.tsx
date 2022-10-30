import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../Redux/store';
import PokeCards from './AllComponents/PokeCards';

function PokeDex() {
	const StorePokemon = useSelector((state: RootState) => state.pokemon);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	console.log(store);
	// 	console.log(StorePokemon);
	// }, [StorePokemon]);

	return (
		<div>
			<h2>PokeDex</h2>
			<PokeCards />
		</div>
	);
}

export default PokeDex;
