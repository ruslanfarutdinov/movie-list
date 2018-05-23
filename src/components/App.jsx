class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allMovies: window.movies,
			currentMovies: window.movies,
			notFound: false
		};
	}

	findVideo() {
		var searchMovieInput = document.getElementById('search-movies');
		var searchMoviesValue = searchMovieInput.value;

		var searchResult = this.state.allMovies.filter( (movie) => { 
			var isThere = true;
			
			for (var i = 0; i < searchMoviesValue.length; i++) {
			  if (movie.title[i] !== searchMoviesValue[i]) {
			  	isThere = false;
			  }	
			}
			
			return isThere;
		});

		if (searchResult.length > 0) {
			this.setState({
				notFound: false,
				currentMovies: searchResult	
			});
		} else if(searchMoviesValue.length === 0) {
			this.setState({
				notFound: false,
				currentMovies: this.state.allMovies
			});
		} else {
			this.setState({
				notFound: true
			}); 
		}
	}

	addMovie() {
		var addMovieInput = document.getElementById('add-movie');
		var addMovieValue = addMovieInput.value;
		console.log(this.state.allMovies);
		console.log(this.state.currentMovies);
		
		var moviesArr = this.state.allMovies;
		moviesArr.push({title: addMovieValue});

		this.setState({
			allMovies: moviesArr
		}); 
	}

	render() {
		var notFound = this.state.notFound;
		var listCurrentMovies = this.state.currentMovies.map( (movie) => <List movie={movie}/> );

		var display = notFound ? <NotFound/> : (<ul className="movies">{listCurrentMovies}</ul>);

		return (
			<div className="main">
				<div className="header"> 
					<h2>MovieList</h2>
				</div>

				<AddMovies addMovie={this.addMovie.bind(this)}/>

				<Search findVideo={this.findVideo.bind(this)}/>

				{display}

			</div>
		)
	}
}

window.App = App;
