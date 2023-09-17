import Title from "./Title"

type AccordionProps = {
  length: number;
  title: string;
  text: string;
}

const Accordion = ({ length, title, text }: AccordionProps) => {
  console.log(text);

  return (
    <li className={`w-full h-9 flex justify-between items-center relative cursor-pointer mt-6 first:mt-0
    sm:h-12 sm:mt-9 group`}>
      <div className={`bg-white border border-solid border-transparent w-9 h-9
      flex justify-center items-center absolute -right-12 top-0 bottom-0 rounded-full group-hover:text-jv-primary
      sm:w-12 sm:h-12 sm:-right-16 sm:text-2xl ${length === 33 ? '!bg-jv-primary !text-white' : ''}`}>
        {length}
      </div>
      <Title withOutIcon>
        <span className={`!text-xs group-hover:text-jv-primary sm:!text-base md:!text-xl`}>
          {title}
        </span>
      </Title>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`group-hover:stroke-jv-primary w-3 h-3 mr-3 sm:w-6 sm:h-6`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </li>
  )
}

export default Accordion