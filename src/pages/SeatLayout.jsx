import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import { dummyDateTimeData } from "../assets/assets";
import PageNotFound from "../components/PageNotFound";
import { ClockIcon, MoveRight, LaptopMinimal } from "lucide-react";
import BlurCircle from "../components/BlurCircle";
import toast from "react-hot-toast";
import DialogBox from "../components/DialogBox";

function SeatLayout() {
  const { id, date } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const loadShow = async () => {
    const foundShow = await dummyShowsData.find((show) => show._id === id);
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    loadShow();
  }, [id, date, navigate]);

  if (!show?.movie) {
    return <PageNotFound />;
  }

  // Seat Grid
  const seatGrid = [
    { row: "A", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { row: "B", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { row: "", seatNo: [] },
    { row: "C", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "D", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "", seatNo: [] },
    { row: "E", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "F", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "G", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "", seatNo: [] },
    { row: "H", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "I", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "J", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { row: "K", seatNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 10, 11, 12, 13, 14, 15, 16, 17, 18] },
  ].map((row) => ({
    ...row,
    seats: row.seatNo.map((num) => `${row.row}${num}`),
  }));

  const seatsAvailable = seatGrid.reduce((acc, row) => {
    // return acc + row.seats.filter((seat) => !seat.includes('X') && !selectedSeats.includes(seat) && !occupiedSeats.includes(seat)).length;
    return acc + row.seats.filter((seat) => !seat.includes('X') && !selectedSeats.includes(seat)).length;
  }, 0);

  console.log(seatGrid);

  const handleDialogFunction = () => {
    if(selectedTime === null) {
      return toast.error("Please select a time slot");
    }
    if(selectedSeats.length === 0) {
      return toast.error("Please select at least one seat");
    }
    navigate(`/payment/${id}/${date}/${selectedTime}`);
    toast.success("Proceeding to payment");
  };

  const handleProceedToPayment = () => {
    if(selectedSeats.length > 0 && selectedTime !== null) {  
      setIsDialogOpen(true);
    } else {
      return toast.error("Please select at least one seat");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 lg:py-36 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      {/* Available Timings Section */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-auto lg:min-w-[280px] xl:min-w-[320px]">
        <div className="relative p-4 sm:p-6 md:p-8 bg-primary/10 border border-primary/20 rounded-xl">
          <BlurCircle top="-100px" right="-50px" />
          <p className="text-base sm:text-lg md:text-xl font-bold text-center mb-4 sm:mb-5 md:mb-6 text-white">
            Available Timings
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
          <p className="text-sm sm:text-base text-white font-semibold text-center pb-2 border-b border-gray-700">{date}</p>

            {show?.dateTime?.[date]?.map((time) => (
              <div
                key={time.time}
                onClick={() => setSelectedTime(time.time)}
                className={`cursor-pointer transition-colors duration-200 p-2 sm:p-3 rounded-lg hover:bg-primary/20 ${
                  selectedTime === time.time
                    ? "text-primary bg-primary/30"
                    : "text-gray-300"
                }`}
              >
                <p className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {new Date(time.time).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seat Layout Section */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
          <p className="text-base sm:text-lg md:text-xl font-bold text-white">
            Select Your Seats
          </p>
          {selectedSeats.length > 0 && (
            <p className="text-sm sm:text-base text-red-400 font-semibold border border-red-400 rounded-full px-2 py-1">
              {selectedSeats.length} seat{selectedSeats.length > 1 ? "s" : ""}{" "}
              selected
            </p>
          )}
        </div>

        {/* Seat Grid */}
        <div className="p-4 sm:p-6 md:p-8 bg-gray-900/50 rounded-xl border border-gray-700 overflow-x-auto">
          {/* Screen indicator */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="inline-block px-8 sm:px-12 md:px-16 lg:px-20 py-2  rounded-t-lg">
              <p className="text-xs sm:text-sm md:text-base  font-semibold flex items-center justify-center gap-2">SCREEN VIEW <LaptopMinimal className="w-6 h-6" /></p>
              <p className="text-xs sm:text-sm md:text-base  font-semibold flex items-center justify-center gap-2">Seats Available: {seatsAvailable}</p>
            </div>
          </div>
          
          {/* Seat rows */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
            {seatGrid.map((row) => (
              <div key={row.row} className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full">
                {/* Row label */}
                <div className="shrink-0 w-6 sm:w-8 md:w-10 flex items-center justify-center">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-400">
                    {row.row}
                  </p>
                </div>
                
                {/* Seats in row */}
                {/*  */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 justify-center flex-1">
                  {row.seats.map((seat) => {
                    const isSelected = selectedSeats.includes(seat);
                    const handleSeatClick = () => {
                      if(selectedTime === null) {
                        return toast.error("Please select a time slot first");
                      }
                      if (isSelected) {
                        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
                      } else {
                        setSelectedSeats([...selectedSeats, seat]);
                      }
                    };
                    
                    return (
                      seat.includes('X') ? (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"></div>
                      ) : (
                      <button
                        key={seat}
                        onClick={handleSeatClick}
                        className={`
                          w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7
                          border-2 rounded-md
                          transition-all duration-200
                          flex items-center justify-center
                          text-[8px] sm:text-[10px] md:text-xs font-semibold
                          ${
                            isSelected
                              ? "bg-primary border-primary text-white"
                              : " border-primary text-gray-400 hover:border-gray-600 hover:bg-gray-800"
                          }
                        `}
                        title={seat}
                      >
                        {seat.replace(row.row, "")}
                      </button>
                    ))
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-primary bg-primary/20 rounded-md"></div>
              <span className="text-xs sm:text-sm text-gray-400">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-primary bg-primary rounded-md"></div>
              <span className="text-xs sm:text-sm text-gray-400">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-gray-600 bg-gray-800 rounded-md"></div>
              <span className="text-xs sm:text-sm text-gray-400">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Selected Seat numbers */}
              {/* When selected seats is Zero return " " */}
              <p className={`text-xs sm:text-sm`}>{selectedSeats.length === 0 ? " " : selectedSeats.length > 1 ? "Seats Selected: " : "Seat Selected: "}</p>
              {selectedSeats.length > 0 ? (
                selectedSeats.map((seat, index) => (
                  <div key={seat} className="text-xs sm:text-sm">
                    <span className="text-xs sm:text-sm font-semibold">{seat.replace(seat.row, "")}{index < selectedSeats.length - 1 ? ", " : ""}</span>
                  </div>
                ))
              ) : (
                null
              )}
            </div>
          </div>

        </div>
        <button onClick={handleProceedToPayment} className="w-fit mx-auto bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2">Proceed to Payment <MoveRight className="w-4 h-4" /></button>
      </div>
      <DialogBox 
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleDialogFunction={handleDialogFunction}
        title="Proceed to Payment"
        description="Your seats and time slot are locked. Continue to payment to finalize your booking."
        buttonText="Proceed to Payment"
        buttonText2="Cancel"
      />
    </div>
  );
}

export default SeatLayout;
