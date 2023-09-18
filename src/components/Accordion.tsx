import { useEffect, useRef, useState } from "react";
import Title from "./Title"

type AccordionProps = {
  length: number;
  title: string;
  text: string;
}

const Accordion = ({ length, title, text }: AccordionProps) => {
  const [showText, setShowText] = useState<boolean>(length === 1)

  const accordionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (showText) {
      accordionRef.current ? accordionRef.current.style.maxHeight = `${accordionRef.current?.scrollHeight}px` : null
    } else {
      accordionRef.current ? accordionRef.current.style.maxHeight = '0' : null
    }
  }, [showText])

  return (
    <>
      <li
        className={`bg-white w-full h-12 flex justify-between items-center my-2 relative cursor-pointer
        first:mt-0 group sm:my-6 sm:h-16`}
        onClick={() => setShowText(prev => !prev)}
      >
        <div className={`bg-white border border-solid border-transparent w-12 h-16 hidden
          justify-center items-center absolute -right-16 top-0 bottom-0 group-hover:text-jv-primary
          text-2xl sm:flex ${showText ? 'text-jv-primary' : ''}`}>
          {length}
        </div>
        <Title withOutIcon>
          <span className={`w-[calc(100%-1.5rem)] truncate !text-sm !leading-loose group-hover:text-jv-primary
              ${showText ? 'text-jv-primary' : ''} sm:!text-base md:!text-xl sm:!leading-normal`}>
            {title}
          </span>
        </Title>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`svg-duration group-hover:stroke-jv-primary ${showText ? 'stroke-jv-primary' : ''} absolute
          left-0 w-4 h-4 mr-3 ${showText ? 'rotate-180 sm:-scale-y-100' : 'rotate-90'} sm:rotate-0 md:w-6 md:h-6`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </li>
      <p
        className={`cursor-text text-xs ${showText ? 'opacity-100 visible' : 'opacity-0 invisible'} text-justify !leading-relaxed
        sm:text-base`}
        ref={accordionRef}
      >
        <span className={`dana-bold cursor-text text-xs text-justify sm:text-base`}>{title}</span> : {text}
      </p>
    </>
  )
}

export default Accordion