import React, { FC } from "react";
import { DEMO_EVENTS_LISTINGS } from "data/listings";
import { EventDataType } from "data/types";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import NcImage from "shared/NcImage/NcImage";

export interface ExperiencesCardProps {
  className?: string;
  ratioClass?: string;
  data?: EventDataType;
  size?: "default" | "small";
}

const DEMO_DATA: EventDataType = DEMO_EVENTS_LISTINGS[0];

const ExperiencesCard: FC<ExperiencesCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  ratioClass = "aspect-w-3 aspect-h-3",
}) => {
  const {
    address,
    title,
    href,
    like,
    saleOff,
    featuredImage,
    date,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden">
        <div className={ratioClass}>
          <NcImage src={featuredImage} />
        </div>
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" />
        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div
        className={`ml-2 ${
          size === "default" ? "py-4 space-y-4" : "py-3 space-y-2"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>
          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col text-neutral-500 dark:text-neutral-400 text-sm">
            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
              <i className="las la-clock text-lg"></i>
              <span>{date}</span>
            </div>
            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
              {size === "default" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
              <span className="">{address}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-ExperiencesCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="ExperiencesCard"
    >
      <Link to={href}>
        {renderSliderGallery()}
        {renderContent()}
      </Link>
    </div>
  );
};

export default ExperiencesCard;
