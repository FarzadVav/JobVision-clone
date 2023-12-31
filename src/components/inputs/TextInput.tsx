import { ReactNode, useState } from "react";
import { FieldError } from "react-hook-form";

type TextInputProps = {
  customClass?: string;
  register: {};
  placeholder: string;
  error?: FieldError;
  numeric?: boolean;
  children: ReactNode
}

const TextInput = ({ customClass, register, placeholder, error, numeric, children }: TextInputProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <div className={`input-wrapper`}>
      <div className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${customClass}`}>
        <input
          className={`input`}
          type="text"
          {...register}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          inputMode={numeric ? 'numeric' : 'text'}
        />
        <div className={`input-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
          {children}
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

export default TextInput