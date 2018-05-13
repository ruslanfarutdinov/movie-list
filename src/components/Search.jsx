var Search = ({findVideo}) => (
	<nav className="search">
		<input type="text" placeholder="Search..." id="input"/>
		<button onClick={findVideo}>Go!</button>
	</nav>
);