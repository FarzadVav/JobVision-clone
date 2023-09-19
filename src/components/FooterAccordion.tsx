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
        <span className={`mr-6`}>
          {title}
        </span>
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

export default AccordionWithToggle(FooterAccordion, 24)