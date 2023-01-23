import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: + new Date().getMilliseconds(),

      title: "Avatar 1",

      rating: 4,

      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },

    {
      id: 2 + new Date().getMilliseconds(),

      title: "Kunfu panda",

      rating: 5 ,

      img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    },

    {
      id: 3 + new Date().getMilliseconds(),

      title: "Naruto Shipuden",

      rating: 5,

      img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    },

    {
      id: 4 + new Date().getMilliseconds(),

      title: "Hobbit",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    },
  ]);
  console.log([movies]);

  const NewMovieHandler = (data) => {
    const upDatedMovies = [...movies];
    upDatedMovies.push(data);
    setMovies(upDatedMovies);
  };
  function DeleteHandler(id) {
    setMovies(movies.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <Header NewMovieHandler={NewMovieHandler} />
      <Main movieList={movies} DeleteHandler={DeleteHandler} />
    </div>
  );
}

export default App;
