import { useNavigate } from "react-router-dom"
import { Star } from "@mui/icons-material"

import JobAdsTypes from "../types/JobAds.types"

const JobBox = (
  { id, category, title, company, city, location, salary, remote, isUrgent, createAt, selected }: JobAdsTypes
) => {
  const redirect = useNavigate()

  return (
    <article
      className={`bg-white w-full group`}
      data-id={id}
      data-category={category}
    >
      <div
        className={`border border-solid w-full h-full flex flex-col justify-between rounded-md cursor-pointer p-3 ${selected ? 'border-jv-primary text-jv-primary' : 'border-jv-light text-jv-dark'}`}
        onClick={() => {
          if (!window.location.pathname.includes('/jobs')) {
            redirect(`/jobs?id=${id}`)
          }
        }}
      >
        <div className={`flex`}>
          <div className={`col-span-3 flex flex-col items-center`}>
            <div className={`w-20 h-20 flex justify-center items-center rounded-md`}>
              <img
                className={`w-full h-full object-fill object-center rounded-md`}
                src={company.logo}
                alt={`لوگوی شرکت ${company.name}`}
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
                {company.name}
              </span>
              {
                remote ? (
                  <span className={`italic border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    دورکاری
                  </span>
                ) : null
              }
              {
                company.knowledgeBased ? (
                  <span className={`italic border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    امریه سربازی
                  </span>
                ) : null
              }
            </div>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                {city}، {location}
              </span>
              <span className={`text-jv-success border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                {
                  typeof salary === 'number' ? `${salary} میلیون`
                    : salary === null ? 'حقوق توافقی'
                      : salary?.length ? salary?.map((price, index) => {
                        if (index > 0) {
                          return ` تا ${price} میلیون`
                        } else {
                          return `${price}`
                        }
                      }) : null
                }
              </span>
            </div>
          </div>
        </div>
        <div className={`border-t border-dashed col-span-12 flex justify-between items-center pt-3 mt-5
        ${selected ? 'border-jv-primary' : 'border-jv-light'}`}>
          {
            isUrgent ? (
              <span className={`badge badge-danger`}>
                فوری
              </span>
            ) : (
              <span className={`text-xs h-3`}>
                {createAt.toLocaleDateString('fa-ir').split('/').reverse().join(' / ')}
              </span>
            )
          }
          {
            company.score ? (
              <div className={`badge ${selected ? 'mr-auto' : 'ml-auto lg:opacity-0 group-hover:opacity-100'}`}>
                <Star className={`text-jv-warning`} fontSize="small" />
                <span className={`text-jv-dark text-xs inline-block h-3`}>
                  {company.score}
                </span>
              </div>
            ) : null
          }
          {
            !selected && (
              <button
                className={`btn-sm btn-success`}
              >
                ارسال رزومه
              </button>
            )
          }
        </div>
      </div>
    </article>
  )
}

export default JobBox