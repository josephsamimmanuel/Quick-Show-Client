import React from "react";
import { dummyDashboardData } from "../../assets/assets";
import BlurCircle from "../BlurCircle";
import { StarIcon } from "lucide-react";

function DashboardContent() {
  return (
    <div className="flex-1 min-w-0">
      {/* Dashboard Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
        <div className="relative p-4 sm:p-5 md:p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <BlurCircle top="-50px" right="-50px" />
          <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            Total Bookings
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {dummyDashboardData.totalBookings}
          </p>
        </div>
        <div className="relative p-4 sm:p-5 md:p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <BlurCircle top="-50px" right="-50px" />
          <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            Total Revenue
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            ₹ {dummyDashboardData.totalRevenue}
          </p>
        </div>
        <div className="relative p-4 sm:p-5 md:p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <BlurCircle top="-50px" right="-50px" />
          <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            Total Users
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {dummyDashboardData.totalUser}
          </p>
        </div>
        <div className="relative p-4 sm:p-5 md:p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <BlurCircle top="-50px" right="-50px" />
          <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            Active Shows
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {dummyDashboardData.activeShows.length}
          </p>
        </div>
      </div>

      {/* Active Movies Section */}
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
          Active Movies
        </h2>
        {dummyDashboardData.activeShows.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {dummyDashboardData.activeShows.map((show) => (
              <div
                key={show._id}
                className="flex flex-col gap-2 sm:gap-3 bg-primary/10 border border-primary/20 rounded-xl p-2 sm:p-3 md:p-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-full aspect-[2/3] overflow-hidden rounded-lg">
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
    </div>
  );
}

export default DashboardContent;
