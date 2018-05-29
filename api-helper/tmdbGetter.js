var axios = require('axios');
var {key} = require('./../config.js');

var tmdbGetter = function(movieName, callback) {
	axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
		.then( (response) => {
			var movies = [];
			response.data.results.forEach( (movie) => {
				var newMovie = {
					title: movie.title,
					watched: false,
					year: movie.release_date,
					runTime: 147
				};
				movies.push(newMovie);
			});
			callback(movies);
		})
		.catch( (error) => {
			console.log(err);
		});
};

module.exports = tmdbGetter;