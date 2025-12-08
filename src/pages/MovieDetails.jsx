import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import { dummyDateTimeData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import {
  CalendarIcon,
  ClockIcon,
  HeartIcon,
  PlayCircleIcon,
  StarIcon,
  MoveRight,
} from "lucide-react";
import PageNotFound from "../components/PageNotFound";
import Loading from "../components/Loading";
function MovieDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    setShow({
      movie: show,
      dateTime: dummyDateTimeData
    });
  }; 


  useEffect(() => {
    getShow();
  }, [id]);
  console.log(show);

  return show?.movie ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-24 overflow-hidden py:30 md:py-30 lg:py-30 xl:py-30">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        <img
          src={show?.movie?.poster_path}
          alt={show?.movie?.title}
          className="max-md:mx-auto rounded=xl h-104 max-w-96 object-cover"
        />
        <div className="flex flex-col gap-4">
          <BlurCircle bottom="300px" left="300px" />
          <p className=" text-sm font-medium text-red-500 uppercase border border-red-500 rounded-full px-2 py-1 w-fit">
            ENGLISH
          </p>
          <h1 className="text-4xl font-bold max-w-96 text-balance">
            {show?.movie?.title}
          </h1>
          <p className="text-gray-300 mt-2 text-sm leading-tight max-w-xl">
            {show?.movie?.overview}
          </p>
          <div className="flex items-center gap-2">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-300">
              {show?.movie?.vote_average.toFixed(1)} User Rating
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-yellow-500 " />
            <span className="text-sm text-gray-300">
              {Math.floor(show?.movie?.runtime / 60)}h{" "}
              {show?.movie?.runtime % 60}m
            </span>
            <span className="text-sm text-gray-300">|</span>
            <span className="text-sm text-gray-300">
              {show?.movie?.genres.map((genre) => genre.name).join(" , ")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-300">
              {show?.movie?.release_date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 flex items-center gap-2 text-sm bg-gray-800 text-white hover:bg-gray-700 transition rounded-full font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className="w-6 h-6 hover:fill-orange-600" />
              <span className="text-sm text-gray-300">Watch Trailer</span>
            </button>
            <a
              href={`#dateSelect`}
              className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95"
            >
              Buy Ticket
            </a>
            <button className="px-4 py-2 text-xl bg-transparent text-red-500 transition rounded-full font-medium cursor-pointer active:scale-95 ">
              <HeartIcon className="w-6 h-6 hover:fill-orange-600" />
            </button>
          </div>
        </div>
      </div>

      <p className="text-lg font-medium text-gray-300 mt-20">
        {" "}
        Your favourite cast
      </p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-6">
          {show?.movie?.casts.slice(0, 11).map((cast) => (
            <div key={cast.name} className="flex flex-col items-center gap-2">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-sm text-gray-300">{cast.name}</span>
            </div>
          ))}
        </div>
      </div>
      <DateSelect dateTime={show?.dateTime} id={show?.movie?._id} />
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between mt-20">
          <p className="text-lg font-medium text-gray-300 ">
            {" "}
            You May Also Like
          </p>
          <button  onClick={() => {navigate("/movies"), scrollTo(0,0)}} className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer">View All <MoveRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" /></button>{" "}
        </div>
        <MovieCard movie={dummyShowsData.slice(0, 4)} />
        <button onClick={() => {navigate("/movies"), scrollTo(0,0)}} className="px-4 py-2 mb-20 md:mb-20 lg:mb-2 xl:mb-2 text-sm bg-primary text-white hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95 w-fit mx-auto">Show More</button>
      </div>
    </div>
  ) : (
    <div className="px-6 md:px-16 lg:px-24 xl:px-24 overflow-hidden py-10">
      <PageNotFound />
      <Loading />
    </div>
  );
}

export default MovieDetails;
