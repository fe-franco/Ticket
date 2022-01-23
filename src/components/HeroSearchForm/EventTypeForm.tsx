import LocationMarker from "components/AnyReactComponent/LocationMarker";
import FormItem from "containers/PageAddListing1/FormItem";
import GoogleMapReact from "google-map-react";
import useWindowSize from "hooks/useWindowResize";
import moment from "moment";
import React, { FC, useState } from "react";
import "react-dates/initialize";
import Input from "shared/Input/Input";
import EventDateInput from "./EventDateInput";
import EventLocationForm from "./EventLocationForm";
import LocationInput from "./LocationInput";
import RealEstateSearchForm from "./RealEstateSearchForm";
import { TimeRage } from "./RentalCarSearchForm";

export type EventTypeTab = "Presencial" | "Live" | "Videoconferência";

export interface EventTypeFormProps {
  className?: string;
  currentTab?: EventTypeTab;
  
}

const currentTab=""
const currentPage=""
const isArchivePage = !!currentPage && !!currentTab;

const EventTypeForm: FC<EventTypeFormProps> = ({
  className = "",
  currentTab = "Presencial",
}) => {
  const tabs: EventTypeTab[] = ["Presencial", "Live", "Videoconferência"];
  const [tabActive, setTabActive] = useState<EventTypeTab>(currentTab);
  const [selectedDay, setSelectedDay] = useState<moment.Moment | null>(
    moment().add(2, "days")
    );
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: moment().hour().toString()+":00",
    endTime: moment().hour().toString()+":00",
  });

  const windowSize = useWindowSize();


  const [dateFocused, setDateFocused] = useState<boolean>(false);

  const renderTab = () => {
    return (
      <ul className="ml-6 mt-1 md:ml-16 xl:ml-20 inline-flex space-x-4 sm:space-x-8 lg:space-x-11 bg-white dark:bg-neutral-900 pb-6 md:p-6 !pl-0 xl:p-0 rounded-t-3xl">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? ""
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-100"
              } `}
              key={tab}
            >
              {active && (
                <span className="block mt-3 w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
              )}
              <span className="mt-3">{tab}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "Presencial":
        return (
          <div className="space-y-8">
            {/* ITEM */}
            <div className={window.innerWidth>600?"flex items-strech space-x-10":"space-y-8"}>
              <FormItem className="w-full lg:w-1/2" label="Nome do Local">
                <Input />
              </FormItem>
              <FormItem className="w-full lg:w-1/2" label="Complemento">
                <Input />
              </FormItem>
            </div>
            <EventLocationForm className="" haveDefaultValue={isArchivePage}/>
            <div>
              <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                1110 Pennsylvania Avenue NW, Washington, DC 20230
              </span>
              <div className="mt-4">
                <div className="aspect-w-7 aspect-h-5 sm:aspect-h-3">
                  <div className="rounded-xl overflow-hidden">
                    <GoogleMapReact
                  
                      bootstrapURLKeys={{
                        key: "AIzaSyDxJaU8bLdx7sSJ8fcRdhYS1pLk8Jdvnx0",
                      }}
                      defaultZoom={15}
                      yesIWantToUseGoogleMapApiInternals
                      defaultCenter={{
                        lat: 55.9607277,
                        lng: 36.2172614,
                      }}
                      >
                      <LocationMarker lat={55.9607277} lng={36.2172614} />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
            
      case "Live":
        return (
          <div className="space-y-5 lg:space-x-10 flex flex-col lg:flex-row items-start">
            {/* ITEM */}
                <FormItem  className="w-full lg:w-1/2" label="Link da Live">
                  <Input />
                </FormItem>
                <FormItem className="w-full lg:w-1/2" label="Data da Live">
                  <EventDateInput
                    sub="Data"
                    className="rounded-2xl h-14 bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 "
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
                </FormItem>
          </div>
        );
      case "Videoconferência":
        return (
          <div className="space-y-5 lg:space-x-10 flex flex-col lg:flex-row items-start lgitems-end">
            {/* ITEM */}
                <FormItem  className="w-full lg:w-1/2" label="Link da conferência">
                  <Input />
                </FormItem>
                <FormItem className="w-full lg:w-1/2" label="Data da conferência">
                  <EventDateInput
                    sub="Data"
                    className="rounded-2xl h-14 bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 "
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
                </FormItem>
          </div>
        );

      default:
        return <RealEstateSearchForm />;
    }
  };

  return (
    <div
      className={`nc-EventTypeForm w-full max-w-6xl space-y-8 py-4 lg:py-0 ${className}`}
      data-nc-id="EventTypeForm"
    >
      <div className="flex flex-col">
      <h2 className="text-2xl font-semibold">Tipo de evento🎭</h2>
        {renderTab()}
      </div>
      {renderForm()}
    </div>
  );
};

export default EventTypeForm;
