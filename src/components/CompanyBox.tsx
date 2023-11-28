import { Link } from "react-router-dom"
import { Star } from "@mui/icons-material"

import CompanyTypes from "../types/company.types"

const CompanyBox = ({ id, logo, name, score, jobs }: CompanyTypes) => {
  return (
    <Link
      className={`bg-white text-jv-dark border border-solid border-jv-light w-52 p-2 flex flex-col rounded-md`}
      to={`/`}
      data-id={id}
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
        {name}
      </span>
      <div className={`badge pr-0 mt-2`}>
        <Star className={`text-jv-warning`} fontSize="small" />
        <span className={`inline-block h-3`}>
          {score}
        </span>
      </div>
      <span className={`badge text-jv-primary pr-0 mt-2`}>
        {
          jobs.length > 0 ? `${jobs.length} آگهی شغلی` : 'بدون آگهی شغلی'
        }
        {
          jobs.length > 0 ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 stroke-jv-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          ) : null
        }
      </span>
      <button className={`btn btn-light hover-dark dana-bold w-full mt-4`}>
        دنبال کردن
      </button>
    </Link>
  )
}

export default CompanyBox