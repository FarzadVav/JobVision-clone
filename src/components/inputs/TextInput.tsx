import { ReactNode, useState } from "react";

type TextInputProps = {
  customClass?: string;
  register: {};
  placeholder: string;
  error?: boolean;
  children: ReactNode
}

const TextInput = ({ customClass, register, placeholder, error, children }: TextInputProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <div className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${customClass}`}>
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
    </div>
  )
}

export default TextInput