import React from "react";
import { dummyBookingData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import { CalendarIcon, ClockIcon, TicketIcon, CheckCircle2, XCircle } from "lucide-react";

function MyBookings() {
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
  };

  return (
    <div className="px-6 sm:px-12 md:px-12 lg:px-16 xl:px-20 2xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
          My Bookings
        </h1>

        {dummyBookingData.length === 0 ? (
          <div className="relative p-8 sm:p-12 md:p-16 bg-primary/10 border border-primary/20 rounded-xl text-center">
            <BlurCircle top="-100px" right="-100px" />
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              No bookings found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {dummyBookingData.map((booking, index) => {
              const { date, time } = formatDateTime(booking.show.showDateTime);
              return (
                <div
                  key={`${booking._id}-${index}`}
                  className="relative p-4 sm:p-5 md:p-6 bg-primary/10 border border-primary/20 rounded-xl hover:border-primary/40 transition-all duration-300"
                >
                  <BlurCircle top="-50px" right="-50px" />

                  <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-5">
                    <img
                      src={booking.show.movie.poster_path}
                      alt={booking.show.movie.title}
                      className="w-full sm:w-24 md:w-28 lg:w-32 h-48 sm:h-36 md:h-40 lg:h-44 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">
                          {booking.show.movie.title}
                        </h2>
                        <div className="flex items-center gap-2 mb-2">
                          {booking.isPaid ? (
                            <span className="flex items-center gap-1 text-xs sm:text-sm text-green-400">
                              <CheckCircle2 className="w-4 h-4" />
                              Paid
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400">
                              <XCircle className="w-4 h-4" />
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold">
                          ₹ {booking.amount}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 border-t border-gray-700 pt-3 sm:pt-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <CalendarIcon className="w-4 h-4 shrink-0" />
                      <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <ClockIcon className="w-4 h-4 shrink-0" />
                      <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <TicketIcon className="w-4 h-4 shrink-0" />
                      <span className="flex flex-wrap gap-1">
                        Seats:{" "}
                        <span className="text-primary font-semibold">
                          {booking.bookedSeats.join(", ")}
                        </span>
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Price per seat: ₹ {booking.show.showPrice}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
