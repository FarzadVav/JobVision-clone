import { AddCircle } from "@mui/icons-material";
import { ReactNode, useEffect, useMemo, useState } from "react";
import tokenGenerator from "../../utils/tokenGenerator";

type ComboBoxProps = {
  customClass?: string;
  placeholder: string;
  error?: boolean;
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
    <div className={`w-full flex flex-col`}>
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
      <ul className={`w-full flex flex-col mt-3`}>
        {
          useMemo(() => {
            return list.length ? list.map(item => (
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
          }, [list])
        }
        {
          list.length ? (
            <li>
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
    </div>
  )
}

export default ComboBox