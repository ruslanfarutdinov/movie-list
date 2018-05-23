var AddMovies = ({addMovie}) => (
	<div className="add-movies">
		<input type="text" placeholder="Add movie title here" id="add-movie"/>
		<button onClick={addMovie}>Add</button>
	</div>	
);


window.AddMovies = AddMovies;

	