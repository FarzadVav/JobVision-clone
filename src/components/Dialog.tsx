import { CloseRounded } from "@mui/icons-material";
import { ReactNode } from "react";
import { createPortal } from "react-dom"

type DialogTypes = {
  show: boolean;
  closeHandler: () => void;
  children: ReactNode
}

const Dialog = ({ show, closeHandler, children }: DialogTypes) => {
  if (show) {
    return createPortal(
      <>
        <div
          className={`bg-black bg-opacity-5 backdrop-blur-2xl w-full h-screen fixed top-0 right-0 z-50 flex justify-center items-center p-6 sm:p-12`}
          onClick={closeHandler}
        >
          <button
            className={`btn-sm absolute top-3 left-1 sm:hidden`}
            onClick={closeHandler}
            type='button'
          >
            <CloseRounded className={`text-white`} />
          </button>
          <div
            className={`max-w-full max-h-full flex justify-center items-center`}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </>,
      document.body
    )
  } else {
    return null
  }
}

export default Dialog