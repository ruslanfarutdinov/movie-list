var Search = ({findVideo}) => (
	<nav className="search">
		<input type="text" placeholder="Search..." id="search-movies"/>
		<button onClick={findVideo}>Go!</button>
	</nav>	
);