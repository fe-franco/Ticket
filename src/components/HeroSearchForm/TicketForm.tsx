import { useState } from "react";
import { FC } from "react";
import moment from "moment";
import CommonLayout from "containers/PageAddListing1/CommonLayout";
import FormItem from "containers/PageAddListing1/FormItem";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import TicketDatesRangeInput from "./TicketDatesRangeInput";
import Textarea from "shared/Textarea/Textarea";
import { DateRage } from "./StaySearchForm";
import { TimeRage } from "./RentalCarSearchForm";
import useWindowSize from "hooks/useWindowResize";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

import EventDateInput from "./EventDateInput";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";

export interface TicketFormProps {
  a?: string
}

const TicketForm: FC<TicketFormProps> = ({
  a,
}) => {

  const [TicketdateRangeValue, TicketsetDateRangeValue] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, "days"),
  });
  const [TickettimeRangeValue, TicketsetTimeRangeValue] = useState<TimeRage>({
    startTime: moment().hour().toString()+":00",
    endTime: moment().hour().toString()+":00",
  });

  const windowSize = useWindowSize();

  const renderCheckbox = (
    name: string,
    id: string,
    label: string,
    index: number,
    arrIndex: number,
    minValue?: boolean,
    arr?: boolean,
    subLabel?: string,
    
  ) => {
    return (
      <div className="flex mt-3 items-center">
        <input
          id={id + name}
          name={name}
          type="checkbox"
          className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
          onChange={(e) => {components[index][arrIndex]= e.target.checked; setComponents([...components])}}
          disabled = { arr? (lote.length > 1? false : true) : (minValue? (components[index][1] >= 2.50? false : true) : false)}
       />
       {label && (
        <label
          htmlFor={name}
          className="ml-3.5 flex flex-col flex-1 justify-center"
        >
          <span className=" text-neutral-900 dark:text-neutral-100">
            {label}
          </span>
          {subLabel && (
            <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
              {subLabel}
            </p>
          )}
        </label>
      )}
      </div>
    );
  };

   const tickets : any = []
   const addTicket= (lista : any , dateRange : any , timeRange : any) => {
      const list = [lista];
      var abc = list.map(item => ({
         nome: item[0],
         price: item[1],
         amount: item[2],
         meiaN: item[0]+"-Meia",
         meiaP: item[1]/2,
         meiaA: item[5],
         dateRange: {dateRange},
         timeRange: {timeRange}
      }));

      tickets.push(abc[0]);
      console.log(tickets);
      return abc[0]
   }
  


  const absorver = (valor: any, func: Function, abs: any, obj?: any, tName?: any) => {
    if (abs){
      if (valor >= 2.50) {
        return func(valor,taxa(valor),obj,tName);
      } else {
        return func(valor,0,obj,tName);
      }
    }
    else {
      return func(valor,0,obj,tName);
    }
  };

  const renderMeia = ( obj: any , i : any
    ) => {
      if (obj[3]) {
        return (
        <div className={`flex flex-col lg:flex-row lg:space-x-4 ${windowSize.width > 1400 ? "items-end" :  ""}`}>
          <FormItem label={windowSize.width > 1400 ? "" : "Nome"} >
            <Input value={obj[0]+"-Meia"} type="text"/>
          </FormItem>
          <div>
            <div className="flex justify-end">
             <>{absorver(obj[1]/2,renderTaxa, obj[4], obj)}</>
            </div>
           {windowSize.width > 1400 ? "" :  <Label className="pr-3">Preço</Label>}
            <div className="mt-2">
              <div className="relative">
                <div className="absolute inset-y-0  left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">R$ </span>
                </div>
                <Input
                  className="!pl-8 !pr-10"
                  value={(obj[1]/2).toFixed(2).toString()}
                  readOnly={true}
                  type="number"
                />
              </div>
            </div>
          </div>
          <FormItem label={windowSize.width > 1400 ? "" : "Quantidade"}>
            <Input type="number" onChange={(e) => {obj[5] = e.target.valueAsNumber; setComponents([...components])}}/>
          </FormItem>
        </div>
          )
      } else {
        return
     }
    };

    

  const taxa = (valor: number) => {
    if ((valor/100)*10 > 2.5) {
          return ((valor/100)*10)
        } else
          return (2.5)
  };

  const renderTaxa = (valor: number,abs: number , obj : any, i: any
    ) => { 
      if (valor > 0){
        return (
          <div className="flex-row flex justify-end"> 
                {/*Code Block for white tooltip starts*/}
                <div className="relative mt-20 md:mt-0" onMouseEnter={() => { obj[9] = 1; setComponents([...components])}} onMouseLeave={() => {obj[9] = 0; setComponents([...components])}}>
                    <div className="mr-2 text-gray-500 cursor-pointer flex justify-end">
                        <span className="">{"Valor Final R$"+(valor+taxa(valor)-abs).toFixed(2)}</span>
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                     </div>
                    { obj[9] === 1 && (
                        <div role="tooltip" className="z-20 flex justify-center -mt-1 w-64 absolute transition duration-150 ease-in-out left-0 ml-8">
                          <span className="px-3 shadow-lg rounded-2xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700">
                          Preço: R${(valor-abs).toFixed(2)} + Taxa: R${taxa(valor).toFixed(2)}
                          </span>
                        </div>
                    )}{" "}
                </div>
            </div>
        )
      }else
      return
    };


    const renderSummary = (valor: number,abs: number,tName: any) => {
      if (valor > 0){
      return (
        <div><h2 className="text-2xl font-semibold">{tName}:</h2><span className="text-xl">  Preço R${(valor-abs).toFixed(2)} | Taxa R${taxa(valor).toFixed(2)} | Valor Final R${valor}</span></div>
      )} else {
        return (<div><h2 className="text-2xl font-semibold">{tName}:</h2><span className="text-xl"> Preço R${(valor-abs).toFixed(2)} | Taxa R$0,00 | Valor Final R${valor}</span></div>)
      }
    };


    const [components, setComponents] = useState([["1° Ingresso",0,0,false,false,0,false,0,false,0]]);
  

    function addComponent() {

      var index = components.length+1
      
     setComponents([ ...components , [index+"° Ingresso"]]);

    };

    function removeItem<T>(arr: Array<T>, value: T): Array<T> { 
      const index = arr.indexOf(value);
      if (arr.length > 1) {
        arr.splice(index, 1);
      }
      setComponents([...components])
      setLote([...lote])
      return arr;
    };

    const [lote, setLote] = useState([""]);

    const [selectedDay, setSelectedDay] = useState<moment.Moment | null>(
      moment().add(2, "days")
      );
  const [dateFocused, setDateFocused] = useState<boolean>(false);
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: moment().hour().toString()+":00",
    endTime: "10:00 AM",
  });

  const [SelectedLote, setSelectedLote] = useState("");

  const renderForm = () => {
    return (
      <CommonLayout className="w-full" index="3. Ingressos">
      <div className={`grid  ${windowSize.width > 1400 ? "grid-cols-2 gap-5" : "grid-cols-1"}   justify-center items-start`}>
          {components.map((item, i) => (
            <div className="relative flex-shrink-0 items-center">
              <div className="absolute inset-y-1 right-3 lg:top-10">
                <ButtonSecondary className="w-1 h-1" onClick={() => {removeItem(components, item)}}>
                  x
                </ButtonSecondary>
              </div>
              <CommonLayout className="w-full" index={components[i][0].toString()}>{/*Ticketform*/}
                <div className={`space-y-8 ${components[i][6]? "hidden":""}`}>
                  <div className="flex flex-col lg:flex-row lg:space-x-4 items-strech">
                    <FormItem label="Nome do Ingresso" className="">
                      <Input placeholder="Ingresso" type="text" onChange={(e) => {item[0]= e.target.value; setComponents([...components])} }/>
                    </FormItem>
                    <div>
                      <div className="flex justify-between">
                      <Label className="pr-3">{"Preço"}</Label>
                      <>{absorver(components[i][1], renderTaxa, components[i][4], components[i])}</>
                      </div>
                      <div className="mt-2">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500">R$ </span>
                          </div>
                          <Input
                            className="!pl-8 !pr-10"
                            placeholder="0.00"
                            type="number"
                            step=".01"
                            onChange={(e) => {item[1]= e.target.valueAsNumber; item[7] = e.target.valueAsNumber/2 ;  setComponents([...components])}}
                          />
                        </div>
                      </div>
                    </div>
                    <FormItem label="Quantidade" className="col-span-2">
                      <Input placeholder="0" type="number" onChange={(e) => {components[i][2]= e.target.valueAsNumber; setComponents([...components]);}}/>
                    </FormItem>
                  </div>
                  {renderMeia(components[i], i)}
                  <div className="flex  flex-col lg:flex-row justify-between">
                    {renderCheckbox("Criar meia-entrada", "Criar meia-entrada", "Criar meia-entrada", i,3, false)}
                    {renderCheckbox("Absorver taxa", "Absorver taxa", "Absorver taxa", i,4 , true)}
                    {renderCheckbox("Iniciar por Lote", "Iniciar por Lote", "Iniciar por Lote", i,8 , false , true)}
                    
                  </div>
                  
                  <TicketDatesRangeInput
                  defaultDateValue={TicketdateRangeValue}
                  defaultTimeValue={TickettimeRangeValue}
                  onFocusChange={() => {}}
                  numberOfMonths={1}
                  fieldClassName="p-5"
                  wrapFieldClassName={`w-full relative mt-8 flex flex-col md:flex-row md:items-center 
                  rounded-3xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
                  ${windowSize.width > 1400 ? "divide-x" : "divide-y"} a divide-neutral-200 dark:divide-neutral-700 ${ components[i][8]? "hidden" : ""}`}
                  onChange={(data) => {
                    TicketsetDateRangeValue(data.stateDate);
                    TicketsetTimeRangeValue(data.stateTimeRage);
                  }}
                  anchorDirection={windowSize.width > 1400 ? "left" : "right"}
                  />
                  <div className={`w-full  relative mt-8 flex flex-col md:flex-row md:items-center 
                  rounded-3xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
                  ${windowSize.width > 1400 ? "divide-x" : "divide-y"} a divide-neutral-200 dark:divide-neutral-700 ${ components[i][8]? "" : "hidden"}`}>
                      <Listbox
                        value={SelectedLote}
                        onChange={(e) => {setSelectedLote(e)}}
                        as="div"
                        className="w-1/2 items-center flex"
                      >
                        <Listbox.Button className=" py-5 focus:outline-none flex justify-start">
                          <div className="flex flex-col justify-start w-full items-start cursor-pointer">
                            <span className="text-base sm:text-lg leading-none px-5 w-full">
                            {SelectedLote.length > 0? SelectedLote : "Selecione um ingresso"}
                            </span>
                            <span className="block px-5 mt-1 text-sm text-neutral-400 leading-none font-light">
                              Inicio após
                            </span>
                          </div>
                          
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-40 min-w-max py-1 mt-1 overflow-auto text-base bg-white dark:bg-neutral-800 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {lote.map((lote, index) => (
                             <Listbox.Option
                             key={index}
                             className={({ active }) =>
                               `${
                                 active
                                   ? "text-amber-900 bg-amber-100"
                                   : "text-gray-900 dark:text-neutral-200"
                               } cursor-default select-none relative py-2 pl-10 pr-4`
                             }
                             value={lote}
                           >
                             {({ selected, active }) => (
                               <>
                                 <span
                                   className={`${
                                     selected ? "font-medium" : "font-normal"
                                   } block truncate`}
                                 >
                                   {lote}
                                 </span>
                                 {selected ? (
                                   <span
                                     className={`${
                                       active ? "text-amber-600" : "text-amber-600"
                                     }  absolute inset-y-0 left-0 flex items-center pl-3`}
                                   >
                                     <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                   </span>
                                 ) : null}
                               </>
                             )}
                           </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                      <EventDateInput
                          sub="Final"
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
                

                  <FormItem label="Descrição do ingresso">
                    <Textarea placeholder="Ex: Na compra desse ingresso ganhe uma camiseta!" rows={5}/>
                  </FormItem>
                  <div className="pt-3 flex justify-center">
                    <ButtonPrimary 
                    disabled={components[i][1] > -1 ? false : true}
                    onClick={() =>{item[6]=true; setComponents([...components]); setLote([...lote, components[i][0].toString()]) ;  addTicket(item, TicketdateRangeValue , TickettimeRangeValue )}} >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span className="ml-3">Finalizar</span>
                    </ButtonPrimary>
                  </div>
                </div>
                <div className={`flex flex-col items-center space-y-5 ${components[i][6]? "":"hidden"}`}>
                  {absorver(components[i][1], renderSummary, components[i][4], components[i][0]) }
                  <div className={components[i][3]? "" : "hidden"}>{absorver((components[i][7]), renderSummary, components[i][4],components[i][0]+"-Meia")}</div>
                <ButtonSecondary onClick={() =>{item[6]=false; setComponents([...components]); removeItem(lote , components[i][0].toString()); removeItem(tickets , addTicket(item, TicketdateRangeValue , TickettimeRangeValue )) ; setSelectedLote(SelectedLote)}}>
                  <div className="mr-1">
                    <span className="">Editar</span>
                    <span className="absolute right-2 top-3 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </span>
                  </div>
                </ButtonSecondary>
                </div>
              </CommonLayout>
            </div>
            ))}
          <div className="flex justify-center">
            <ButtonPrimary className="h-1 w-5" onClick={addComponent}>
              +
            </ButtonPrimary>
            
          </div>
      </div>
    </CommonLayout>
    );
  };

  return renderForm();
};

export default TicketForm;
