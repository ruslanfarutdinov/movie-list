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
		var inputField = document.getElementById('input');
		var inputValue = inputField.value;

		var searchResult = this.state.allMovies.filter( (movie) => { 
			return movie.title === inputValue; 
		});

		if (searchResult.length > 0) {
			this.setState({
				notFound: false,
				currentMovies: searchResult	
			});
		} else if(inputValue.length === 0) {
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

	render() {
		var notFound = this.state.notFound;
		var listCurrentMovies = this.state.currentMovies.map( (movie) => <List movie={movie}/> );

		var display = notFound ? <NotFound/> : (<ul className="movies">{listCurrentMovies}</ul>);

		return (
			<div className="main">
				<div className="header"> 
					<h2>MovieList</h2>
				</div>

				<Search findVideo={this.findVideo.bind(this)}/>

				{display}

			</div>
		)
	}
}

window.App = App;