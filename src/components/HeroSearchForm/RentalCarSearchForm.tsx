import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import { FocusedInputShape } from "react-dates";
import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";
import { FC } from "react";
import moment from "moment";

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface TimeRage {
  startTime: string;
  endTime: string;
}

export interface RentalCarSearchFormProps {
  haveDefaultValue?: boolean;
}

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = ({
  haveDefaultValue,
}) => {
  // DEFAULT DATA FOR ARCHIVE PAGE
  const defaultPickUpInputValue = "Tokyo, Jappan";
  const defaultDropOffInputValue = "Paris, France";
  // const defaultDateRange = {
  //   startDate: moment("2021-08-08"),
  //   endDate: moment("2021-09-09"),
  // };

  // USE STATE
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: "10:00 AM",
    endTime: "10:00 AM",
  });
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [fieldFocused, setFieldFocused] = useState<
    FocusedInputShape | "dropOffInput" | null
  >(null);


  // USER EFFECT
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue({
        startDate: moment(),
        endDate: moment().add(4, "days"),
      });

      setPickUpInputValue(defaultPickUpInputValue);
    }
  }, []);
  //


  const renderForm = () => {
    return (
      <div className="w-full">
        <form className="w-full relative mt-8 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900">
          <div className=" flex flex-col md:flex-row md:items-center w-full rounded-full [ nc-divide-field ] ">
            <div className="relative flex flex-col nc-flex-2-auto [ nc-divide-field ] ">
              <LocationInput
                defaultValue={pickUpInputValue}
                placeHolder="City or Airport"
                desc="Pick up location"
              />
            </div>
            <RentalCarDatesRangeInput
              defaultDateValue={dateRangeValue}
              defaultTimeValue={timeRangeValue}
              defaultFocus={
                fieldFocused === "dropOffInput" ? null : fieldFocused
              }
              onFocusChange={(focus) => setFieldFocused(focus)}
              onChange={(data) => {
                setDateRangeValue(data.stateDate);
                setTimeRangeValue(data.stateTimeRage);
              }}
            />
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
};

export default RentalCarSearchForm;
