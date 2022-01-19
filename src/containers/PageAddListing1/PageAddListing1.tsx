import React, { FC, useState } from "react";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Textarea from "shared/Textarea/Textarea";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import moment from "moment";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { TimeRage } from "components/HeroSearchForm/RentalCarSearchForm";
import useWindowSize from "hooks/useWindowResize";
import TicketDatesRangeInput from "components/HeroSearchForm/TicketDatesRangeInput";
import EventTypeForm from "components/HeroSearchForm/EventTypeForm";
import Label from "components/Label/Label";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  
  const [TicketdateRangeValue, TicketsetDateRangeValue] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, "days"),
  });
  const [TickettimeRangeValue, TicketsetTimeRangeValue] = useState<TimeRage>({
    startTime: moment().hour().toString()+":00",
    endTime: moment().hour().toString()+":00",
  });

  const windowSize = useWindowSize();
 
  const [Meia, setMeia] = useState<boolean>();
  const [MeiaName, setMeiaName] = useState("Ingresso");
  const [MeiaPrice, setMeiaPrice] = useState(0);
  const [MeiaAmount, setMeiaAmount] = useState("0");

  const [Absorver, setAbsorver] = useState<boolean>();

  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };
  const renderCheckbox = (
    name: string,
    id: string,
    label: string,
    func: Function,
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
          onChange={(e) => {func(e.target.checked)}}
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

  const renderMeia = (
  ) => {
    if (Meia) {
      return (
      <div className="flex flex-row flex-wrap space-x-10 items-end mt-6">
        <FormItem>
          <Input value={MeiaName+" Meia"}type="text"/>
        </FormItem>
        <div>
          <div className="flex justify-end">
           <>{absorver(MeiaPrice/2)}</>
          </div>
          <div className="mt-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">R$ </span>
              </div>
              <Input
                className="!pl-8 !pr-10"
                value={(MeiaPrice/2).toFixed(2).toString()}
                type="number"
              />
            </div>
          </div>
        </div>
        <FormItem>
          <Input placeholder={MeiaAmount} type="number"/>
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
  }

  const [tooltipStatus, setTooltipStatus] = useState(0);
  const renderTaxa = (valor: number,abs: number
    ) => { 
      if (valor > 0){
        return (
          <div className="flex-col md:flex-row flex items-center md:justify-center">
                {/*Code Block for white tooltip starts*/}
                <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                    <div className="mr-2 text-gray-500 cursor-pointer flex">
                        <span className="">{"Valor Final R$"+(valor+taxa(valor)-abs).toFixed(2)}</span>
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                     </div>
                    {tooltipStatus === 1 && (
                        <div role="tooltip" className="z-20 flex justify-center pl-3 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8
                        shadow-lg rounded-2xl bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700">
                            <span>Preço: R${(valor-abs).toFixed(2)} + Taxa: R${taxa(valor).toFixed(2)}</span>
                        </div>
                    )}{" "}
                </div>
            </div>
        )
      }else
      return
    };  
    
    const absorver = (valor: number) => {
      if (Absorver){
        return renderTaxa(valor,taxa(valor))
      }
      else {
        return renderTaxa(valor,0)
      }
    }
  
  
  return (
    <div className="mt-6 flex flex-wrap justify-center items-stretch">
      <CommonLayout index="1. Informações do evento">
        <>
      <h2 className="text-2xl font-semibold">Sobre seu evento📣</h2>
          {/* FORM */}
          <div className="space-y-8">
            <div className={window.innerWidth>600?"flex items-strech space-x-10":"space-y-8"}>
              <FormItem className="w-full lg:w-1/2"  label="Nome do evento">
                <Input/>
              </FormItem>
              <FormItem className="w-full lg:w-1/2" label="Categoria">
                <Select>
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
              </FormItem>
            </div>
            <div><span className="text-lg font-semibold">Foto de Capa</span>
              <div className="mt-2">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="file-upload-2"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Enviar uma foto</span>
                        <input
                          id="file-upload-2"
                          name="file-upload-2"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ou arraste ela aqui</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      PNG, JPG, GIF até 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <span className="text-lg mt-2 font-semibold">Descrição</span>
             <Textarea className="mt-2" placeholder="..." rows={14} />
            </div>
          </div>
        </>
      </CommonLayout>
      <CommonLayout index="2. Local do Evento">
      
      <EventTypeForm className="w-full"/>
      
      </CommonLayout>
      <CommonLayout index="3. Ingressos">
        <>
          {/* FORM */}
          <div className="space-y-8">
            <div className="flex flex-row flex-wrap space-x-10 items-center mt-6">
              <FormItem label="Nome do Ingresso" className="col-span-2">
                <Input placeholder="Ingresso" type="text" onChange={(e) => {setMeiaName(e.target.value);}}/>
              </FormItem>
              <div>
                <div className="flex justify-between">
                 <Label className="pr-3">{"Preço"}</Label>
                 <>{absorver(MeiaPrice)}</>
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
                      onChange={(e) => {setMeiaPrice(e.target.valueAsNumber);}}
                    />
                  </div>
                </div>
              </div>
              <FormItem label="Quantidade de Ingressos" className="col-span-2">
                <Input placeholder="0" type="number" onChange={(e) => {setMeiaAmount(e.target.value);}}/>
              </FormItem>
            </div>
              {renderMeia()}
            <div className="flex justify-between">
              {renderCheckbox("Criar meia-entrada", "Criar meia-entrada", "Criar meia-entrada", setMeia)}
              {renderCheckbox("Absorver taxa", "Absorver taxa", "Absorver taxa", setAbsorver)}
            <div className="col-span-3 justify-items-end ">
                <label className="text-lg font-semibold" htmlFor="">
                  Encerrar vendas por
                </label>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {renderRadio("Encerrar", "Data", "Data", true)}
                  {renderRadio("Encerrar", "Lote", "Lote")}
                </div>
              </div>
            </div>
              
          </div>
          <form className="">
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
          </form>
          <FormItem label="Descrição do ingresso">
          <Textarea placeholder="Ex: Na compra desse ingresso ganhe uma camiseta!" rows={5}/>
          </FormItem>
        </>
        {/* //TODO botao que aciona mais um block de ingresso */}
      </CommonLayout>
      <div className="w-full flex justify-center items-center">
          <ButtonSecondary href="/add-listing-1"className="mx-5 sm:mx-1 my-5 min-width-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="ml-3">Pré-visualizar</span>
          </ButtonSecondary>

          <ButtonPrimary className="mx-5 sm:mx-1 my-5 min-width-100" >
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

            <span className="ml-3">Publicar</span>
          </ButtonPrimary>
      </div>
      
    </div>
  );
};

export default PageAddListing1;
