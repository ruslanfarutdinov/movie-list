var Search = ({findVideo}) => (
	<div className="search">
    <button className="search-row" id="watched">Watched</button>
    <button className="search-row" id="to-watch">To Watch</button>
		<input className="search-row" type="text" placeholder="Search..." id="search-movies"/>
		<button className="search-row" onClick={findVideo}>Go!</button>
	</div>	
);