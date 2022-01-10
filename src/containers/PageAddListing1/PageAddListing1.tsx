import React, { FC, useState } from "react";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import ButtonLayout from "./buttonLayout";
import FormItem from "./FormItem";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import Label from "components/Label/Label";
import GoogleMapReact from "google-map-react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Textarea from "shared/Textarea/Textarea";
import StayDatesRangeInput from "components/HeroSearchForm/StayDatesRangeInput";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import moment from "moment";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Checkbox from "shared/Checkbox/Checkbox";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, "days"),
  });
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
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-end">
      <CommonLayout index="1. Informações do evento">
        <>
          {/* FORM */}
          <div className="space-y-8">
          <div className="col-span-2 justify-items-end ">
                <label className="text-lg font-semibold" htmlFor="">
                  Selecione o tipo de evento🎭
                </label>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {renderRadio("Encerrar", "Presencial", "Presencial", true)}
                  {renderRadio("Encerrar", "Live", "Live")}
                  {renderRadio("Encerrar", "Videoconferência", "Videoconferência")}
                </div>
              </div>
            {/* ITEM */}
            <FormItem label="Nome do evento">
              <Input />
            </FormItem>
            <FormItem label="Categoria do evento">
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
            <div>
              <span className="text-lg font-semibold">Foto de Capa</span>
              <div className="mt-5 ">
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
          </div>
        </>
      </CommonLayout>
      <CommonLayout index="2. Descrição do Evento">
        <>
          <div>
            <h2 className="text-2xl font-semibold">Fale sobre seu evento📣</h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Conte tudo sobre seu evento, sua produção e novidades.
            </span>
          </div>

          <Textarea placeholder="..." rows={14} />
        </>
      </CommonLayout>
      <CommonLayout index="3. Local do Evento">
        <>
          {/* FORM */}
          <div className="space-y-8">
            <ButtonSecondary>
              <LocationMarkerIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
              <span className="ml-3">Usar localização atual</span>
            </ButtonSecondary>
            {/* ITEM */}
            <FormItem label="Nome do Local ou endereço">
              <Input placeholder="..." />
            </FormItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
              <FormItem label="Nome do Local">
                <Input />
              </FormItem>
              <FormItem label="Complemento">
                <Input />
              </FormItem>
            </div>
            <div>
              <Label>Endereço detalhado</Label>
              <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                1110 Pennsylvania Avenue NW, Washington, DC 20230
              </span>
              <div className="mt-4">
                <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
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
        </>
      </CommonLayout>
      <CommonLayout index="4. Ingressos">
        <>
          {/* FORM */}
          <div className="space-y-8">
            <div className="flex items-center mt-6 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-5">
              <FormItem label="Nome do Ingresso" className="col-span-2">
                <Input placeholder="Ingresso" type="text" />
              </FormItem>
              <FormItem label="Preço" className="col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    className="!pl-8 !pr-10"
                    placeholder="0.00"
                    type="number"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">USD</span>
                  </div>
                </div>
              </FormItem>
              <FormItem label="Quantidade de Ingressos" className="col-span-2">
                <Input placeholder="0" type="number" />
              </FormItem>
              <div className="col-span-2">
                <Checkbox label="Criar Meia-entrada" name="Meia-entrada"/>
              </div>
              {/* ITEM */}
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
          <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
            <StayDatesRangeInput
              onChange={(date) => setSelectedDate(date)}
              numberOfMonths={1}
              fieldClassName="p-5"
              defaultValue={selectedDate}
              anchorDirection={window.innerWidth > 1400 ? "left" : "right"}
            />
          </form>
          <FormItem label="Descrição do ingresso">
          <Textarea placeholder="Ex: Na compra desse ingresso ganhe uma camiseta!" rows={5} />
          </FormItem>
        </>
        {/* //TODO botao que aciona mais um block de ingresso */}
      </CommonLayout>
      <div className="col-span-2" style={{width:"100%",display: "flex",justifyContent: "center",alignItems: "center"}}>
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
