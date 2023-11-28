import { KeyboardArrowLeftRounded } from "@mui/icons-material"
import AccordionWithToggle from "../hoc/AccordionWithToggle"
import AccordionTypes from "../types/accordion.types"
import Title from "./Title"

const FooterAccordion = ({ toggle, accordionRef, toggleHandler, length, title, text }: AccordionTypes) => {
  return (
    <li className={`bg-jv-dark brightness-110 w-full rounded-md px-6 py-1 mt-2 first:mt-0 cursor-pointer`}>
      <div
        className={`h-12 flex items-center`}
        onClick={toggleHandler}
      >
        <span className={``}>
          {length}
        </span>
        <Title withOutIcon>
          <span className={`!text-base truncate !dana-base mr-6`}>
            {title}
          </span>
        </Title>
      </div>
      <p
        className={`border-solid border-[#ffffff10] ${toggle ? 'border-t py-3' : ''} 
        cursor-text overflow-hidden text-sm`}
        ref={accordionRef}
      >
        <span className={`decoration-[#ffffff50] underline sm:hidden`}>{title} </span> {text}
      </p>
    </li>
  )
}

const LinksAccordion = ({ toggle, accordionRef, toggleHandler, title, text }: AccordionTypes) => {
  return (
    <li className={`bg-jv-dark brightness-110 w-full rounded-md pl-3 pr-6 py-1 mt-2 first:mt-0 cursor-pointer`}>
      <div
        className={`h-12 flex justify-between items-center`}
        onClick={toggleHandler}
      >
        <Title withOutIcon>
          <span className={`!text-base !dana-base`}>
            {title}
          </span>
        </Title>
        <KeyboardArrowLeftRounded className={toggle ? 'rotate-90' : ''} />
      </div>
      <div
        className={`border-solid border-[#ffffff10] ${toggle ? 'border-t py-3' : ''} overflow-hidden`}
        ref={accordionRef}
      >
        {text}
      </div>
    </li>
  )
}

export const FooterLinksAccordion = AccordionWithToggle(LinksAccordion, 24)

export default AccordionWithToggle(FooterAccordion, 24)