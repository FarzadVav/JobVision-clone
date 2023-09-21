import { useRef } from "react"
import AccordionWithToggle from "../hoc/AccordionWithToggle"
import AccordionTypes from "../types/Accordion.types"
import Title from "./Title"
import { KeyboardCapslockRounded } from "@mui/icons-material"

const Accordion = ({ toggle, accordionRef, setToggle, toggleHandler, length, title, text }: AccordionTypes) => {
  const accordionParrentRef = useRef<HTMLLIElement>(null)

  window.addEventListener('scroll', () => {
    if (
      ((accordionParrentRef.current?.getBoundingClientRect().top || 0) <= (window.innerHeight / 1.6))
      && length === 1
    ) {
      setToggle(true)
    }
  })

  return (
    <>
      <li
        className={`bg-white w-full h-12 flex justify-between items-center my-2 relative ${length !== 1 ? 'cursor-pointer' : ''}
        group sm:my-6 sm:h-16 first-of-type:mt-0 last-of-type:mb-0`}
        ref={accordionParrentRef}
        onClick={() => length !== 1 && toggleHandler()}
      >
        <div className={`bg-white border border-solid border-transparent w-12 h-16 hidden
          justify-center items-center absolute -right-16 top-0 bottom-0 group-hover:text-jv-primary
          text-2xl sm:flex ${toggle ? 'text-jv-primary' : ''}`}>
          {length}
        </div>
        <Title withOutIcon>
          <span className={`w-[calc(100%-2rem)] truncate !text-sm !leading-loose group-hover:text-jv-primary
              ${toggle ? 'text-jv-primary' : ''} sm:!text-base md:!text-xl sm:!leading-normal`}>
            {title}
          </span>
        </Title>
        <KeyboardCapslockRounded
          className={`svg-duration group-hover:text-jv-primary ${toggle ? 'text-jv-primary' : ''} absolute
          left-0 w-4 h-4 ${toggle ? 'scale-y-100' : '-scale-y-100'} md:w-7 md:h-7`}
        />
      </li>
      <p
        className={`cursor-text text-xs ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}
        text-justify !leading-relaxed sm:text-base`}
        ref={accordionRef}
      >
        <span className={`dana-bold cursor-text text-xs text-justify sm:text-base`}>{title}</span> : {text}
      </p>
    </>
  )
}

export default AccordionWithToggle(Accordion)