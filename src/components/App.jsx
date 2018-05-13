var App = () => (
	<div className="main">
		<div className="header"> 
			<h2>MovieList</h2>
		</div>

		<ul className="movies">
			{ window.movies.map( (movie) => <List movie={movie}/> ) }			
		</ul>
	</div>
);

window.App = App;

