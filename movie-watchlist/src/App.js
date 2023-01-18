import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import "./App.css";

function App() {
	const [movie, setMovie] = useState([]);
	const [watchlist, setMovieList] = useState([]);
	const [page, setPage] = useState(1);

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
		</div>
	);
}

export default App;
