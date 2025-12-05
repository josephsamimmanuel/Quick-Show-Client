import React from "react";
import {
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FlowbiteFooter container className="bg-gray-900">
      <div className="w-full">
        <div className="w-full flex flex-row items-center justify-between sm:flex-row flex-wrap gap-6 sm:gap-8 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6 sm:py-8 md:py-10 lg:py-12">

          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
            <FooterBrand
              href="/"
              src={assets.logo}
              alt="QuickShow Logo"
              className="mb-3 sm:mb-4"
            />
            <p className="mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
              Your ultimate destination for movie tickets. Book your favorite
              movies and enjoy the best cinematic experience.
            </p>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <FooterTitle title="Quick Links" />
            </div>
            <FooterLinkGroup col>
              <FooterLink
                as={Link}
                to="/"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                Home
              </FooterLink>
              <FooterLink
                as={Link}
                to="/movies"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                Movies
              </FooterLink>
              <FooterLink
                as={Link}
                to="/my-bookings"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                My Bookings
              </FooterLink>
              <FooterLink
                as={Link}
                to="/favourite"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                Favourites
              </FooterLink>
            </FooterLinkGroup>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <FooterTitle title="Legal" />
            </div>
            <FooterLinkGroup col>
              <FooterLink
                href="#"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                Privacy Policy
              </FooterLink>
              <FooterLink
                href="#"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                Terms &amp; Conditions
              </FooterLink>
              <FooterLink
                href="#"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                About Us
              </FooterLink>
              <FooterLink
                href="#"
                className="text-xs sm:text-sm md:text-base hover:text-primary transition-colors"
              >
                Contact
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="my-4 sm:my-6 md:my-8" />

        {/* Copyright and Social Icons */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-4 sm:py-5 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="text-xs sm:text-sm md:text-base text-gray-400 text-center sm:text-left">
            <FooterCopyright href="/" by="QuickShow™" year={currentYear} />
          </div>
          <div className="flex space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8 justify-center sm:justify-start">
            <a
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-400 hover:text-primary transition-colors"
            >
              <Facebook className="w-full h-full" />
            </a>
            <a
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram className="w-full h-full" />
            </a>
            <a
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter className="w-full h-full" />
            </a>
            <a
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}

export default Footer;
