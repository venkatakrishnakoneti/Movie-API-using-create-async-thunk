import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {fetchAsyncMovies,fetchAsyncShows} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  // dispatch create-async-thunk functions from movie slice
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
