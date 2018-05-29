var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movie_list');

var movieSchema = mongoose.Schema({
	title: String, 
	watched: Boolean, 
	year: String,
	runTime: Number
});

var Movie = mongoose.model('Movie', movieSchema);

var saveToDb = function(moviesArr, callback) {
	Movie.insertMany(moviesArr, function(err, movies) {
		callback(err, movies);
	});
};

var queryDb = function(callback) {
	Movie
		.find()
		.exec(callback);

};

var db = mongoose.connection;


module.exports.db = db;
module.exports.saveToDb = saveToDb;
module.exports.queryDb = queryDb;