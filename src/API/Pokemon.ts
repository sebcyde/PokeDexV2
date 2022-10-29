import axios from 'axios';
import { useState } from 'react';

interface InitialPokemon {
	name: string;
	url: string;
}

interface PokemonCounter {
	Pokemon: number;
	Count: number;
}

export const PopulatePokemon = async () => {
	let TotalPokemon = {
		Pokemon: 1154,
		Count: 0,
	};
	let Pokes: any[] = [];

	let InitialCall = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
	);
	console.log(InitialCall.data);

	// while (TotalPokemon.Count !== 1154) {
	// const AllPokemon = await InitialCall.data.results.forEach(
	// 	(Pokemon: InitialPokemon) => {
	// 		axios.get(Pokemon.url).then((result) => {
	// 			let Poke = result.data;
	// 			Pokes.push(Pokes.filter((Pokes) => !Pokes.includes(Poke)));
	// 			TotalPokemon = { ...TotalPokemon, Count: TotalPokemon.Count + 1 };
	// 		});
	// 	}
	// );

	console.log(Pokes);
};
