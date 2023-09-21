import { ReactElement } from "react";
import { AutoAwesome } from "@mui/icons-material";

type TitleProps = {
  customClass?: string;
  children: ReactElement;
  withOutIcon?: boolean
}

const Title = ({ customClass, children, withOutIcon }: TitleProps) => {
  return (
    <div className={`title ${customClass || ''}`}>
      {
        !withOutIcon ? <AutoAwesome /> : null
      }
      {children}
    </div>
  )
}

export default Title