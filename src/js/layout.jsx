import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import { People } from "./views/People.jsx";
import { Planets } from "./views/Planets.jsx";
import { PlanetsDetails } from "./views/PlanetsDetails.jsx";
import { Starships } from "./views/Starships.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/Footer.jsx";

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"
// category = { "people": "characters" }
// id = #
// ext = ".jpg"

//create your first component
const Layout = () => {
	// the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people" element={<People />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:theid" element={<PlanetsDetails />} />
						<Route path="/starships/" element={<Starships />} />
						<Route path="/reload" element={<h1 style={{color: "white"}}>400 - Bad Request.<br/><small>You must navigate this application by menus and buttons</small></h1>}/>
						<Route path="*" element={<h1 style={{color: "white"}}>404 - Page not found!</h1>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
