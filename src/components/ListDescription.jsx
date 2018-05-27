var ListDescription = ({movie}) => (
	<li>
		<p>Year: {movie.year}</p>	
		<p>{`Run Time: ${movie.runTime}`}</p>
		<p>Metascore: {movie.metascore}</p>
		<p>IMBD Rating: {movie.imdbRating}</p>
		<p>Watched: {movie.watched}</p>
	</li>
)

window.ListDescription = ListDescription;