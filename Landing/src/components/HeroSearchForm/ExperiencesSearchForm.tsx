import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import ButtonSubmit from "./ButtonSubmit";
import moment from "moment";
import { FC } from "react";
import useWindowSize from "hooks/useWindowResize";

// DEFAULT DATA FOR ARCHIVE PAGE

export interface ExperiencesSearchFormProps {
	haveDefaultValue?: boolean;
	defaultValue?: string;
	defaultDate?: any;
	defaultLocationValue?: any;
	onChange?: (e: {
		value: any;
		dateValue: any;
		locationInputValue: any;
	}) => void;
}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({
	haveDefaultValue,
	defaultValue,
	defaultDate,
	defaultLocationValue,
	onChange,
}) => {
	const [dateValue, setdateValue] = useState<moment.Moment>(moment());
	const [locationInputValue, setLocationInputValue] = useState("");

	const [dateFocused, setDateFocused] = useState<boolean>(false);
	//

	useEffect(() => {
		if (haveDefaultValue) {
			setdateValue(defaultDate);
			setLocationInputValue(defaultLocationValue);
		}
	}, []);
	const [value, setValue] = useState(defaultValue);
	//

	useEffect(() => {
		if (onChange) {
			onChange({ value, dateValue, locationInputValue });
		}
	}, [value, dateValue, locationInputValue]);

	const placeHolder = "Nome do evento";
	const desc = "Qual o nome?";
	const windowSize = useWindowSize();

	const renderForm = () => {
		return (
			<form className="w-full relative flex flex-col  md:flex-row md:items-center rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700  md:divide-y-0">
				<div className="flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left">
					<div className="text-neutral-300 dark:text-neutral-400">
						<span className="block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 sm:h-6 w-4 sm:w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									d="M21 5H3C2.44772 5 2 5.44772 2 6V9.5H2.6C3.98071 9.5 5.1 10.6193 5.1 12C5.1 13.3807 3.98071 14.5 2.6 14.5H2V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V14.5H21.9C20.5193 14.5 19.4 13.3807 19.4 12C19.4 10.6193 20.5193 9.5 21.9 9.5H22V6C22 5.44772 21.5523 5 21 5Z"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M15 5V19"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-dasharray="3 3"
								/>
							</svg>
						</span>
					</div>
					<div className="flex-grow">
						<input
							className={`block bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
							placeholder={placeHolder}
							value={value}
							onChange={(e) => setValue(e.currentTarget.value)}
						/>
						<span className="block mt-0.5 text-sm text-neutral-400 font-light ">
							<span className="line-clamp-1">
								{!!value ? placeHolder : desc}
							</span>
						</span>
					</div>
				</div>
				<LocationInput
					defaultValue={locationInputValue}
					onChange={(e) => setLocationInputValue(e)}
					onInputDone={() => setDateFocused(true)}
					placeHolder="Cidade"
				/>

				<ExperiencesDateSingleInput
					className={windowSize.width > 1400 ? "" : "hidden"}
					defaultValue={dateValue}
					onChange={(date) => setdateValue(date)}
					defaultFocus={dateFocused}
					onFocusChange={(focus: boolean) => {
						setDateFocused(focus);
					}}
				/>
				{/* BUTTON SUBMIT OF FORM */}
				<div className="px-4 py-4 lg:py-0">
					<ButtonSubmit />
				</div>
			</form>
		);
	};

	return renderForm();
};

export default ExperiencesSearchForm;
