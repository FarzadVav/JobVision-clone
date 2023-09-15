import { ReactElement } from "react";

type TitleTypes = {
  customClass?: string;
  centered?: boolean;
  children: ReactElement;
  withOutIcon?: boolean
}

const Title = ({ customClass, centered, children, withOutIcon }: TitleTypes) => {
  return (
    <div className={`title ${customClass || ''} ${centered ? 'justify-center' : ''}`}>
      {
        !withOutIcon ? (
          <svg viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0L7.63636 3.63636L4 5L7.63636 6.36364L9 10L10.3636 6.36364L14 5L10.3636 3.63636L9 0Z" fill="#5660F2" />
            <path d="M7 19L5.09091 24.0909L0 26L5.09091 27.9091L7 33L8.90909 27.9091L14 26L8.90909 24.0909L7 19Z" fill="#5660F2" />
            <path d="M24 0.333313L20 11L9.33334 15L20 19L24 29.6666L28 19L38.6667 15L28 11L24 0.333313Z" fill="#5660F2" />
          </svg>
        ) : null
      }
      {children}
    </div>
  )
}

export default Title