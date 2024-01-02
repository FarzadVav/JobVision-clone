import Dialog from './Dialog';

type ActionDialogTypes = {
  show: boolean;
  closeHandler: () => void;
  text: string;
  action: () => void
}

const ActionDialog = ({ show, closeHandler, text, action }: ActionDialogTypes) => {
  return (
    <Dialog
      show={show}
      closeHandler={closeHandler}
    >
      <div className={`bg-white w-[640px] flex flex-col justify-center items-center p-6 rounded`}>
        <p className={`text-xl text-center leading-relaxed`}>
          {text}
        </p>
        <div className={`w-full flex justify-center items-center mt-6`}>
          <button
            className={`btn btn-danger`}
            type={`submit`}
            onClick={() => {
              action()
              closeHandler()
            }}
          >
            تایید
          </button>
          <button
            className={`btn btn-out-primary mr-1.5`}
            type={`submit`}
            onClick={closeHandler}
          >
            خیر
          </button>
        </div>
      </div>
    </Dialog >
  )
}

export default ActionDialog