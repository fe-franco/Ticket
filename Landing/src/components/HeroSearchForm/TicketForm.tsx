import { useEffect, useState } from "react";
import { FC } from "react";
import moment from "moment";
import CommonLayout from "containers/PageAddListing1/CommonLayout";
import FormItem from "containers/PageAddListing1/FormItem";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import TicketDatesRangeInput from "./TicketDatesRangeInput";
import Textarea from "shared/Textarea/Textarea";
import useWindowSize from "hooks/useWindowResize";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

import EventDateInput from "./EventDateInput";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import Select from "shared/Select/Select";

export interface TicketFormProps {
  defaultValue: any;
  onChange?: (e: {components: any}) => void;
}

const TicketForm: FC<TicketFormProps> = ({
  defaultValue,
  onChange
}) => {
  


  const [components, setComponents] = useState([[defaultValue,{
    startDate: moment(),
    endDate: moment().add(4, "days"),
  }]]);

  useEffect(() => {
    if (onChange) {
      onChange({components});
    }
  }, [components]);

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
          disabled = { arr? (lote.length > 2? false : true) : (minValue? (components[index][1] >= 2.50? false : true) : false)}
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
        <div className={`flex flex-col lg:flex-row lg:space-x-4 space-y-3 lg:space-y-0 ${windowSize.width > 1400 ? "items-end" :  ""}`}>
          <FormItem label={windowSize.width > 1400 ? "" : "Nome"} >
            <Input value={obj[0]+"-Meia"} type="text" readOnly/>
          </FormItem>
          <div>
            <div className="flex justify-end">
             <>{absorver(obj[1]/2,renderTaxa, obj[5], obj)}</>
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
            <Input type="number" onChange={(e) => {obj[4] = e.target.valueAsNumber; setComponents([...components])}}/>
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
                <div className="relative mt-20 md:mt-0" onMouseEnter={() => { obj[8] = 1; setComponents([...components])}} onMouseLeave={() => {obj[8] = 0; setComponents([...components])}}>
                    <div className="mr-2 text-gray-500 cursor-pointer flex justify-end">
                        <span className="">{"Valor Final R$"+(valor+taxa(valor)-abs).toFixed(2)}</span>
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                     </div>
                    { obj[8] === 1 && (
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



    
    function addComponent() {
      var index = components.length+1
      setComponents([ ...components , [index+"° Ingresso"]]);
    };

    function removeItem<T>(arr: Array<T>, value: any): Array<T> {
      var index = arr.indexOf(value);
      if (arr.length > 1) {
        if (index !== -1) {
          arr.splice(index, 1);
        }  
      }
      setComponents([...components])
      return arr;
    };

    const cleanLote = () => {
       var index = lote.indexOf("")
       if (index !== -1) {
        lote.splice(index, 1)
       }
    }

    const [lote, setLote] = useState(["Selecione um ingresso"]);

  const listOptions = (option : string, name : string, index: number) => {
    if (option !== name) {
      return option;
    } else { return ""}
  }

  const setDateRange = (index : number) => {
    if (components[index][10] === undefined) {
        components[index][10] = {
        startDate: moment(),
        endDate: moment().add(4, "days"),
      }
    }
    
    return components[index][10]
  }

  const setTimeRange = (index : number) => {
    if (components[index][11] === undefined) {
      components[index][11] = {
        startTime: moment().hour().toString()+":00",
        endTime: moment().hour().toString()+":00",
      }
    }
    
    return components[index][11]
  }

  const setFocus = (index : number) => {
    if (components[index][13] === undefined) {
      components[index][13] = false
    }
    
    return components[index][11]
  }

  const setSingleDateRange = (index : number) => {
    if (components[index][12] === undefined) {
      components[index][12] = moment().add(2, "days")
    }
    return components[index][12]
  }


  const renderForm = () => {
    return (
      <CommonLayout className="w-full" index="3. Ingressos">{cleanLote()}
      <div  className={`grid  ${windowSize.width > 1400 ? "grid-cols-2 gap-5" : "grid-cols-1"}   justify-center items-start`}>
          {components.map((item, i) => (
            <div className="relative flex-shrink-0 items-center">
              <div className={`absolute inset-y-1 right-3 top-0 ${components.length > 1 ? "" : "hidden"}`}>
                <ButtonSecondary className="w-1 h-1" onClick={() => {removeItem(components, item);removeItem(lote, item[0])}}>
                  x
                </ButtonSecondary>
              </div>
              <CommonLayout className="w-full" index={components[i][0].toString().length > 0? components[i][0].toString() : (i+1)+"° Ingresso" }>{/*Ticketform*/}
                  <div className="space-y-3">
                    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-3 lg:space-y-0 items-strech">
                      <FormItem label="Nome do Ingresso" className="">
                        <Input placeholder="Ingresso" type="text" onChange={(e) => {removeItem(lote, item[0]); item[0]= e.target.value; setComponents([...components]); setLote([...lote, components[i][0].toString()])}}/>
                      </FormItem>
                      <div>
                        <div className="flex justify-between">
                        <Label className="pr-3">{"Preço"}</Label>
                        <>{absorver(components[i][1], renderTaxa, components[i][5], components[i])}</>
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
                              onChange={(e) => {item[1]= e.target.valueAsNumber; item[6] = e.target.valueAsNumber/2 ;  setComponents([...components])}}
                            />
                          </div>
                        </div>
                      </div>
                      <FormItem label="Quantidade" className="col-span-2">
                        <Input placeholder="0" type="number" onChange={(e) => {components[i][2]= e.target.valueAsNumber; setComponents([...components]);}}/>
                      </FormItem>
                    </div>
                    {renderMeia(components[i], i)}
                    <div className="flex flex-col lg:flex-row justify-around lg:space-x-10">
                      {renderCheckbox("Criar meia-entrada", "Criar meia-entrada", "Criar meia-entrada", i,3, false)}
                      {renderCheckbox("Absorver taxa", "Absorver taxa", "Absorver taxa", i,5 , true)}
                    </div>
                  </div>
                  <div>
                    <FormItem label="Duração das vendas" className="flex flex-col justify-end">
                      <TicketDatesRangeInput
                        defaultDateValue={setDateRange(i)}
                        defaultTimeValue={setTimeRange(i)}
                        onFocusChange={() => {}}
                        numberOfMonths={1}
                        fieldClassName="p-5"
                        wrapFieldClassName={`w-full mt-2 relative flex flex-col md:flex-row md:items-center 
                        rounded-3xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
                        ${windowSize.width > 1400 ? "divide-x" : "divide-y"} a divide-neutral-200 dark:divide-neutral-700 ${ components[i][7]? "hidden" : ""}`}
                        onChange={(data) => {
                          components[i][10] = data.stateDate;
                          components[i][11] = data.stateTimeRage; setComponents([...components])
                        }}
                        anchorDirection={windowSize.width > 1400 ? "left" : "right"}
                      />
                      <div className={`w-full mt-2  relative flex flex-col md:flex-row md:items-center 
                      rounded-3xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
                      ${windowSize.width > 1400 ? "divide-x" : "divide-y"} divide-neutral-200 dark:divide-neutral-700 ${components[i][7]? "" : "hidden"}`}>
                          <div className={windowSize.width > 1400 ? "w-1/2" : "hidden"}>
                            <Listbox
                              value={components[i][9]}
                              onChange={(e) => {components[i][9]=e ; setComponents([...components])}}
                              as="div"
                              className="items-center flex"
                              >
                              <Listbox.Button className=" py-5 focus:outline-none flex justify-start">
                                <div className="flex flex-col justify-start w-full items-start cursor-pointer">
                                  <span className="text-base sm:text-lg leading-none px-5 w-full">
                                  {components[i][9]}
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
                                  value={listOptions(lote, components[i][0].toString(), i)}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`${
                                          selected ? "font-medium" : "font-normal"
                                        } block truncate `}
                                      >
                                        {listOptions(lote, components[i][0].toString(), i)}
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
                          </div>
                          <div className={windowSize.width > 1400 ? "hidden" : "rounded-full w-full"}>
                            <Select className="outline-none">
                              <option value="Acadêmico e científico">
                                Acadêmico e científico
                              </option>
                              <option value="Artesanato">Artesanato</option>
                              <option value="Casa e estilo de vida">
                                Casa e estilo de vida
                              </option>
                              <option value="Cinema, fotografia">Cinema, fotografia</option>
                              <option value="Desenvolvimento pessoal">
                                Desenvolvimento pessoal
                              </option>
                              <option value="Design, métricas e produtos digitais">
                                Design, métricas e produtos digitais
                              </option>
                              <option value=" Teatro, stand up e dança">
                                Teatro, stand up e dança
                              </option>
                              <option value="Direito e legislação">
                                Direito e legislação
                              </option>
                              <option value="Empreendedorismo, negócios e inovação">
                                Empreendedorismo, negócios e inovação
                              </option>
                              <option value="Esportes">Esportes</option>
                              <option value="Games e geek">Games e geek</option>
                              <option value="Gastronomia, comidas e bebidas">
                                Gastronomia, comidas e bebidas
                              </option>
                              <option value="Governo e política">Governo e política</option>
                              <option value="Informática, tecnologia e programação">
                                Informática, tecnologia e programação
                              </option>
                              <option value="Marketing e vendas">Marketing e vendas</option>
                              <option value="Moda e beleza">Moda e beleza</option>
                              <option value="Música">Música</option>
                              <option value="Outro">Outro</option>
                              <option value="Religião, espiritualidade">
                                Religião, espiritualidade
                              </option>
                              <option value="Saúde, nutrição e bem-estar">
                                Saúde, nutrição e bem-estar
                              </option>
                              <option value="Sociedade e cultura">Sociedade e cultura</option>
                            </Select>
                          </div>
                          <EventDateInput
                              sub="Final"
                              className="h-20"
                              label="Data do evento"
                              defaultValue={setSingleDateRange(i)}
                              defaultTimeValue={setTimeRange(i)}
                              defaultFocus={setFocus(i)}
                              onFocusChange={(focus: boolean) => {
                              components[i][13] = focus; setComponents([...components])
                              }}
                              onChange={(data) => {
                              components[i][12] = data.startDate;
                              components[i][11] = data.stateTimeRage; setComponents([...components])
                              }}
                              anchorDirection={windowSize.width > 1400 ? "left" : "right"}
                            />
                      </div>
                      <div className={i > 0  ? "" : "hidden"}>
                        {renderCheckbox("Iniciar por Lote", "Iniciar por Lote", "Iniciar por Lote", i,7 , false , true)}
                      </div>
                    </FormItem>
                  </div>
                  <FormItem label="Descrição do ingresso">
                    <Textarea placeholder="Ex: Na compra desse ingresso ganhe uma camiseta!" rows={5} onChange={(e) => {components[i][14] = e.target.value ; setComponents([...components])}}/>
                  </FormItem>
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
