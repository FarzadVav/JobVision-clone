import { RefObject } from "react";

type AccordionTypes = {
  length: number;
  title: string;
  text: string;
  toggle: boolean;
  setToggle: (prop: boolean) => void;
  accordionRef: RefObject<HTMLParagraphElement>;
  toggleHandler: () => void;
}

export default AccordionTypes