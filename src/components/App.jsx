class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allMovies: window.movies,
			currentMovies: window.movies,
			notFound: false,
			clickedMovie: ''
		};
	}

	findVideo() {
		var searchMovieInput = document.getElementById('search-movies');
		var searchMoviesValue = searchMovieInput.value.toLowerCase();

		var searchResult = this.state.allMovies.filter( (movie) => { 
			var lowerCaseTitle = movie.title.toLowerCase();
			return lowerCaseTitle.includes(searchMoviesValue);
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
		
		var moviesArr = this.state.allMovies;
		moviesArr.push({title: addMovieValue, watched: false});

		this.setState({
			allMovies: moviesArr,
			currentMovies: this.state.allMovies
		}); 
	}

	toggleButton(movie) {
		movie.watched = !movie.watched; 
		this.setState({});
	}

	showWatchedOrToWatch(event) {
		$(`.search-row`).removeClass('clicked');
		$(`#${event.target.id}`).addClass('clicked');

		var watched;
		event.target.id === 'watched' ? watched = true : watched = false;

		var filteredMovies = this.state.allMovies.filter( (movie) => {
			return movie.watched === watched;
		});

		this.setState({
			currentMovies: filteredMovies
		});
	}

	showAllMovies(event) {
		$(`.search-row`).removeClass('clicked');
		$(`#${event.target.id}`).addClass('clicked');
		this.setState({
			currentMovies: this.state.allMovies
		});
	}

	clickMovie(event) {
		var movie = event.target.innerHTML;
		this.setState({
			clickedMovie: movie
		});
	}

	render() {
		var notFound = this.state.notFound;
		
		var listCurrentMovies = this.state.currentMovies.map( (movie, i) => {
			if (this.state.clickedMovie === movie.title) {
				return [<List key={i} movie={movie} toggleButton={this.toggleButton.bind(this)} clickMovie={this.clickMovie.bind(this)}/>, 
								<ListDescription key={i+1} movie={movie}/>]
			} else {
				return <List key={i} movie={movie} toggleButton={this.toggleButton.bind(this)} clickMovie={this.clickMovie.bind(this)}/> 			
			}

		});

		var display = notFound ? <NotFound/> : (<ul className="movies">{listCurrentMovies}</ul>);

		return (
			<div className="main">
				<div className="header"> 
					<h2>MovieList</h2>
				</div>

				<AddMovies addMovie={this.addMovie.bind(this)}/>

				<Search findVideo={this.findVideo.bind(this)} showWatchedOrToWatch={this.showWatchedOrToWatch.bind(this)} 
				showAllMovies={this.showAllMovies.bind(this)}/>

				{display}

			</div>
		)
	}
}

window.App = App;
