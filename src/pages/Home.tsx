import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { FaStar, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import bannerImg1 from "../assets/images/home2-banner-img1.jpg";
import bannerImg2 from "../assets/images/home2-banner-img2.jpg";
import bannerImg3 from "../assets/images/home2-banner-img4.jpg";
import mercedes from "../assets/images/mercedes-logo.svg";
import hyundai from "../assets/images/hyundai-logo.svg";
import honda from "../assets/images/honda-logo.svg";
import toyota from "../assets/images/toyota-logo.svg";
import rangerover from "../assets/images/land-rover-logo.svg";
import tesla from "../assets/images/tesla-logo.svg";
import nissan from "../assets/images/nissan-logo.svg";
import bmw from "../assets/images/bmw-logo.svg";
import chevrolet from "../assets/images/chevrolet-logo.svg";
import ford from "../assets/images/ford-logo.svg";
import ferari from "../assets/images/ferrari-logo.svg";
import lambo from "../assets/images/lambor-logo.svg";
import AuctionCardImage from "../props/AuctionProps";

const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

const marqueeMessages = [
  "Welcome to InnovateTech Solutions",
  "We thrive on creativity",
  "Your satisfaction is our priority",
  "We believe in the power of collaboration",
  "We invite you to join us on this exciting",
];

const carBrands = [
  { name: "Mercedes", img: mercedes },
  { name: "Hyundai", img: hyundai },
  { name: "Honda", img: honda },
  { name: "Toyota", img: toyota },
  { name: "Range Rover", img: rangerover },
  { name: "Tesla", img: tesla },
  { name: "Nissan", img: nissan },
  { name: "BMW", img: bmw },
  { name: "Chevrolet", img: chevrolet },
  { name: "Ford", img: ford },
  { name: "Ferrari", img: ferari },
  { name: "Lamborghini", img: lambo },
];

const auctionImages = [
  { img: mercedes },
  { img: hyundai },
  { img: honda },
  { img: toyota },
  { img: rangerover },
  { img: tesla },
  { img: nissan },
  { img: bmw },
  { img: chevrolet },
  { img: ford },
  { img: ferari },
  { img: lambo },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const visibleBrands = 5; // Number of brands to show in carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <NavBar />
      {/* Featured auction sample using AuctionCardImage prop component */}
      {/* import the component at top and pass demo props */}
      <div
        className="w-full relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${bannerImages[current]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Select our product at our auction
          </h1>
          <div className="flex gap-4 justify-center">
            <a
              href="/start-bid"
              className="bg-[#01AA85] hover:bg-[#018e6f] text-white font-semibold px-8 py-3 rounded-full text-lg transition shadow-lg"
            >
              Start a Bid
            </a>
            <a
              href="/auctions"
              className="bg-white hover:bg-[#F7F7F7] text-[#01AA85] font-semibold px-8 py-3 rounded-full text-lg transition shadow-lg border border-[#01AA85]"
            >
              View All Auction
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#181A20] py-4 overflow-hidden border-t border-b border-[#23262F]">
        <div className="relative w-full overflow-hidden">
          <Marquee gradient={false} speed={40} pauseOnHover={false}>
            {marqueeMessages.map((msg, idx) => (
              <span
                key={idx}
                className="flex items-center gap-3 text-white text-base md:text-lg font-medium px-4 py-2 rounded transition-colors duration-300 user-select-none"
              >
                <FaStar className="text-[#FFD700] text-lg md:text-xl" /> {msg}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="bg-[#FBF8EE] py-[80px] mb-[80px]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex items-center justify-between mb-[40px]">
            <div className="flex gap-[10px]">
              <h2 className="text-black font-bold text-[40px] md:text-[45px] leading-[1.2] mb-2 font-sans">
                Explore
              </h2>
              <span className="text-[#23291FBB] italic text-[32px] md:text-[40px] font-serif">
                Category
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="w-[45px] h-[45px] border border-[#23262F] rounded-full flex items-center justify-center bg-white hover:bg-[#01AA85] hover:border-[#01AA85] transition duration-300 group"
                aria-label="Previous"
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0
                      ? carBrands.length - visibleBrands
                      : prev - visibleBrands
                  )
                }
              >
                <FaAngleDoubleLeft className="text-black group-hover:text-white text-xl transition duration-300" />
              </button>
              <button
                className="w-[45px] h-[45px] border border-[#23262F] rounded-full flex items-center justify-center bg-white hover:bg-[#01AA85] hover:border-[#01AA85] transition duration-300 group"
                aria-label="Next"
                onClick={() =>
                  setCurrent((prev) =>
                    prev + visibleBrands >= carBrands.length
                      ? 0
                      : prev + visibleBrands
                  )
                }
              >
                <FaAngleDoubleRight className="text-black group-hover:text-white text-xl transition duration-300" />
              </button>
            </div>
          </div>
          {/* Carousel for car brands */}
          <div className="relative overflow-hidden">
            <div
              className="w-full flex justify-center gap-6"
              style={{
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                transform: `translateX(-${current * 180}px)`,
                minWidth: `${carBrands.length * 180}px`,
              }}
            >
              {carBrands.map((brand, idx) => (
                <div
                  key={brand.name}
                  className="bg-white rounded-[10px] py-[30px] px-[30px] flex flex-col items-center shadow hover:shadow-lg transition duration-500 w-[160px] mb-6"
                  style={{
                    opacity:
                      idx >= current && idx < current + visibleBrands ? 1 : 0.4,
                    transform: idx === current ? "scale(1.05)" : "scale(1)",
                    transition: "opacity 1.2s, transform 1.2s",
                  }}
                >
                  <div className="flex items-center justify-center h-[60px]">
                    <img
                      src={brand.img}
                      alt={`${brand.name} logo`}
                      className="max-h-[60px] object-contain"
                    />
                  </div>
                  <h3 className="text-center text-[18px] font-bold mt-4 text-[#232323]">
                    {brand.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <a
            href="#"
            className="relative inline-flex items-center px-0 py-0 text-[#01AA85] font-semibold text-lg group transition duration-300"
            style={{
              background: "none",
              boxShadow: "none",
              letterSpacing: "0.02em",
            }}
          >
            View All Category
            <span className="ml-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7 5l5 5-5 5"
                  stroke="#01AA85"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between mb-[40px]">
          <div className="flex gap-[10px]">
            <h2 className="text-black font-bold text-[40px] md:text-[45px] leading-[1.2] mb-2 font-sans">
              Latest
            </h2>
            <span className="text-[#23291FBB] italic text-[32px] md:text-[40px] font-serif">
              Auction
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="w-[45px] h-[45px] border border-[#23262F] rounded-full flex items-center justify-center bg-white hover:bg-[#01AA85] hover:border-[#01AA85] transition duration-300 group"
              aria-label="Previous"
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0
                    ? carBrands.length - visibleBrands
                    : prev - visibleBrands
                )
              }
            >
              <FaAngleDoubleLeft className="text-black group-hover:text-white text-xl transition duration-300" />
            </button>
            <button
              className="w-[45px] h-[45px] border border-[#23262F] rounded-full flex items-center justify-center bg-white hover:bg-[#01AA85] hover:border-[#01AA85] transition duration-300 group"
              aria-label="Next"
              onClick={() =>
                setCurrent((prev) =>
                  prev + visibleBrands >= carBrands.length
                    ? 0
                    : prev + visibleBrands
                )
              }
            >
              <FaAngleDoubleRight className="text-black group-hover:text-white text-xl transition duration-300" />
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-8">
          {auctionImages.map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" key={index}>
              <div className="md:col-span-1">
                <AuctionCardImage
                  imageUrl={item.img}
                  isLive={true}
                  endDate={new Date(
                    Date.now() + 1000 * 60 * 60 * 24
                  ).toISOString()}
                  onFavoriteClick={() => console.log("favorite clicked")}
                  onViewClick={() => console.log("view clicked")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
