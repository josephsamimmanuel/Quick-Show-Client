import { StarIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
      {movie.map((movie) => (
        <div
          key={movie?._id}
          className="flex flex-col justify-between p-3 sm:p-4 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-full h-auto min-h-auto sm:min-h-auto md:min-h-auto lg:min-h-auto"
        >
          <img
            onClick={() => {
              navigate(`/movies/${movie?._id}`);
              scrollTo(0, 0);
            }}
            src={movie?.backdrop_path}
            alt={movie?.title}
            className="rounded-lg h-40 sm:h-44 md:h-48 lg:h-52 w-full object-cover object-bottom-right cursor-pointer"
          />
          <div className="flex flex-col gap-2 grow">
            <h3
              onClick={() => {
                navigate(`/movies/${movie?._id}`);
                scrollTo(0, 0);
              }}
              className="font-semibold mt-2 sm:mt-3 truncate text-sm sm:text-base cursor-pointer hover:text-primary transition"
            >
              {movie?.title}
            </h3>
            <div className="flex items-center justify-between gap-1">
            <p
              onClick={() => {
                navigate(`/movies/${movie?._id}`);
                scrollTo(0, 0);
              }}
              className="text-xs max-w-[30px] sm:text-xs text-gray-400 cursor-pointer"
            >
              {`${new Date(movie?.release_date).getFullYear()}`}
            </p>
            <p className="text-xs max-w-[150px] sm:text-xs text-gray-400 cursor-pointer">{movie?.genres.map((genre) => genre.name).join(" , ")}</p>
            <p className="text-xs max-w-[50px] sm:text-xs text-gray-400 cursor-pointer">{Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}m</p>
            </div>
            <div className="flex items-center justify-between pt-3 sm:pt-4 pb-2">
              <button
                onClick={() => {
                  navigate(`/movies/${movie?._id}`);
                  scrollTo(0, 0);
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
              >
                Buy Ticket
              </button>
              <div className="flex items-center gap-1">
                <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
                <span className="text-xs sm:text-sm">{movie?.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
