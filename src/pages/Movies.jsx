import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";
function Movies() {
  return (
    <>
      {dummyShowsData.length > 0 ? (
        <div className="px-6 py-10 md:px-16 md:py-16 lg:px-24 lg:py-20 xl:px-20 xl:py-24 overflow-hidden">
          <BlurCircle top="0" right="-80px" />
          <BlurCircle bottom="0" left="-80px" />
          <h1 className="text-2xl font-bold text-gray-300">Now Showing</h1>
          <div className="mt-6">
            <MovieCard movie={dummyShowsData} />
          </div>
        </div>
      ) : (
        <div className="px-6 py-10 md:px-16 md:py-16 lg:px-24 lg:py-20 xl:px-20 xl:py-24 overflow-hidden">
          <h1 className="text-2xl font-bold text-gray-300">No movies found</h1>
        </div>
      )}
    </>
  );
}

export default Movies;
