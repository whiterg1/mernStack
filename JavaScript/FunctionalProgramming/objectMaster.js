const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//This will return an array of pokemon whos id is divisble by 3.
const div3Pkmn = pokemon.filter( p => p.id % 3 === 0 );
console.log(div3Pkmn);

//This will return an array of pokemon that are fire types.
const fireType = pokemon.filter(p => p.types[0] === "fire");
console.log(fireType);

//This will return an array of pokemon that contain multiple types
const multiType = pokemon.filter(p => p.types.length > 1);
console.log(multiType);

//This will return an array of just the pokemon names
const pkmnNames = pokemon.map(p=> p.name);
console.log(pkmnNames);

//This will return an array of just the names of pokemon with Ids greater than 99
const pkmnNamesBigId = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(pkmnNamesBigId);

//This will return an array of the names of all pokemon that are only a poison type
const poisonOnlyPkmn = pokemon.filter(p => p.types.includes("poison") && p.types.length <= 1).map(p => p.name);
console.log(poisonOnlyPkmn);

//This will return an array of the first types of all pokemon whose secondary type is flying.
const flyingFirstType = pokemon.filter(p => p.types.includes("flying") && p.types.length > 1).map(p => p.types[0]);
console.log(flyingFirstType);

//This will return a count of the number of pokemon that are normal type.
const numOfNormal = pokemon.filter(p=> p.types.includes("normal"));
console.log(numOfNormal.length);






