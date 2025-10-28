import { FaRegEnvelope } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLanguage, IoSearchOutline, IoChevronDown } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import logoImg from "../assets/images/default.png";
import { useState, useRef } from "react";
type User = {
  name: string;
  image: string;
};




function NavBar({ user }: { user?: User }) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Use number for setTimeout in browser
  const dropdownTimeout = useRef<number | null>(null);
  return (
    <nav className="w-full bg-white shadow-sm z-50">
      {/* Topbar */}
      <div className="w-full bg-[#F7F7F7] border-b border-[#EEEEEE] text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@example.com"
              className="flex items-center gap-2 text-[#232323] hover:text-[#01AA85] transition"
            >
              <FaRegEnvelope className="w-4 h-4" /> info@example.com
            </a>
            <span className="flex items-center gap-2 text-[#232323]">
              <RiCustomerService2Fill className="w-4 h-4" /> Customer support
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#01AA85] transition">
              How To Bid
            </a>
            <a href="#" className="hover:text-[#01AA85] transition">
              How To Sell
            </a>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoImg} alt="Logo" className="h-20 w-auto" />
          </a>
          {/* Hamburger for mobile */}
          <button
            className="lg:hidden ml-2 p-2"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <span className="block w-6 h-0.5 bg-[#232323] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#232323] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#232323]"></span>
          </button>
          {/* Nav Links */}
          <ul
            className={`font-semibold text-[15px] text-[#232323] lg:flex items-center gap-7 hidden lg:static lg:bg-transparent lg:p-0 lg:w-auto w-full bg-white p-6 absolute left-0 top-full z-40 transition-all duration-500 ${
              mobileNavOpen ? "block" : "hidden"
            }`}
          >
            {/* Home Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "home") {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown("home");
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "home") {
                  dropdownTimeout.current = setTimeout(
                    () => setOpenDropdown(null),
                    600
                  );
                }
              }}
            >
              <button
                className="flex items-center gap-1 hover:text-[#01AA85] transition focus:outline-none w-full"
                onClick={() => {
                  if (window.innerWidth < 1024)
                    setOpenDropdown(openDropdown === "home" ? null : "home");
                }}
                type="button"
              >
                Home <IoChevronDown className="text-xs" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white border border-[#E6E6E6] rounded-md shadow-lg z-50 transition-all duration-700 ease-in-out overflow-hidden  hover:text-[#01AA85] transition${
                  openDropdown === "home"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                } group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    if (dropdownTimeout.current)
                      clearTimeout(dropdownTimeout.current);
                    setOpenDropdown("home");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    dropdownTimeout.current = setTimeout(
                      () => setOpenDropdown(null),
                      600
                    );
                  }
                }}
              >
               
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Multipurpose 01
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Antiques Auction
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Art Auction
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Gadget & Technology
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Book & Comic
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Multipurpose 02
                </a>
              </div>
            </li>
            {/* Auctions Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "auctions") {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown("auctions");
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "auctions") {
                  dropdownTimeout.current = setTimeout(
                    () => setOpenDropdown(null),
                    600
                  );
                }
              }}
            >
              <button
                className="flex items-center gap-1 hover:text-[#01AA85] transition focus:outline-none w-full"
                onClick={() => {
                  if (window.innerWidth < 1024)
                    setOpenDropdown(
                      openDropdown === "auctions" ? null : "auctions"
                    );
                }}
                type="button"
              >
                Auctions <IoChevronDown className="text-xs" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white border border-[#E6E6E6] rounded-md shadow-lg z-50 transition-all duration-700 ease-in-out overflow-hidden ${
                  openDropdown === "auctions"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                } group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    if (dropdownTimeout.current)
                      clearTimeout(dropdownTimeout.current);
                    setOpenDropdown("auctions");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    dropdownTimeout.current = setTimeout(
                      () => setOpenDropdown(null),
                      100
                    );
                  }
                }}
              >
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Live Auctions
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Upcoming Auctions
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Past Auctions
                </a>
              </div>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "blog") {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown("blog");
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "blog") {
                  dropdownTimeout.current = setTimeout(
                    () => setOpenDropdown(null),
                    600
                  );
                }
              }}
            >
              <button
                className="flex items-center gap-1 hover:text-[#01AA85] transition focus:outline-none w-full"
                onClick={() => {
                  if (window.innerWidth < 1024)
                    setOpenDropdown(openDropdown === "blog" ? null : "blog");
                }}
                type="button"
              >
                Blog <IoChevronDown className="text-xs" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white border border-[#E6E6E6] rounded-md shadow-lg z-50 transition-all duration-700 ease-in-out overflow-hidden ${
                  openDropdown === "blog"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                } group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    if (dropdownTimeout.current)
                      clearTimeout(dropdownTimeout.current);
                    setOpenDropdown("blog");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    dropdownTimeout.current = setTimeout(
                      () => setOpenDropdown(null),
                      600
                    );
                  }
                }}
              >
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  News
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Tips & Guides
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Market Insights
                </a>
              </div>
            </li>

            <li
              className="relative group"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "pages") {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown("pages");
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024 && openDropdown !== "pages") {
                  dropdownTimeout.current = setTimeout(
                    () => setOpenDropdown(null),
                    600
                  );
                }
              }}
            >
              <button
                className="flex items-center gap-1 hover:text-[#01AA85] transition focus:outline-none w-full"
                onClick={() => {
                  if (window.innerWidth < 1024)
                    setOpenDropdown(openDropdown === "pages" ? null : "pages");
                }}
                type="button"
              >
                Pages <IoChevronDown className="text-xs" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white border border-[#E6E6E6] rounded-md shadow-lg z-50 transition-all duration-700 ease-in-out overflow-hidden ${
                  openDropdown === "pages"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                } group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    if (dropdownTimeout.current)
                      clearTimeout(dropdownTimeout.current);
                    setOpenDropdown("pages");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    dropdownTimeout.current = setTimeout(
                      () => setOpenDropdown(null),
                      600
                    );
                  }
                }}
              >
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block p-2 text-sm text-[#232323] hover:text-[#01AA85] hover:bg-[#F7F7F7] transition"
                >
                  Support Center
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="hover:text-[#01AA85] transition">
                Contact
              </a>
            </li>
          </ul>
          {/* Search, Language, Account */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-[#E6E6E6] rounded-l-md h-10 pl-4 pr-2 bg-white text-[#23291FBB] text-sm outline-none w-36 focus:border-[#01AA85] transition"
              />
              <button
                type="submit"
                className="bg-black h-10 px-3 rounded-r-md flex items-center justify-center text-white transition hover:bg-[#01AA85] absolute right-0 top-0"
              >
                <IoSearchOutline />
              </button>
            </form>
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md border border-[#E6E6E6] bg-white text-sm font-semibold hover:bg-[#F7F7F7] transition"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                type="button"
              >
                <IoLanguage className="text-lg" />
                <span>EN</span>
              </button>
              <ul
                className={`absolute right-0 mt-2 w-32 bg-white border border-[#E6E6E6] rounded-md shadow-lg z-50 transition-all duration-150 ${
                  isLanguageOpen ? "block" : "hidden"
                }`}
              >
                {[
                  "English",
                  "Deutsch",
                  "Svenska",
                  "اردو",
                  "عربي",
                  "Nederlands",
                ].map((lang) => (
                  <li key={lang}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#232323] hover:bg-[#F7F7F7] transition"
                    >
                      {lang}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Account Button */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#01AA85] text-white font-semibold hover:bg-[#018e6f] transition"
            >
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-lg" />
              )}
              {user?.name ? user.name : "My Account"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
