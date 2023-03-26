const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
			favorites: []
		},
		actions: {
            getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },
			getPlanets: async () => {
                const store = getStore();
                if (localStorage.getItem("planets") === null) {
                    const response = await fetch(`https://swapi.dev/api/planets`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ planets: responseJSON.results, });

                    localStorage.setItem(`planets`, JSON.stringify(store.planets));
                    let storage = localStorage.getItem("planets");
                } else {
                    setStore({ planets: JSON.parse(localStorage.getItem("planets")), });
                }
            },
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
