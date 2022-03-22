import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import moment from "moment";
import { FC } from "react";
import EventDateInput from "./EventDateInput";
import useWindowSize from "hooks/useWindowResize";
import { TimeRage } from "./RentalCarSearchForm";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultDate = moment();


export interface EventLocationFormProps {
  haveDefaultValue?: boolean;
  className?: string;

}

const EventLocationForm: FC<EventLocationFormProps> = ({
  haveDefaultValue,
  className = "",
}) => {
  const [locationInputValue, setLocationInputValue] = useState("");

  const [dateFocused, setDateFocused] = useState<boolean>(false);
  //
  const [selectedDay, setSelectedDay] = useState<moment.Moment>(
    moment().add(2, "days")
    );
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: moment().hour().toString()+":00",
    endTime: "10:00 AM",
  });
  useEffect(() => {
    if (haveDefaultValue) {
      setSelectedDay(defaultDate);
      setLocationInputValue(defaultLocationValue);
    }
  }, []);
  const windowSize = useWindowSize();

  //

  const renderForm = () => {
    return (
      <div className={`w-full relative mt-8 flex justify-center flex-col md:flex-row md:items-center 
      rounded-2xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
      ${windowSize.width > 1400 ? "divide-x" : "divide-y"} divide-neutral-200 dark:divide-neutral-700`}>
        <LocationInput className="h-20"
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused(true)}
        />
        <EventDateInput
            sub="Data"
            className="h-20"
            label="Data do evento"
            defaultValue={selectedDay}
            defaultTimeValue={timeRangeValue}
            defaultFocus={dateFocused}
            onFocusChange={(focus: boolean) => {
              setDateFocused(focus);
            }}
            onChange={(data) => {
              setSelectedDay(data.startDate);
              setTimeRangeValue(data.stateTimeRage);
            }}
          anchorDirection={windowSize.width > 1400 ? "left" : "right"}
          />

      </div>
    );
  };

  return renderForm();
};

export default EventLocationForm;
