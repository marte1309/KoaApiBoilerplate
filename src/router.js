//Modulos
const main 	= require('./modules');
const fs 	= require('fs');
const path 	= require('path');

function routes(app) {
	if(main) {
		app.use(main);
	}

	let routes = [];

	routes = fs.readdirSync('src/modules');

	for(let i = 0; i < routes.length; i++) {
		if (path.extname(routes[i]) == ".js" && routes[i] != "index.js") {
			let route = require(`./modules/${routes[i]}`);
			app.use(route);
		}
	}
}

module.exports = routes;