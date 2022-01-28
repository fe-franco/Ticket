import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Logo from "shared/Logo/Logo";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Publique seu evento conosco!
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Com a experiencia mais direta de criar um evento.<br></br> Em apenas 3 passos,
          crie, anuncie, e começe a venda de seus ingressos!
          <br></br>Nunca foi tão fácil, simples e rápido.
        </span>
        <ButtonPrimary className="mt-6 sm:mt-11">
          Vire um produtor
        </ButtonPrimary>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
