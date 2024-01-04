import { useNavigate } from "react-router-dom"
import { Star } from "@mui/icons-material"

import JobAdsTypes from "../types/JobAds.types"
import useJobAds from "../hooks/store/useJobAds"
import { useEffect } from "react"

const JobAdsBox = ({ jobAd }: { jobAd: JobAdsTypes }) => {
  const redirect = useNavigate()
  const { singleJobAd } = useJobAds(s => s)

  const selected = singleJobAd?._id === jobAd._id

  useEffect(() => {
    if (!['/single', '/jobs'].includes(location.pathname) && Object.entries(singleJobAd || {}).length) {
      useJobAds.setState({ singleJobAd: {} as JobAdsTypes })
    }
  }, [location.pathname])

  const prevCategoriesHandler = () => {
    const prevCategories: string[] = JSON.parse(localStorage.getItem('prevCategories') || '[]')

    if (prevCategories.length >= 100) prevCategories.shift()

    let hasIdInPrevCategories: boolean = false
    prevCategories.forEach((prev: string) => {
      if (prev === jobAd.category._id) {
        hasIdInPrevCategories = true
      }
    })
    if (!hasIdInPrevCategories) {
      prevCategories.push(jobAd.category._id || '')
      localStorage.setItem('prevCategories', JSON.stringify(prevCategories))
    }
  }

  const selectJobAdHandler = () => {
    useJobAds.setState({ singleJobAd: jobAd })
    if (window.innerWidth >= 1024) {
      !window.location.pathname.includes('/jobs') && redirect(`/jobs?id=${jobAd._id}`)
    } else {
      redirect('/single')
    }
  }

  return (
    <article
      className={`bg-white w-full group`}
      onClick={() => {
        prevCategoriesHandler()
        selectJobAdHandler()
      }}
      data-id={jobAd._id}
      data-category={jobAd.category}
    >
      <div className={`text-jv-dark border border-solid border-jv-light w-full h-full flex flex-col justify-between rounded-md cursor-pointer p-3 ${selected ? 'lg:border-jv-primary lg:text-jv-primary' : ''}`}>
        <div className={`flex`}>
          <div className={`col-span-3 flex flex-col items-center`}>
            <div className={`w-20 h-20 flex justify-center items-center rounded-md`}>
              <img
                className={`w-full h-full object-fill object-center rounded-md`}
                src={jobAd.company.logo}
                alt={`لوگوی شرکت ${jobAd.company.name}`}
                loading={`lazy`}
              />
            </div>
          </div>
          <div className={`col-span-9 flex flex-col px-3`}>
            <span className={`dana-bold inline-block max-h-[4.5rem] overflow-hidden lg:text-sm xl:text-base`}>
              {jobAd.title}
            </span>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                {jobAd.company.name}
              </span>
              {
                jobAd.isRemote ? (
                  <span className={`italic border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    دورکاری
                  </span>
                ) : null
              }
              {
                jobAd.company.knowledgeBased ? (
                  <span className={`italic border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                    امریه سربازی
                  </span>
                ) : null
              }
            </div>
            <div className={`flex items-center mt-2`}>
              <span className={`text-xs`}>
                {jobAd.company.province.name}، {jobAd.company.city.name}
              </span>
              <span className={`text-jv-success border-r border-solid border-jv-light text-xs pr-2 mr-2`}>
                {
                  jobAd.salary
                    ? `${jobAd.salary.from} ${jobAd.salary.to ? `تا ${jobAd.salary.to} تومان` : 'تومان'}`
                    : 'حقوق توافقی'
                }
              </span>
            </div>
          </div>
        </div>
        <div className={`border-t border-dashed border-jv-light col-span-12 flex justify-between items-center pt-3 mt-5
        ${selected ? 'lg:border-jv-primary' : ''}`}>
          {
            jobAd.isUrgent ? (
              <span className={`badge badge-danger`}>
                فوری
              </span>
            ) : (
              <span className={`text-xs h-3`}>
                {new Date(jobAd.created_at || '').toLocaleDateString('fa-ir')}
              </span>
            )
          }
          {
            jobAd.company.score ? (
              <div className={`badge ml-auto ${selected ? 'lg:ml-0' : 'lg:opacity-0 group-hover:opacity-100'}`}>
                <Star className={`text-jv-warning`} fontSize="small" />
                <span className={`text-jv-dark text-xs inline-block h-3`}>
                  {jobAd.company.score}
                </span>
              </div>
            ) : null
          }
          <button
            className={`btn-sm btn-success ${selected ? 'lg:hidden' : ''}`}
          >
            ارسال رزومه
          </button>
        </div>
      </div>
    </article>
  )
}

export default JobAdsBox