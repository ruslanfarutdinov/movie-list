var Search = ({findVideo, showWatchedOrToWatch, showAllMovies}) => (
	<div className="search">
		<button className="search-row" onClick={showAllMovies}>All Movies</button>
    <button className="search-row" id="watched" onClick={showWatchedOrToWatch}>Watched</button>
    <button className="search-row" id="to-watch" onClick={showWatchedOrToWatch}>To Watch</button>
		<input className="search-row" type="text" placeholder="Search..." id="search-movies"/>
		<button className="search-row" onClick={findVideo}>Go!</button>
	</div>	
);