import { FC, useEffect, useRef, useState } from "react"
import AccordionTypes from "../types/Accordion.types";

const AccordionWithToggle = (Component: FC) => {
  const NewComponent = (props: Omit<AccordionTypes, 'toggle' | 'accordionRef' | 'toggleHandler'>) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const accordionRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
      if (toggle) {
        accordionRef.current ? accordionRef.current.style.maxHeight = `${accordionRef.current?.scrollHeight}px` : null
      } else {
        accordionRef.current ? accordionRef.current.style.maxHeight = '0' : null
      }
    }, [toggle])

    const toggleHandler = () => setToggle(prev => !prev)

    return <Component toggle={toggle} accordionRef={accordionRef} toggleHandler={toggleHandler} {...props} />
  }

  return NewComponent
}

export default AccordionWithToggle