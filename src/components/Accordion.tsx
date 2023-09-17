import { useState } from "react";
import Title from "./Title"

type AccordionProps = {
  length: number;
  title: string;
  text: string;
}

const Accordion = ({ length, title, text }: AccordionProps) => {
  const [showText, setShowText] = useState<boolean>(length === 1)

  return (
    <li className={`w-full ${showText ? 'h-max' : 'h-9 sm:h-12'} flex flex-col justify-center items-center relative
    cursor-pointer mt-6 first:mt-0 sm:mt-9 group`}>
      <div
        className={`w-full h-full flex justify-between items-center`}
        onClick={() => setShowText(prev => !prev)}
      >
        <div className={`bg-white border border-solid border-transparent w-9 h-9
        flex justify-center items-center absolute -right-12 top-0 bottom-0 rounded-full group-hover:text-jv-primary
        sm:w-12 sm:h-12 sm:-right-16 sm:text-2xl ${showText ? 'text-jv-primary' : ''}`}>
          {length}
        </div>
        <Title withOutIcon>
          <span className={`!text-sm group-hover:text-jv-primary ${showText ? 'text-jv-primary' : ''}
          sm:!text-base md:!text-xl`}>
            {title}
          </span>
        </Title>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`svg-duration group-hover:stroke-jv-primary ${showText ? 'stroke-jv-primary' : ''}
        w-4 h-4 mr-3 ${showText ? '-scale-y-100' : ''} sm:w-6 sm:h-6`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <p className={`transition-opacity duration-500 cursor-text text-xs sm:text-base
      ${showText ? 'static pt-6' : 'absolute opacity-0 invisible select-none'}`}>
        {text}
      </p>
    </li>
  )
}

export default Accordion