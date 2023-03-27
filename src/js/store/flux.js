const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      characters: [],
      selectCharacter: [],
			planets: [],
      selectPlanet: [],
			favorites: []
		},
		actions: {
      getCharacters: async () => {
          const store = getStore();
          if (localStorage.getItem("characters") === null) {
            const response = await fetch(`https://swapi.dev/api/people`, {
              method: "GET",
              ContentType: "application/json",
            });
            if (response.ok) {
              const data = await response.json();
              setStore({ characters: data.results, });
              localStorage.setItem(`characters`, JSON.stringify(store.characters));
              let storage = localStorage.getItem("characters");
            } else {
              console.log("error: ", response.status, response.statusText);
            }
          } else {
            setStore({ characters: JSON.parse(localStorage.getItem("characters")), });
          };
      },
      getCharacter: (character) => { setStore({ selectCharacter: character, })},
			getPlanets: async () => {
          const store = getStore();
          if (localStorage.getItem("planets") === null) {
            const response = await fetch(`https://swapi.dev/api/planets`, {
              method: "GET",
              ContentType: "application/json",
            });
            if (response.ok) {
              const data = await response.json();
              setStore({ planets: data.results, });
              localStorage.setItem(`planets`, JSON.stringify(store.planets));
              let storage = localStorage.getItem("planets");
            } else {
              console.log("error: ", response.status, response.statusText);
            }
          } else {
            setStore({ planets: JSON.parse(localStorage.getItem("planets")), });
          };
      },
      getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },
      addFavorite: ({id, type, name}, favorites) => {
          const exist = favorites.find(item => item.name == name);
          // console.log("existe?:", exist);
          if (exist == undefined) {
            setStore({ favorites: [...favorites, {id, type, name}]});
          }
      },
      removeFavorite: (removeItem, favorites) => {
          // console.log(removeItem, favorites)
          setStore({ favorites: favorites.filter(item => item != removeItem)})
      },
		}
	};
};

export default getState;
