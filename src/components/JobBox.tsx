import { Link } from "react-router-dom"

type JobBoxTypes = {
  isUrgent?: boolean
}

const JobBox = ({ isUrgent }: JobBoxTypes) => {
  return (
    <article className={`bg-white w-full p-2 hover:scale-[1.02] hover:-rotate-[0.3deg] md:w-1/2 lg:w-1/3`}>
      <Link
        className={`text-jv-dark border border-solid border-jv-light w-full h-full flex flex-col rounded-md p-3`}
        to={`/jobs`}
      >
        <div className={`flex`}>
          <div className={`col-span-3 flex flex-col items-center`}>
            <div className={`bg-jv-light w-20 h-20 rounded-md`}>
            </div>
            <div className={`flex justify-center items-center text-xs mt-2`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className={`w-4 h-4 fill-jv-success`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span className={`text-jv-success inline-block w-4 h-2 text-xs mx-1`}>
                4.9
              </span>
            </div>
          </div>
          <div className={`col-span-9 flex flex-col px-3`}>
            <span className={`dana-bold lg:text-sm xl:text-base`}>
              کارشناس نرم افزار و توسعه گر فرانت اند (Front-End Web Developer)
            </span>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                ایران بابا
              </span>
              <span className={`italic border-r border-solid border-[#00000015] text-xs pr-2 mr-2`}>
                امکان دورکاری
              </span>
            </div>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                تهران فرشته
              </span>
              <span className={`text-jv-success brightness-75 border-r border-solid border-[#00000015] text-xs pr-2 mr-2`}>
                30 - 40 میلیون
              </span>
            </div>
          </div>
        </div>
        <div className={`border-t border-dashed border-jv-light col-span-12 flex justify-between items-center pt-3 mt-5`}>
          {
            isUrgent ? (
              <span className={`badge badge-danger`}>
                فوری
              </span>
            ) : (
              <span className={`text-xs italic opacity-75`}>
                39 روز پیش
              </span>
            )
          }
          <button
            className={`btn-sm btn-success`}
          >
            ارسال رزومه
          </button>
        </div>
      </Link>
    </article>
  )
}

export default JobBox