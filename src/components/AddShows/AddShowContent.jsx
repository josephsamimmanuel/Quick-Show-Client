import React, { useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import { StarIcon, CalendarIcon } from "lucide-react";

function AddShowContent() {
  const [showPrice, setShowPrice] = useState({
    price: 0,
    dateTime: null,
  });
  const [addTime, setAddTime] = useState(false);
  const [selectedShows, setSelectedShows] = useState([]);

  console.log(selectedShows);

  const handleDateTimeChange = (e) => {
    setShowPrice({ ...showPrice, dateTime: e.target.value });
  };

  const handleCheckboxChange = (e, showId) => {
    if (e.target.checked) {
      setSelectedShows([...selectedShows, showId]);
    } else {
      setSelectedShows(selectedShows.filter((id) => id !== showId));
    }
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Dashboard Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
        Add Shows
      </h1>

      {/* Active Movies Section */}
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
          Now Playing Movies
        </h2>
        {dummyDashboardData.activeShows.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {dummyDashboardData.activeShows.map((show) => (
              <div
                key={show._id}
                className="flex flex-col gap-2 sm:gap-3 bg-primary/10 border border-primary/20 rounded-xl p-2 sm:p-3 md:p-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-full aspect-[2/3] overflow-hidden rounded-lg">
                <div >
                  <input type="checkbox" checked={selectedShows.includes(show._id)} onChange={(e) => handleCheckboxChange(e, show._id)} className="sm:w-4 sm:h-4 relative sm:top-0 sm:left-40 md:left-40 lg:left-40 xl:left-40 2xl:left-40" />
                </div>
                  <img
                    src={show.movie.poster_path}
                    alt={show.movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-white line-clamp-2">
                    {show.movie.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-primary font-bold">
                      ₹ {show.showPrice}
                    </p>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
                      <span className="text-xs sm:text-sm text-gray-400">
                        {show.movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 bg-primary/10 border border-primary/20 rounded-xl text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              No active movies
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-15">
        <div className="flex flex-col gap-2 sm:gap-3 bg-primary/10 border border-primary/20 rounded-xl p-2 sm:p-3 md:p-4 w-fit">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Show Price
          </p>
          <input
            type="number"
            value={showPrice.price}
            onChange={(e) =>
              setShowPrice({ ...showPrice, price: e.target.value })
            }
            className="p-2 sm:p-3 md:p-4 rounded-lg bg-transparent border border-primary/20 text-white"
            placeholder="Enter Show Price"
          />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Select Date and Time
          </p>
          <div className="flex items-center gap-2 relative">
            <input
              type="datetime-local"
              value={showPrice.dateTime}
              onChange={(e) => handleDateTimeChange(e)}
              className="p-2 sm:p-3 md:p-4 rounded-lg bg-transparent border border-primary/20 text-white"
              placeholder="Enter Date-Time"
            />
            <CalendarIcon className="w-15 h-15 sm:w-15 sm:h-15 text-white relative top-0 right-10" />
            <button
              onClick={() => setAddTime(true)}
              className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary-dull transition rounded-full font-medium cursor-pointer w-full"
            >
              Add Time
            </button>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 w-fit">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
              Select Date and Time
            </p>
            {addTime && (
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Date: {showPrice.dateTime.split("T")[0]}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  Time: {showPrice.dateTime.split("T")[1]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
            Add Show
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddShowContent;
