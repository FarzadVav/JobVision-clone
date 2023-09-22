import { ReactNode, useState } from "react";

type AutoCompleteProps = {
  customClass?: string;
  register: {};
  placeholder: string;
  error?: boolean;
  children: ReactNode
}

const AutoComplete = ({ customClass, register, placeholder, error, children }: AutoCompleteProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <div className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${focus ? 'rounded-b-none !border-b-transparent' : ''} ${customClass}`}>
      <input
        className={`input`}
        type="text"
        {...register}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className={`input-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
        {children}
      </div>
      <div className={`bg-jv-bright ring-1 ring-jv-light w-full flex flex-col items-center p-3 pl-2.5 rounded-b
      absolute top-12 right-0 ${focus ? '-translate-y-[1px]' : 'opacity-0 invisible translate-y-6'} z-10`}>
        <div className={`bg-jv-bright border-t border-l border-solid border-jv-light w-3 h-3 rotate-45
        absolute -top-1.5 z-10`}></div>
        <ul className={`list-scrollbar w-full max-h-72 pl-3 overflow-y-auto z-20`}>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 cursor-pointer hover:brightness-[0.97]`}>Lorem, ipsum dolor.</li>
          <li className={`bg-jv-bright w-full py-2 cursor-pointer hover:brightness-[0.97] pb-1`}>Lorem, ipsum dolor.</li>
        </ul>
      </div>
    </div>
  )
}

export default AutoComplete