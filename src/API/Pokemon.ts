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
	const [TotalPokemon, setTotalPokemon] = useState<PokemonCounter>({
		Pokemon: 1154,
		Count: 0,
	});
	let Pokes: any[] = [];

	let InitialCall = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
	);
	console.log(InitialCall.data);
	const AllPokemon = await InitialCall.data.results.forEach(
		(Pokemon: InitialPokemon) => {
			axios.get(Pokemon.url).then((result) => {
				let Poke = result.data;
				Pokes.push(Pokes.filter((Pokes) => !Pokes.includes(Poke)));
				setTotalPokemon({ ...TotalPokemon, Count: TotalPokemon.Count++ });
			});
		}
	);
	if (TotalPokemon.Count !== 1154) {
		AllPokemon();
	}

	console.log(AllPokemon);
	console.log(Pokes);
};
