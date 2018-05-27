var List = ({movie, toggleButton, clickMovie}) => {
  var button;
  if (movie.watched) {
    button = (<button className="toggle" onClick={toggleButton.bind(null, movie)}>Watched</button>);
  } else {
    button = (<button className="toggle" onClick={toggleButton.bind(null, movie)}>To Watch</button>);
  }
 
  return (
    <li onClick={clickMovie}>
      {movie.title}
      {button}
    </li>
  );
};

window.List = List;