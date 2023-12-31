import { ReactNode, useEffect, useState } from "react";
import { AddCircle } from "@mui/icons-material";
import { FieldError, Merge } from "react-hook-form";

import tokenGenerator from "../../utils/tokenGenerator";

type ComboBoxProps = {
  customClass?: string;
  placeholder: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  onChangeList: (item: string[]) => void;
  resetHandler: Function;
  children: ReactNode
}

const ComboBox = ({ customClass, placeholder, error, onChangeList, resetHandler, children }: ComboBoxProps) => {
  const [focus, setFocus] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<string[]>([])

  useEffect(() => onChangeList(list), [list])

  return (
    <div className={`input-wrapper`}>
      <div className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${customClass}`}>
        <input
          className={`combo`}
          type="text"
          value={value}
          onChange={event => setValue(event.currentTarget.value)}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <div className={`input-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
          {children}
        </div>
        <div
          className={`combo-btn ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}
          onClick={() => {
            if (value.length) {
              setList(prev => ([...prev, value]))
              setValue('')
            }
          }}
        >
          <AddCircle />
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
        !error ? (
          <ul className={`w-full flex flex-col mt-3`}>
            {
              list.length ? list.map(item => (
                <li key={tokenGenerator()}>
                  {item}
                </li>
              )) : (
                <li>
                  <span className={`text-sm`}>
                    آیتمی اضافه نشده است
                  </span>
                </li>
              )
            }
            {
              list.length ? (
                <li>
                  <span className={`text-sm mt-3`}>
                    {list.length} مورد اضافه شده
                  </span>
                  <div
                    className={`btn-sm btn-danger mt-2`}
                    onClick={() => {
                      setList([])
                      resetHandler()
                    }}
                  >
                    حدف همه
                  </div>
                </li>
              ) : null
            }
          </ul>
        ) : null
      }
    </div>
  )
}

export default ComboBox