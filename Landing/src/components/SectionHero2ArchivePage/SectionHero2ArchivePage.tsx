import React, { FC } from "react";
import imagePng from "images/hero-right-3.png";
import Avatar from "shared/Avatar/Avatar";

export interface SectionHero2ArchivePageProps {
  className?: string;
}

const SectionHero2ArchivePage: FC<SectionHero2ArchivePageProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`nc-SectionHero2ArchivePage relative ${className}`}
      data-nc-id="SectionHero2ArchivePage"
    >
      <div className="absolute bottom-0 top-60 md:inset-y-0 w-5/6 xl:w-3/4 right-0 flex-grow">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={imagePng}
          alt="hero"
        />
      </div>
      <div className="relative flex flex-col-reverse items-start md:block pb-14 md:py-14 ">
        <div className="relative inline-flex">
          <div className="w-screen right-10 md:right-32 inset-y-0 absolute bg-primary-500"></div>
          <div className="relative max-w-3xl inline-flex flex-shrink-0 flex-col items-start py-16 sm:py-20 space-y-8 sm:space-y-10 text-white">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
              Tijolo no Giramundo
            </h2>
            <div className="flex items-center text-base space-x-10 md:text-lg ">
              <div className="flex items-center">
                <Avatar sizeClass="h-10 w-10" radius="rounded-full" />
                <span className="ml-2.5 text-neutral-400">
                  Organizado por{" "}
                  <span className="text-neutral-200 font-medium">
                    Tijolo
                  </span>
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <span>
                  <i className="las la-map-marker-alt"></i>
                  <span className="ml-1"> Giramundo bar, São Paulo</span>
                </span>
                <span>
                  <i className="las la-clock mr-3"></i>
                  <span className="">24 de Janeiro de 2022, 18:00</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionHero2ArchivePage;
