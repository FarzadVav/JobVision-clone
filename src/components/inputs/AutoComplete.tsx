import { ReactNode, useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import { FieldError } from "react-hook-form";

import tokenGenerator from "../../utils/tokenGenerator";

type AutoCompleteProps = {
  customClass?: string;
  register: { name?: string };
  setValue: Function;
  placeholder: string;
  error?: FieldError;
  children: ReactNode;
  datas: string[];
}

const AutoComplete = ({ customClass, register, setValue, placeholder, error, children, datas }: AutoCompleteProps) => {
  const [focus, setFocus] = useState<boolean>(false)
  const [searchedDatas, setSearchedDatas] = useState<typeof datas>(datas)

  const searchedDatasHandler = (value: string) => {
    setSearchedDatas([])
    datas.map(data => {
      if (data.includes(value)) {
        setSearchedDatas(prev => ([...prev, data]))
      }
    })
  }

  return (
    <div className={`input-wrapper`}>
      <div className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${focus ? 'rounded-b-none !border-b-transparent' : ''} ${customClass}`}>
        <input
          className={`input`}
          type="text"
          {...register}
          placeholder={placeholder}
          autoComplete="off"
          onChange={event => searchedDatasHandler(event.target.value)}
          onFocus={event => {
            searchedDatasHandler(event.target.value)
            setFocus(true)
          }}
          onBlur={() => setFocus(false)}
        />
        <div className={`input-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
          <div className={`w-6 h-6 relative`}>
            <svg className={`absolute transition-transform !duration-150 ${focus ? 'opacity-0 -translate-y-5 invisible' : ''}`}>
              {children}
            </svg>
            <div onMouseDown={() => setValue(register.name, '', { shouldValidate: true })}>
              <CloseRounded className={`cursor-pointer absolute transition-transform !duration-150
              ${focus ? '' : 'opacity-0 translate-y-5 invisible'}`} />
            </div>
          </div>
        </div>
        <div className={`bg-jv-bright ring-1 ring-jv-light w-full flex flex-col items-center p-3 pl-2.5 rounded-b
      absolute top-12 right-0 ${focus ? '-translate-y-[1px]' : 'opacity-0 invisible translate-y-6'} z-10`}>
          <div className={`bg-jv-bright border-t border-l border-solid border-jv-light w-3 h-3 rotate-45
        absolute -top-1.5 z-10`}></div>
          <ul className={`list-scrollbar w-full max-h-72 pl-3 overflow-y-auto z-20`}>
            {
              searchedDatas.length ? searchedDatas.map(data => (
                <li
                  key={tokenGenerator()}
                  className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 pr-2 cursor-pointer
              hover:brightness-[0.97] last:border-none`}
                  onMouseDown={() => {
                    setValue(register.name, data, { shouldValidate: true })
                    setFocus(false)
                  }}
                >
                  {data}
                </li>
              )) : 'موردی برای نشان دادن وجود ندارد'
            }
          </ul>
        </div>
      </div>
      {
        error ? (
          <p className={`input-error`}>
            <span>
              *
            </span>
            <span>
              {error.message}
            </span>
          </p>
        ) : null
      }
    </div>
  )
}

export default AutoComplete