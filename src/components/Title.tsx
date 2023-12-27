import { ReactElement } from "react";
import { AutoAwesomeRounded } from "@mui/icons-material";

type TitleProps = {
  customClass?: string;
  children: ReactElement;
  withIcon?: boolean
}

const Title = ({ customClass, children, withIcon }: TitleProps) => {
  return (
    <div className={`title ${customClass || ''}`}>
      {
        withIcon ? <AutoAwesomeRounded /> : null
      }
      {children}
    </div>
  )
}

export default Title