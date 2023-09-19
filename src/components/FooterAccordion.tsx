import AccordionWithToggle from "../hoc/AccordionWithToggle"
import AccordionTypes from "../types/Accordion.types"
import Title from "./Title"

const FooterAccordion = ({ toggle, accordionRef, toggleHandler, length, title, text }: AccordionTypes) => {
  return (
    <li className={`bg-jv-dark brightness-110 w-full rounded-md px-6 py-1 mt-2 first:mt-0 cursor-pointer`}>
      <div
        className={`h-16 flex items-center sm:h-12`}
        onClick={toggleHandler}
      >
        <span className={``}>
          {length}
        </span>
        <Title withOutIcon>
          <span className={`!text-base !dana-base mr-6`}>
            {title}
          </span>
        </Title>
      </div>
      <p
        className={`border-solid border-[#ffffff10] ${toggle ? 'border-t py-3' : ''} 
        cursor-text overflow-hidden`}
        ref={accordionRef}
      >
        {text}
      </p>
    </li>
  )
}

const LinksAccordion = ({ toggle, accordionRef, toggleHandler, title, text }: AccordionTypes) => {
  return (
    <li className={`bg-jv-dark brightness-110 w-full rounded-md px-6 py-1 mt-2 first:mt-0 cursor-pointer`}>
      <div
        className={`h-12 flex justify-between items-center`}
        onClick={toggleHandler}
      >
        <Title withOutIcon>
          <span className={`!text-base !dana-base mr-6`}>
            {title}
          </span>
        </Title>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`svg-duration w-4 h-4 ${toggle ? '-scale-y-100' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <p
        className={`border-solid border-[#ffffff10] ${toggle ? 'border-t py-3' : ''} 
        cursor-text overflow-hidden`}
        ref={accordionRef}
      >
        {text}
      </p>
    </li>
  )
}

export const FooterLinksAccordion = AccordionWithToggle(LinksAccordion, 24)

export default AccordionWithToggle(FooterAccordion, 24)