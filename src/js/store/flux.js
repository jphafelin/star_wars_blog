const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => { getActions().changeColor(0, "green"); },
			loadSomeData: () => { /** fetch().then().then(data => setStore({ "foo": data.bar })) */ },
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
                setStore({ favorites: [...favorites, {id, type, name}]});
            },
		}
	};
};

export default getState;
