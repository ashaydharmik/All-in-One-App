import React, { useCallback, useEffect, useState } from "react";
import "./movie.scss";
import logo from "../assets/logo.png";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const genreInfo = [
    {
      name: "Action",
      genreId: 28,
    },
    {
      name: "Drama",
      genreId: 18,
    },
    {
      name: "Romance",
      genreId: 10749,
    },
    {
      name: "Thriller",
      genreId: 53,
    },
    {
      name: "Western",
      genreId: 37,
    },
    {
      name: "Horror",
      genreId: 27,
    },
    {
      name: "Fantasy",
      genreId: 14,
    },
    {
      name: "Music",
      genreId: 10402,
    },
    {
      name: "Fiction",
      genreId: 878,
    },
  ];

  const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}`;

  const getGenreId = useCallback((genreName) => {
    const selectedGenre = genreInfo.find((genre) => genre.name === genreName);
    return selectedGenre ? selectedGenre.genreId : null;
  })
  
  const handleLogo=()=>{
    navigate("/news")
  }

  useEffect(() => {
    const selectedGenreNames = JSON.parse(localStorage.getItem("MovieDetails"));

    if (selectedGenreNames) {
      const selectedGenreIds = selectedGenreNames.map((name) =>
        getGenreId(name)
      );

      const promises = selectedGenreIds.map((genreId) => {
        const MOVIE_URL_WITH_GENRE = `${MOVIE_URL}&with_genres=${genreId}`;
        return axios.get(MOVIE_URL_WITH_GENRE);
      });

      Promise.all(promises)
        .then((responses) => {
          const genreData = responses.map((res, index) => ({
            genreName: selectedGenreNames[index],
            movies: res.data.results.slice(0, 4),
          }));
          setData(genreData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [MOVIE_URL]);

  return (
    <div className="movie-container">
      <div className="heading">
        <h1>Super app</h1>
        <img src={logo} alt="" onClick={handleLogo}/>
      </div>
      <div className="desc">
        <p>Entertainment according to your choice</p>
      </div>
      <div className="movie-list">
        {data.map((genreInfo, index) => (
          <div key={index} className="movie-title">
            <p>{genreInfo.genreName}</p>
            <div className="movies">
              {genreInfo.movies.map((movie, movieIndex) => (
                <img
                  key={movieIndex}
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
