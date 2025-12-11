import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketIcon, XIcon } from "lucide-react";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchToken = async () => {
      if (isSignedIn) {
        const token = await getToken();
        sessionStorage.setItem("token", token);
      }
    };
  
    fetchToken();
  }, [isSignedIn]);
  
  
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center px-6 md:px-10 lg:px-20 py-4">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-grey-300/20 overflow-hidden transition-[width] duration-300 ${isMenuOpen ? "w-full" : "w-0"} lg:w-auto`}
      >
        <XIcon
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden absolute max-md:top-6 right-6 w-6 h-6 text-white cursor-pointer "
        />
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false)}} to="/" className={location.pathname === "/" ? "text-primary font-bold text-lg" : ""}>Home</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false)}} to="/movies" className={location.pathname === "/movies" ? "text-primary font-bold text-lg" : ""}>Movies</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false)}} to="/movies/:id" className={location.pathname === "/movies/:id" ? "text-primary font-bold text-lg" : ""}>Theaters</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false)}} to="/movies/:id/:date" className={location.pathname === "/movies/:id/:date" ? "text-primary font-bold text-lg" : ""}>Releases</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false)}} to="/favourite" className={location.pathname === "/favourite" ? "text-primary font-bold text-lg" : ""}>Favourite</Link>
      </div>

      <div className="flex items-center gap-4">
        <SearchIcon className="max-md:ml-4 w-8 h-8 text-white cursor-pointer" />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="My Bookings" labelIcon= { <TicketIcon className="w-4 h-4" /> } onClick={() => navigate("/my-bookings")} />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button onClick={() => openSignIn()} className="max-md:hidden bg-primary text-white px-4 py-2 rounded-md">
            Login
          </button>
        )}
      </div>
      <MenuIcon
        onClick={() => setIsMenuOpen(true)}
        className="max-md:ml-4 md:hidden w-8 h-8 text-white cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
