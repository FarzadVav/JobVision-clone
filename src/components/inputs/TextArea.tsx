import { ReactNode, useState } from "react";
import { FieldError } from "react-hook-form";

type TextAreaProps = {
  customClass?: string;
  register: {};
  placeholder: string;
  error?: FieldError;
  children: ReactNode
}

const TextArea = ({ customClass, register, placeholder, error, children }: TextAreaProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <div className={`input-wrapper`}>
      <div className={`textarea-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${customClass}`}>
        <textarea
          className={`textarea`}
          {...register}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <div className={`textarea-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
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

export default TextArea