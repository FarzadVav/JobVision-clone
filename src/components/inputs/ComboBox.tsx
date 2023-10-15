import { AddCircle } from "@mui/icons-material";
import { ReactNode, useState } from "react";

type ComboBoxProps = {
  customClass?: string;
  placeholder: string;
  error?: boolean;
  list: string[];
  addItemHandler: (item: string) => void
  children: ReactNode
}

const ComboBox = ({ customClass, placeholder, error, list, addItemHandler, children }: ComboBoxProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  console.log(list);

  return (
    
    <div className={`input-bg group ${error ? 'border-jv-danger hover:border-jv-danger' : (focus && !error) ? 'border-jv-primary' : ''} ${customClass}`}>
      <input
        className={`input-with-btn`}
        type="text"
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className={`input-icon ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}>
        {children}
      </div>
      <button
        className={`input-btn ${error ? 'text-jv-danger group-hover:text-jv-danger' : (focus && !error) ? 'text-jv-primary' : 'group-hover:text-jv-primary'}`}
        onClick={event => {
          addItemHandler(event.currentTarget.value)
        }}
      >
        <AddCircle />
      </button>
    </div>
  )
}

export default ComboBox