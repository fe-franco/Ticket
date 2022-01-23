import React, { FC, Fragment } from "react";

import LocationMarker from "components/AnyReactComponent/LocationMarker";
import Ticket from "components/HeroSearchForm/Ticket";
import GoogleMapReact from "google-map-react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionHero2ArchivePage from "components/SectionHero2ArchivePage/SectionHero2ArchivePage";

export interface ListingStayDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}


const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Descrição</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>
          VOLTAMOS!
         <br></br><br></br>
          Estamos muito felizes em anunciar nosso show de volta! E não podia ser em outro lugar. Dia 18/12 às 17:30 tem show da Tijolo no Giramundo.
          <br></br><br></br>
          Por aqui, você garante seu ingresso antecipadamente. As vendas antecipadas se encerram no dia 17/12 às 23:59. Após essa data, os ingressos serão vendidos apenas na porta do evento por R$25,00.
          <br></br><br></br>
          Esperamos a presença de todos vocês!  :D
          <br></br><br></br>
          ATENÇÃO: É OBRIGATÓRIA a apresentação do comprovante de vacinação (2 doses). Não será permitido entrar sem a apresentação do comprovante. Ficam mantidos todos os protocolos sanitários exigidos pelo município de São Bernardo do Campo, que são: Uso Obrigatório de máscara e medição de temperatura. 
          <br></br><br></br>
          Link para consulta do protocolo de prevenção de São Bernardo do Campo: Prevenção - São Bernardo (saobernardo.sp.gov.br)
          <br></br><br></br>
          Abertura da casa: 17:30
          <br></br><br></br>
          Show de abertura (Angie): 18:00 
          <br></br><br></br>
          Show: 18:30 


          </span>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            San Diego, CA, United States of America (SAN-San Diego Intl.)
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
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
    );
  };



  const renderSidebar = () => {
    return (
      <div className="listingSection__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">Ingressos</span>
        </div>

        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <Ticket
            fieldClassName="p-5"
            defaultValue={{
              guestAdults: 0,
              guestChildren: 0,
            }}
          />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$119 x 3 night</span>
            <span>$357</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Taxa</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$199</span>
          </div>
        </div>
        {/* SUBMIT */}
        <ButtonPrimary>Comprar ingresso</ButtonPrimary>
      </div>
    );
  };

  return (
    <div
      className={`nc-ListingStayDetailPage  ${className}`}
      data-nc-id="ListingStayDetailPage"
    >
      {/* SINGLE HEADER */}
      <>
        <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
        <SectionHero2ArchivePage className="lg:mt-2" />
        </header>
      </>

      {/* MAIn */}
      <main className="container mt-11 flex ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection2()}
          {renderSection7()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow">
          <div className="sticky top-24">{renderSidebar()}</div>
        </div>
      </main>

      {/* OTHER SECTION */}
      {!isPreviewMode && (
        <div className="container py-24 lg:py-32">
          {/* SECTION 1 */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderNewCategories
              heading="Veja esse outros eventos também"
              subHeading="Eventos de categorias semelhantes"
              categoryCardType="card5"
              itemPerRow={5}
              sliderStyle="style2"
            />
          </div>

          {/* SECTION */}
        </div>
      )}
    </div>
  );
};

export default ListingStayDetailPage;
