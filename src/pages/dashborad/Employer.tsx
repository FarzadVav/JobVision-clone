import { NavLink, Outlet } from "react-router-dom"
import Title from "./../../components/Title"

const Employer = () => {
  return (
    <div className={`wrapper flex my-12`}>
      <aside className={`bg-jv-primary w-3/12 h-max flex flex-col justify-center items-center p-5 rounded-md sticky top-[5.25rem] overflow-hidden`}>
        <div className={`w-20 h-20 flex justify-center items-center rounded-full relative`}>
          <img
            className={`w-32 h-32 object-cover object-center rounded-full absolute blur-2xl opacity-50`}
            src="https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=3518088&width=70&height=70"
            alt="لوگوی شرکت"
          />
          <img
            className={`w-full h-full object-cover object-center rounded-full absolute`}
            src="https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=3518088&width=70&height=70"
            alt="لوگوی شرکت"
          />
        </div>
        <Title
          customClass={`justify-center mt-5 z-10`}
          withOutIcon
        >
          <h1 className={`text-white !text-xl`}>
            نام شرکت!!!
          </h1>
        </Title>
        <ul className={`w-full flex flex-col justify-center items-center mt-4`}>
          <li className={`w-full`}>
            <NavLink
              className={link => (link.isActive && location.pathname.endsWith('d_employer')) ? `btn btn-white w-full` : `btn btn-out-white w-full`}
              to={``}
            >
              داشبورد
            </NavLink>
          </li>
          <li className={`w-full mt-2.5`}>
            <NavLink
              className={link => link.isActive ? `btn btn-white w-full` : `btn btn-out-white w-full`}
              to={`details`}
            >
              اطلاعات شرکت
            </NavLink>
          </li>
          <li className={`w-full mt-2.5`}>
            <NavLink
              className={link => link.isActive ? `btn btn-white w-full` : `btn btn-out-white w-full`}
              to={`add-jobAd`}
            >
              آگهی جدید
            </NavLink>
          </li>
        </ul>
      </aside>

      <section className={`max-h-screen bg-jv-bright w-9/12 h-max flex justify-center items-center p-5 mr-3 rounded-md`}>
        <Outlet />
      </section>
    </div>
  )
}

export default Employer