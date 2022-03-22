import React, { FC, useState } from "react";
import { DEMO_EVENTS_LISTINGS } from "data/listings";
import { EventDataType } from "data/types";
import Pagination from "shared/Pagination/Pagination";
import Heading2 from "components/Heading/Heading2";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import ExperiencesSearchForm from "components/HeroSearchForm/ExperiencesSearchForm";
import moment from "moment";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionGridFilterCardProps {
	className?: string;
	data?: EventDataType[];
	eventPage?: boolean;
}
var cardAmount = 8;

const DEMO_DATA: EventDataType[] = DEMO_EVENTS_LISTINGS.filter(
	(_, i) => i < cardAmount
);
const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
	className = "",
	data = DEMO_DATA,
	eventPage,
}) => {
	function showMore() {
		var amount = cardAmount + 8;
		cardAmount = amount;
	}

	const [location, setLocation] = useState();
	const [date, setDate] = useState<moment.Moment>(moment());
	const [name, setName] = useState("");

	return (
		<div
			className={`nc-SectionGridFilterCard ${className}`}
			data-nc-id="SectionGridFilterCard"
		>
			{console.log(data)}
			<Heading2
				heading={`Resultados da busca "` + name + `"`}
				subHeading={
					<span className="block text-neutral-500 dark:text-neutral-400 mt-3">
						{data.length} eventos
						<span className="mx-2">·</span>
						{location}
						<span className="mx-2">·</span>
						{date?.format("ll")}
					</span>
				}
			/>
			<div className={eventPage ? " " : "hidden"}>
				<ExperiencesSearchForm
					haveDefaultValue={false}
					defaultLocationValue={location}
					defaultDate={date}
					defaultValue={name}
					onChange={(e) => {
						setLocation(e.locationInputValue);
						setDate(e.dateValue);
						setName(e.value);
					}}
				/>
			</div>
			<div className="grid grid-cols-2 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-8 lg:mb-11">
				{data.map((event) => (
					<ExperiencesCard key={event.id} data={event} />
				))}
			</div>
			<div className="flex mt-16 justify-center items-center">
				<ButtonPrimary onClick={showMore}>Mostrar mais</ButtonPrimary>
			</div>
		</div>
	);
};

export default SectionGridFilterCard;
