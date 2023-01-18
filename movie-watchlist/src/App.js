
import Header from "./components/Header";

import "./App.css";

function App() {
  	const [movie, setMovie] = useState("");
	const [watchlist, setMovielist] = useState("");
	const [page, setPage] = useState("");

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
