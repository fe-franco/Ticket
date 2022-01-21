import { useEffect, useState } from "react";
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
import Select from "shared/Select/Select";

export interface TicketFormProps {
  haveDefaultValue?: boolean;
}

const TicketForm: FC<TicketFormProps> = ({
  haveDefaultValue,
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
    minValue: boolean,
    subLabel?: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type="checkbox"
          className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
          onChange={(e) => {components[index][arrIndex]= e.target.checked; setComponents([...components])}}
          disabled = { minValue? (components[index][1] >= 2.50? false : true) : false}
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

  const absorver = (valor: any, func: Function, abs: any, tName?: any) => {
    if (abs){
      if (valor >= 2.50) {
        return func(valor,taxa(valor),tName);
      } else {
        return func(valor,0,tName);
      }
    }
    else {
      return func(valor,0,tName);
    }
  };

  const renderMeia = ( obj: any 
    ) => {
      if (obj[3]) {
        return (
        <div className="flex flex-row space-x-4 items-end">
          <FormItem>
            <Input value={obj[0]+"-Meia"} type="text"/>
          </FormItem>
          <div>
            <div className="flex justify-end">
             <>{absorver(obj[1]/2,renderTaxa, obj[4])}</>
            </div>
            <div className="mt-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">R$ </span>
                </div>
                <Input
                  className="!pl-8 !pr-10"
                  value={(obj[1]/2).toFixed(2).toString()}
                  type="number"
                />
              </div>
            </div>
          </div>
          <FormItem>
            <Input placeholder={obj[2]} type="number" onChange={(e) => {obj[5] = e.target.valueAsNumber; setComponents([...components])}}/>
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

  const [tooltipStatus, setTooltipStatus] = useState(0);
  const renderTaxa = (valor: number,abs: number
    ) => { 
      if (valor > 0){
        return (
          <div className="flex-row flex justify-end">
                {/*Code Block for white tooltip starts*/}
                <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                    <div className="mr-2 text-gray-500 cursor-pointer flex justify-end">
                        <span className="">{"Valor Final R$"+(valor+taxa(valor)-abs).toFixed(2)}</span>
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                     </div>
                    {tooltipStatus === 1 && (
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


    const [components, setComponents] = useState([["1° Ingresso",0,0,false,false,0,false,0,false]]);
  

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
    
  const renderForm = () => {
    return (
      <CommonLayout className="w-full" index="3. Ingressos">
      <div className="grid grid-cols-2 gap-5 flex justify-center items-start">
          {components.map((item, i) => (
            <div className="relative">
              <div className="absolute inset-y-1 right-3 top-10">
                <ButtonSecondary className="w-1" onClick={() => {removeItem(components, item)}}>
                  x
                </ButtonSecondary>
              </div>
              <CommonLayout className="w-full" index={components[i][0].toString()}>{/*Ticketform*/}
                <div className={`space-y-8 ${components[i][6]? "hidden":""}`}>
                  <div className="flex flex-row space-x-5 items-end">
                    <FormItem label="Nome do Ingresso" className="col-span-2">
                      <Input placeholder="Ingresso" type="text" onChange={(e) => {item[0]= e.target.value; setComponents([...components])} }/>
                    </FormItem>
                    <div>
                      <div className="flex justify-between">
                      <Label className="pr-3">{"Preço"}</Label>
                      <>{absorver(components[i][1], renderTaxa, components[i][4])}</>
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
                      <Input placeholder="0" type="number" onChange={(e) => {item[2]= e.target.valueAsNumber; setComponents([...components]);}}/>
                    </FormItem>
                  </div>
                  {renderMeia(components[i])}
                  <div className="flex justify-between">
                    {renderCheckbox("Criar meia-entrada", "Criar meia-entrada", "Criar meia-entrada", i,3, false)}
                    {renderCheckbox("Absorver taxa", "Absorver taxa", "Absorver taxa", i,4 , true)}
                    {renderCheckbox("Iniciar por Lote", "Iniciar por Lote", "Iniciar por Lote", i,8 , false)}
                  </div>
                  <FormItem className={`w-full lg:w-1/2 ${ components[i][8]? "" : "hidden"}`} label="Lote">
                  <Select>
                    {lote.map((item,i) => {
                      return(
                        <option value={item}>
                          {item}
                        </option>
                      )
                    })}
                    
                  </Select>
                </FormItem>
                  <TicketDatesRangeInput
                  defaultDateValue={TicketdateRangeValue}
                  defaultTimeValue={TickettimeRangeValue}
                  onFocusChange={() => {}}
                  numberOfMonths={1}
                  fieldClassName="p-5"
                  wrapFieldClassName={`w-full relative mt-8 flex flex-col md:flex-row md:items-center 
                  rounded-3xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
                  ${windowSize.width > 1400 ? "divide-x" : "divide-y"} divide-neutral-200 dark:divide-neutral-700`}
                  onChange={(data) => {
                    TicketsetDateRangeValue(data.stateDate);
                    TicketsetTimeRangeValue(data.stateTimeRage);
                  }}
                  anchorDirection={windowSize.width > 1400 ? "left" : "right"}
                  />
                  <FormItem label="Descrição do ingresso">
                    <Textarea placeholder="Ex: Na compra desse ingresso ganhe uma camiseta!" rows={5}/>
                  </FormItem>
                  <div className="pt-3 flex justify-center">
                    <ButtonPrimary 
                    disabled={components[i][1] > -1 ? false : true}
                    onClick={() =>{item[6]=true; setComponents([...components]); setLote([...lote, components[i][0].toString()])}} >
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
                <ButtonSecondary onClick={() =>{item[6]=false; setComponents([...components]); removeItem(lote , components[i][0].toString())}}>
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
