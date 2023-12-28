import { Link } from "react-router-dom"
import { Star } from "@mui/icons-material"

import CompanyTypes from "../types/Company.types"
import JobAdsTypes from "../types/JobAds.types"

type CompanyBoxProps = {
  jobAds: JobAdsTypes[]
}

const CompanyBox = ({ _id, logo, name, score, jobAds }: CompanyTypes & CompanyBoxProps) => {
  return (
    <Link
      className={`bg-white text-jv-dark border border-solid border-jv-light w-52 p-2 flex flex-col rounded-md`}
      to={`/`}
      data-id={_id}
    >
      <div className={`w-20 h-20 rounded-md`}>
        <img
          className={`w-full h-full object-fill object-center rounded-md`}
          src={logo}
          alt={`لوگوی شرکت ${name}`}
          loading={`lazy`}
        />
      </div>
      <span className={`block dana-bold mt-4`}>
        {name || 'شرکت ناشناس'}
      </span>
      <div className={`badge pr-0 mt-3`}>
        <Star className={`text-jv-warning`} fontSize="small" />
        <span className={`inline-block h-3`}>
          {score}
        </span>
      </div>
      <span className={`badge ${jobAds?.length ? 'text-jv-primary' : ''} h-5 pr-0 mt-3`}>
        {
          (jobAds?.length || 0) > 0 ? `${jobAds?.length} آگهی شغلی` : 'بدون آگهی شغلی'
        }
        {
          (jobAds?.length || 0) > 0 ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-full stroke-jv-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          ) : null
        }
      </span>
      <button className={`btn btn-light hover-dark dana-bold w-full mt-3`}>
        دنبال کردن
      </button>
    </Link>
  )
}

export default CompanyBox