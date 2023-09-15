import { ReactNode } from "react"

type HonorBoxTypes = {
  icon: ReactNode;
  count: number;
  text: ReactNode
}

const HonorBox = ({ icon, count, text }: HonorBoxTypes) => {
  return (
    <div className={`w-1/2 flex flex-col justify-center items-center md:w-max`}>
      {icon}
      <span className={`dana-bold text-xs sm:text-[1.2rem] mt-4`}>
        {count.toLocaleString()} +
      </span>
      <span className={`dana-bold text-sm sm:text-xl mt-2.5`}>
        {text}
      </span>
    </div>
  )
}

export default HonorBox