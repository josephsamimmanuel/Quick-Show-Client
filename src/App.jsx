import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";
import Favourite from "./pages/Favourite";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashbaord from "./pages/AdminDashbaord";
import AddShows from "./pages/AddShows";
import ListShows from "./pages/ListShows";
import ListBookings from "./pages/ListBookings";
import PageNotFound from "./components/PageNotFound";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        {!isAdminRoute && <Navbar />}
        <main className="grow">
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/movies/:id/:date" element={<SeatLayout />} />
            <Route path="/favourite" element={<Favourite />} />
            
            <Route path="/admin/dashboard" element={<AdminDashbaord />} />
            <Route path="/admin/add-shows" element={<AddShows />} />
            <Route path="/admin/list-shows" element={<ListShows />} />
            <Route path="/admin/list-bookings" element={<ListBookings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
