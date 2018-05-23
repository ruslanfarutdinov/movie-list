var List = ({movie}) => {
  var button = movie.watched ? (<button className="toggle">Watched</button>) : (<button className="toggle">To Watch</button>); 
  return (
    <li>
      {movie.title}
      {button}
    </li>
  );

};

window.List = List;