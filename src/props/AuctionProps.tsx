import React from "react";

export interface AuctionCardImageProps {
  imageUrl: string;
  isLive?: boolean;
  endDate: string;
  onFavoriteClick?: () => void;
  onViewClick?: () => void;
  currentBid?: number | string;
  onBidNow?: () => void;
}

const AuctionCardImage: React.FC<AuctionCardImageProps> = ({
  imageUrl,
  isLive = true,
  endDate,
  onFavoriteClick,
  onViewClick,
  currentBid,
  onBidNow,
}) => {
  return (
    <div className="w-full border-2 border-gray-200 hover:border-gray-300 rounded-lg">
      <div className="relative overflow-hidden rounded-lg bg-white  transition-all shadow-sm hover:shadow-md">
        {/* Main Image */}
        <a href="/auction-details" className="block">
          <img
            src={imageUrl}
            alt="Auction Item"
            className="w-fit h-64 object-cover"
            loading="lazy"
          />
        </a>

        {/* Live Badge */}
        {isLive && (
          <div className="absolute top-4 left-4">
            <span className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Live
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={onFavoriteClick}
            aria-label="Add to favorites"
            className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm hover:shadow-md"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 16 15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onViewClick}
            aria-label="View item"
            className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm hover:shadow-md"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 11"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8.5 0C4.63636 0 1.33727 2.62255 0 6.36364C1.33727 10.1047 4.63636 12.7273 8.5 12.7273C12.3636 12.7273 15.6627 10.1047 17 6.36364C15.6627 2.62255 12.3636 0 8.5 0ZM8.5 10.6061C6.36727 10.6061 4.63636 8.87518 4.63636 6.74245C4.63636 4.60973 6.36727 2.87882 8.5 2.87882C10.6327 2.87882 12.3636 4.60973 12.3636 6.74245C12.3636 8.87518 10.6327 10.6061 8.5 10.6061Z" />
            </svg>
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-2 shadow-sm">
          <div className="flex justify-center gap-2 text-sm font-bold">
            <div className="text-center">
              <span className="block text-lg">00</span>
              <span className="text-gray-600">Days</span>
            </div>
            <span className="text-lg">:</span>
            <div className="text-center">
              <span className="block text-lg">00</span>
              <span className="text-gray-600">Hours</span>
            </div>
            <span className="text-lg">:</span>
            <div className="text-center">
              <span className="block text-lg">00</span>
              <span className="text-gray-600">Min</span>
            </div>
            <span className="text-lg">:</span>
            <div className="text-center">
              <span className="block text-lg">00</span>
              <span className="text-gray-600">Sec</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Eclipse cars redefining thus road ahead auction.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">Current Bid at:</p>
            <p className="text-xl font-bold text-black">
              {typeof currentBid === "number"
                ? `$${currentBid.toLocaleString()}`
                : currentBid ?? "$0"}
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={onBidNow}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition font-bold shadow-sm hover:shadow-md"
            >
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCardImage;
