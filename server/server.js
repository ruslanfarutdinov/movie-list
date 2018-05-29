var express = require('express');
var parser = require('body-parser');
var {saveToDb} = require('./../database/mongoose.js');
var {db} = require('./../database/mongoose.js');
var {queryDb} = require('./../database/mongoose.js');
var tmdbGetter = require('./../api-helper/tmdbGetter.js');

var server = express();

server.use(parser.json());

server.use(express.static(__dirname + './../'));

server.post('/api/movies', function(req, res) {
	
	var movie = req.body;
	tmdbGetter(movie.title, function(moviesArr) {
	
		saveToDb(moviesArr, function(err, movies) {
			if (err) { 
				console.log(`Failed to save to the db: ${err}`); 
			} else {
				console.log(`Succesfully saved to the db: ${movies}`);
				res.status(201).send('Post request done!');
			}
		});
	});
});


server.get('/api/movies', function(req, res) {
	queryDb(function(err, movies) {
		if (err) {
			console.log(err);
		} else {
			console.log(movies);
			res.status(200).send(['Inception', 'Fight Club']);
		}
	});
});

server.listen(3000, () => { console.log('Listening on port 3000!') });

// This lived inside the post request
// db.on('error', function(error) {
// 	console.log(`Connection error: ${error}`);
// });
// db.once('open', function() {
// 	console.log('Connected to the database!');
// 	var movie = req.body;
// 	tmdbGetter(movie.title);
// 	res.status(201).send('Post request done!');
// });


// , function(moviesArr) {
// 		saveToDb(moviesArr, function(err, movies) {
// 			if (err) { 
// 				console.log(`Error saving to the db: ${err}`);
// 			} else {
// 				console.log(`Movies posted to the db: ${movies}`);
// 				res.status(201).send('Post request done!');
// 			}
// 		});		








