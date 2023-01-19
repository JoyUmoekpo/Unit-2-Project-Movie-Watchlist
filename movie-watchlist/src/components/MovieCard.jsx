import React from "react";

const MovieCard = (props) => {
  const {movie, addMovie} = props;

	return (
		<div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
        <h3>{movie.original_title}</h3>
      </div>
      <button onClick={() => addMovie(movie)}>Add to List</button>
    </div>
	);
};

export default MovieCard;