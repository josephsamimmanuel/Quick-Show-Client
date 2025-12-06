import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function DateSelect({ dateTime, id }) {
  const dates = Object.keys(dateTime);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const handleDateClick = (date) => {
    setSelectedDate(date);
    toast.success("Date selected successfully");
  };

  const handleBookTicket = () => {
    if (!selectedDate) {
      return toast.error("Please select a date");
    } else {
      toast.success("Ticket booked successfully");
      navigate(`/movies/${id}/${selectedDate}`);
    }
  };

  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-xl max-w-7xl mx-auto">
        <BlurCircle top="-100px" right="-100px" />
        <div>
          <p className="text-lg font-semibold">Choose Date</p>

          <div className="flex items-center justify-between gap-6 text-sm mt-5">
            <div className="flex items-center gap-2">
              <ChevronLeftIcon width={28} className="cursor-pointer" />
              <span className="grid grid-col-3 md:flex flex-wrap md:max-w-lg gap-4">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => handleDateClick(date)}
                    className={`flex flex-col items-center gap-2 border border-red-500 rounded-xl px-4 py-2 cursor-pointer hover:text-white hover:bg-red-500 transition ${selectedDate === date ? "bg-red-500 text-white" : ""}`}
                  >
                    <span>{date}</span>
                    <CalendarIcon width={28} />
                  </button>
                ))}
              </span>
              <ChevronRightIcon width={28} className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleBookTicket} className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary-dull transition rounded-full font-medium cursor-pointer w-full">
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSelect;
