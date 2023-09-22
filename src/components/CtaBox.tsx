import { Link } from "react-router-dom"

import Title from "./Title"

type CtaBoxProps = {
  id: string;
  src: string;
  title: string;
  text: string;
  btn: string;
}

const CtaBox = ({ id, src, title, text, btn }: CtaBoxProps) => {
  return (
    <Link
      id={id}
      className={`bg-jv-bright w-full flex flex-col justify-center items-center rounded-md p-3 lg:p-6 lg:justify-start lg:flex-row lg:w-1/2`}
      to={'/'}
    >
      <img
        src={src}
      />
      <div className={`flex flex-col justify-center items-center mt-5 lg:mt-0 lg:mr-5 lg:items-start`}>
        <Title
          customClass={`justify-center lg:justify-start`}
          withOutIcon
        >
          <h5 className={`!text-xl`}>
            {title}
          </h5>
        </Title>
        <p className={`mt-3 text-center lg:text-right`}>
          {text}
        </p>
        <button className={`btn btn-primary w-full mt-4 lg:w-max`}>
          {btn}
        </button>
      </div>
    </Link>
  )
}

export default CtaBox