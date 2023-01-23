import React from "react";
import "./Main.css";
import MovieItem from "../movieItem/MovieItem";

const Main = ({ movieList, DeleteHandler }) => {
  return (
    <ul id="movie-list">
      {movieList.map((movie) => {
        return (
          <MovieItem
            id={movie.id}
            key={movie.id + Math.random()}
            DeleteHandler={DeleteHandler}
            img={movie.img}
            
            alt="tut bulo foto"
            title={movie.title}
            rating={movie.rating}
          />
        );
       
      })}
    </ul>
  );
};

export default Main;
