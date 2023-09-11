import { ChangeEvent, ReactNode, useState } from "react";

type TextInputProps = {
  customClass?: string;
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  children: ReactNode
}

const TextInput = ({ customClass, value, setValue, placeholder, children }: TextInputProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <div className={`input-bg ${focus ? 'border-jv-primary' : ''} ${customClass}`}>
      <input
        className={`input`}
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className={`input-icon ${focus ? 'text-jv-primary' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default TextInput