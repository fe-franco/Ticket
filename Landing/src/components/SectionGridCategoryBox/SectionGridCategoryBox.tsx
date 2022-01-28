import CardCategoryBox1 from "components/CardCategoryBox1/CardCategoryBox1";
import Heading from "components/Heading/Heading";
import { TaxonomyType } from "data/types";
import React from "react";

export interface SectionGridCategoryBoxProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  categoryCardType?: "card1";
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "São Paulo",
    taxonomy: "category",
    count: 1882,
    thumbnail:
      "https://images.unsplash.com/photo-1578002573559-689b0abc4148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: "2",
    href: "#",
    name: "Rio de Janeiro",
    taxonomy: "category",
    count: 8288,
    thumbnail:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "2",
    href: "#",
    name: "Belo Horizonte",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://images.unsplash.com/photo-1566830790860-f9cad9d4cfbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1601&q=80",
  },
  {
    id: "2",
    href: "#",
    name: "Brasília",
    taxonomy: "category",
    count: 112,
    thumbnail:
      "https://images.unsplash.com/photo-1625426242627-d9216dd3d698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "2",
    href: "#",
    name: "Curitiba",
    taxonomy: "category",
    count: 323,
    thumbnail:
      "https://images.unsplash.com/photo-1581458414947-efccb03d71fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "2",
    href: "#",
    name: "Praia Grande",
    taxonomy: "category",
    count: 2223,
    thumbnail:
      "https://images.unsplash.com/photo-1591549590250-10ab146d80d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "11",
    href: "#",
    name: "Aracaju",
    taxonomy: "category",
    count: 1775,
    thumbnail:
      "https://images.unsplash.com/photo-1623068481023-7059d8acdb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    id: "222",
    href: "#",
    name: "Florianópolis",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://images.unsplash.com/photo-1590093804707-018ca1d521dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories = DEMO_CATS,
  categoryCardType = "card1",
  headingCenter = true,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}) => {
  let CardComponentName = CardCategoryBox1;
  switch (categoryCardType) {
    case "card1":
      CardComponentName = CardCategoryBox1;
      break;

    default:
      CardComponentName = CardCategoryBox1;
  }

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading
        desc="Descubra os points perto de você"
        isCenter={headingCenter}
      >
        Explore por perto
      </Heading>
      <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
        {categories.map((item, i) => (
          <CardComponentName key={i} taxonomy={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
