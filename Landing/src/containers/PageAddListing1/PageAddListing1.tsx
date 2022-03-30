import { FC, useState } from "react";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import EventTypeForm from "components/HeroSearchForm/EventTypeForm";
import TicketForm from "components/HeroSearchForm/TicketForm";
import useWindowSize from "hooks/useWindowResize";
import { EventsDataType } from "data/types";
import { DEMO_AUTHORS } from "data/authors";
import moment from "moment";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  const windowSize = useWindowSize();
  const [ticketsList, setticketList] = useState([]);
  var eventData: EventsDataType = {
    id: DEMO_AUTHORS[1].id + (Math.floor(Math.random() * 100) + 1).toString(),
    author: DEMO_AUTHORS[1],
    href: DEMO_AUTHORS[1].href + "/",
    title: "",
    category: "",
    featuredImage: "",
    description: "",
    listingCategory: "Presencial",
    date: moment(),
    address: "",
    localName: "",
    map: {
      lat: -23.5421864,
      lng: -46.6353882,
    },
    tickets: ticketsList,
  };

  const categories = [
    "Selecione uma categoria",
    "Música",
    "Acadêmico e científico",
    "Artesanato",
    "Casa e estilo de vida",
    "Cinema, fotografia",
    "Design, métricas e produtos digitais",
    "Teatro, stand up e dança",
    "Direito e legislação",
    "Empreendedorismo, negócios e inovação",
    "Esportes",
    "Games e geek",
    "Gastronomia, comidas e bebidas",
    "Governo e política",
    "Informática, tecnologia e programação",
    "Marketing e vendas",
    "Moda e beleza",
    "Religião, espiritualidade",
    "Saúde, nutrição e bem-estar",
    "Sociedade e cultura",
    "Outro",
  ];

  // create event object
  const createEvent = () => {
    console.log(eventData);
  };

  return (
    <div>
      <div
        className={`mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 ${
          window.innerWidth > 600 ? "px-10" : "px-5"
        }`}
      >
        <CommonLayout className="px-9" index="1. Informações do evento">
          <>
            <h2 className="text-2xl font-semibold">Sobre seu evento📣</h2>
            {/* FORM */}
            <div className="space-y-8">
              <div
                className={
                  window.innerWidth > 600
                    ? "flex items-strech space-x-10"
                    : "space-y-8"
                }
              >
                <FormItem className="w-full lg:w-1/2" label="Nome do evento">
                  <Input onChange={(e) => (eventData.title = e.target.value)} />
                </FormItem>
                <FormItem className="w-full lg:w-1/2" label="Categoria">
                  <div className="border rounded-2xl border-neutral-200 dark:border-neutral-700">
                    <Select
                      onChange={(e) => (eventData.category = e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Select>
                  </div>
                </FormItem>
              </div>
              <div>
                <span className="text-lg font-semibold">Foto de Capa</span>
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
                <Textarea
                  className="mt-2"
                  placeholder="..."
                  rows={windowSize.width > 1400 ? 13 : 6}
                  onChange={(e) => (eventData.description = e.target.value)}
                />
              </div>
            </div>
          </>
        </CommonLayout>
        <CommonLayout className="px-9" index="2. Local do Evento">
          <EventTypeForm
            className="w-full"
            currentTab={eventData.listingCategory}
            onTabChange={(e) => (eventData.listingCategory = e)}
            onChange={(e) => (eventData.localName = e.localName)}
          />
        </CommonLayout>
        <div
          className={`" ${
            windowSize.width > 1200 ? "col-span-2" : "col-span-1"
          } flex w-full justify-center"`}
        >
          <TicketForm
            defaultValue={ticketsList}
            onChange={(e) => {
              setticketList(e.components);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ButtonSecondary
          href="/criar-evento"
          className="mx-5 sm:mx-1 my-5 min-width-100"
        >
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

        <ButtonPrimary
          onClick={createEvent}
          className="mx-5 sm:mx-1 my-5 min-width-100"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
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
