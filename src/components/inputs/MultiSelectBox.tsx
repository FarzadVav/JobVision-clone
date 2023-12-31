import { useState, useRef, useEffect } from "react";
import { CloseRounded, DoneRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import { FieldError, Merge } from "react-hook-form";

import tokenGenerator from "../../utils/tokenGenerator";
import useFirstMount from "../../hooks/useFirstMount";

type MultiSelectBoxProps = {
  customClass?: string;
  placeholder: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  datas: string[];
  onChangeList: (list: string[]) => void;
  resetHandler: Function;
}

const MultiSelectBox = ({ customClass, placeholder, error, datas, onChangeList, resetHandler }: MultiSelectBoxProps) => {
  const [focus, setFocus] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [selectedList, setSelectedList] = useState<string[]>([])
  const [searchedDatas, setSearchedDatas] = useState<typeof datas>(datas)
  const firstMount = useFirstMount()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (firstMount) {
      window.addEventListener('click', () => {
        setFocus(false)
      })
    }

    onChangeList(selectedList)
  }, [selectedList])

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
      <div
        className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${focus ? 'rounded-b-none !border-b-transparent' : ''} ${customClass}`}
        onClick={event => {
          inputRef.current?.focus()
          setFocus(true)
          event.stopPropagation()
        }}
      >
        <input
          className={`input`}
          type="text"
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onChange={(event) => {
            setValue(event.target.value)
            searchedDatasHandler(event.target.value)
          }}
          onFocus={event => searchedDatasHandler(event.target.value)}
        />
        <div className={`input-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
          <div className={`w-6 h-6 relative`}>
            <svg className={`absolute transition-transform !duration-150 ${focus ? 'opacity-0 -translate-y-5 invisible' : ''}`}>
              <KeyboardArrowDownRounded />
            </svg>
            <div
              onClick={event => {
                event.stopPropagation()
                setFocus(false)
              }}
            >
              <CloseRounded className={`cursor-pointer absolute transition-transform !duration-150 hover:text-jv-danger
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
              selectedList.length ? (
                <li className={`w-full flex items-center justify-end`}>
                  <div
                    className={`btn-sm btn-danger`}
                    onClick={() => {
                      setValue('')
                      resetHandler()
                      setSelectedList([])
                    }}
                  >
                    پاک کردن
                  </div>
                </li>
              ) : null
            }
            {
              searchedDatas.length ? searchedDatas.map(data => (
                <li
                  key={tokenGenerator()}
                  className={`bg-jv-bright border-b border-solid border-jv-light w-full py-2 pr-2 cursor-pointer flex items-center group/verify hover:brightness-[0.97] last:border-none`}
                  onMouseDown={() => {
                    if (selectedList.includes(data)) {
                      setSelectedList(prev => prev.filter(item => item !== data))
                    } else {
                      setSelectedList(prev => ([...prev, data]))
                    }
                    setValue('')
                  }}
                >
                  <DoneRounded
                    className={`text-jv-primary ${selectedList.includes(data) ? '' : '!hidden'} ml-3  group-hover/verify:text-jv-danger`}
                    fontSize="small"
                  />
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
      {
        !error && selectedList.length ? (
          <span className={`text-sm mt-3`}>
            {selectedList.length} مورد اضافه شده
          </span>
        ) : null
      }
    </div>
  )
}

export default MultiSelectBox