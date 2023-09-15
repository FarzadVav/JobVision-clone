import { Link } from "react-router-dom"

const CompanyBox = () => {
  return (
    <Link
      className={`text-jv-dark border border-solid border-jv-light w-52 p-2 flex flex-col rounded-md`}
      to={`/jobs`}
    >
      <div className={`w-20 h-20 rounded-md`}>
        <img
          className={`w-full h-full object-fill object-center rounded-md`}
          src={`https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=834153&width=70&height=70`}
          alt={`لوگوی شرکت ماکسیم`}
        />
      </div>
      <span className={`block dana-bold mt-4`}>
        تاکسی ماکسیم
      </span>
      <div className={`badge pr-0 mt-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className={`fill-jv-warning w-5 h-5 mr-0`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <span className={`inline-block h-3`}>
          4.5
        </span>
      </div>
      <span className={`badge text-jv-primary pr-0 mt-2`}>
        10 آگهی شغلی
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 stroke-jv-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
      </span>
      <button className={`btn btn-light dana-bold mt-4`}>
        دنبال کردن
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </Link>
  )
}

export default CompanyBox