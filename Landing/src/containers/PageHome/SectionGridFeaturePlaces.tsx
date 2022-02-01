import React, { FC, ReactNode } from "react";
import { DEMO_EVENTS_LISTINGS, DEMO_STAY_LISTINGS } from "data/listings";
import { EventDataType, StayDataType } from "data/types";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "components/StayCard/StayCard";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import Heading from "components/Heading/Heading";
import ButtonSecondary from "shared/Button/ButtonSecondary";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: EventDataType[] = DEMO_EVENTS_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: EventDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Recomendados para você",
  subHeading = "Da uma olhada no que a gente achou",
}) => {
  const renderCard = (stay: EventDataType) => {
    return <ExperiencesCard key={stay.id} data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <div className="flex justify-between items-end mb-4">
        <Heading desc={subHeading}>{heading}</Heading>
        <span className="hidden sm:block flex-shrink-0">
          <ButtonSecondary className="!leading-none">
            <span>View all</span>
            <i className="ml-3 las la-arrow-right text-xl"></i>
          </ButtonSecondary>
        </span>
      </div>
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {DEMO_DATA.map((stay) => renderCard(stay))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Mostrar mais</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
