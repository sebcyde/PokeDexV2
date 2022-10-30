import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../Redux/store';
import PokeCards from './AllComponents/PokeCards';

function PokeDex() {
	const StorePokemon = useSelector((state: RootState) => state.pokemon);
	const dispatch = useDispatch();
	// const [Pokemon, setPokemon] = useState<JSX.Element[]>([]);

	StorePokemon.forEach((Pokemon, index) => {
		// index < 20 ? console.log(Pokemon) : null;
		if (index < 20) {
			console.log(Pokemon);
		}
		// let PokeDiv = (
		// 	<div
		// 		style={{
		// 			width: '100%',
		// 			display: 'flex',
		// 			flexDirection: 'column',
		// 			textAlign: 'center',
		// 			color: 'purple',
		// 		}}
		// 	>
		// 		<h3>{StorePokemon.name!}</h3>
		// 	</div>
		// );
		// setPokemon([...Pokemon, PokeDiv]);
	});

	return (
		<div>
			<h2>PokeDex</h2>
			<PokeCards />
			{/* {Pokemon} */}
		</div>
	);
}

export default PokeDex;
