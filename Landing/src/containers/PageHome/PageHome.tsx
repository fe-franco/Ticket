import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { Helmet } from "react-helmet";
import ExperiencesSearchForm from "components/HeroSearchForm/ExperiencesSearchForm";
import FormItem from "containers/PageAddListing1/FormItem";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Vida Noturna",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2385210.jpg&fm=jpg",
  },
  {
    id: "2",
    href: "/listing-stay",
    name: "Carnaval 2022",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/6666055/pexels-photo-6666055.jpeg?cs=srgb&dl=pexels-freitas-junior-6666055.jpg&fm=jpg",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "Eventos",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?cs=srgb&dl=pexels-riciardus-301930.jpg&fm=jpg",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Festivais",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "Teatro",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/3644048/pexels-photo-3644048.jpeg?cs=srgb&dl=pexels-gela-del-rosario-3644048.jpg&fm=jpg",
  },
  {
    id: "6",
    href: "/listing-stay",
    name: "Espetaculos",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/3640558/pexels-photo-3640558.jpeg?cs=srgb&dl=pexels-patrick-case-3640558.jpg&fm=jpg",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 69420,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Digital Tickets || Home</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 pt-10 lg:pt-20 pb-16 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS} />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>

        {/* SECTION */}
        <SectionHowItWork />
        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>
        {/* SECTION */}
      </div>
    </div>
  );
}

export default PageHome;
