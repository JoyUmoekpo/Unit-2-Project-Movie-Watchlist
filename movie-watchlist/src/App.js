import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import "./App.css";

function App() {
	const [watchList, setWatchList] = useState([]);
	const [movieList, setMovieList] = useState([]);
	const [page, setPage] = useState(1);

	const addMovie = (movie) => {
		setWatchList([...watchList, movie]);
	};

	const removeMovie = (movie) => {
		const newState = watchList.filter((mov) => {
			return mov !== movie;
		});
		setWatchList(newState);
	};

	const getData = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
			)
			.then((res) => {
				console.log(res.data.results);
				setMovieList(res.data.results);
			});
	};

	useEffect(() => {
		getData();
	}, [page]);

	return (
		<div className="App">
			<Header />
			<main>
				<MovieScreen
					addMovie={addMovie}
					movieList={movieList}
					page={page}
					setPage={setPage}
					list={watchList}
					removeMovie={removeMovie}
				/>
				<Watchlist list={watchList} removeMovie={removeMovie} />
			</main>
		</div>
	);
}

export default App;
