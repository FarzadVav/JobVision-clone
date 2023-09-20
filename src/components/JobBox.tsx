import { Link } from "react-router-dom"
import { Star } from "@mui/icons-material"

import JobTypes from "../types/Job.types"

const JobBox = ({ id, categories, title, company, city, location, salary, remote, isUrgent }: JobTypes) => {
  return (
    <article
      className={`bg-white w-full group`}
      data-id={id}
      data-category={categories}
    >
      <Link
        className={`text-jv-dark border border-solid border-jv-light w-full h-full flex flex-col justify-between rounded-md p-3`}
        to={`/jobs`}
      >
        <div className={`flex`}>
          <div className={`col-span-3 flex flex-col items-center`}>
            <div className={`w-20 h-20 flex justify-center items-center rounded-md`}>
              <img
                className={`w-full h-full object-fill object-center rounded-md`}
                src={company.logo}
                alt={`لوگوی شرکت ${company.title}`}
                loading={`lazy`}
              />
            </div>
          </div>
          <div className={`col-span-9 flex flex-col px-3`}>
            <span className={`dana-bold inline-block max-h-[4.5rem] overflow-hidden lg:text-sm xl:text-base`}>
              {title}
            </span>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                {company.title}
              </span>
              {
                remote ? (
                  <span className={`italic border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    امکان دورکاری
                  </span>
                ) : null
              }
            </div>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                {city} {location}
              </span>
              {
                typeof salary === 'number' ? (
                  <span className={`text-jv-success border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    {salary} میلیون
                  </span>
                ) : salary?.length ? (
                  <span className={`text-jv-success border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    {salary?.map((price, index) => {
                      if (index > 0) {
                        return ` - ${price}`
                      } else {
                        return price
                      }
                    })} میلیون
                  </span>
                ) : (
                  <span className={`italic border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    حقوق تواقفی
                  </span>
                )
              }
            </div>
          </div>
        </div>
        <div className={`border-t border-solid border-jv-light col-span-12 flex justify-between items-center pt-3 mt-5`}>
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
          {
            company.score ? (
              <div className={`badge ml-auto lg:opacity-0 group-hover:opacity-100`}>
                <Star className={`text-jv-warning`} fontSize="small" />
                <span className={`text-jv-dark inline-block h-3`}>
                  {company.score}
                </span>
              </div>
            ) : null
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