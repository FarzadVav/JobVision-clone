import { NavLink, Outlet } from "react-router-dom"
import Title from "./../../components/Title"
import { createPortal } from "react-dom"
import { AssessmentRounded, InfoRounded, PersonRounded } from "@mui/icons-material"

const Employer = () => {
  return (
    <div className={`wrapper flex mt-3 pb-[4.75rem] lg:mt-12 lg:pb-12`}>
      {/* dashboard sidebar */}
      <aside className={`bg-jv-primary w-3/12 h-max hidden flex-col justify-center items-center p-5 rounded-md sticky top-[5.25rem] overflow-hidden lg:flex`}>
        <div className={`bg-white w-20 h-20 flex justify-center items-center rounded-md relative`}>
          {/* this image is for light shadow in back orginal image */}
          <img
            className={`w-32 h-32 object-cover object-center rounded-md absolute blur-2xl opacity-50`}
            src="https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=151196&width=70&height=70"
            alt="لوگوی شرکت"
          />
          <img
            className={`w-full h-full object-cover object-center rounded-md absolute`}
            src="https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=151196&width=70&height=70"
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
      {/* dashboard sidebar */}

      {/* dashboard contents */}
      <section className={`bg-jv-bright w-full h-max max-h-screen p-5 rounded-md overflow-y-auto lg:w-9/12 lg:mr-3`}>
        <Outlet />
      </section>
      {/* dashboard contents */}

      {/* mobile navigation */}
      {
        createPortal(
          <>
            <nav className={`bg-jv-primary h-16 w-full flex justify-evenly items-center fixed bottom-0 left-0 z-40 lg:hidden`}>
              <NavLink
                className={link => `${link.isActive && location.pathname.endsWith('d_employer') ? 'bg-gradient-to-t from-[#ffffff15] to-transparent' : ''} text-white w-24 h-full flex flex-col items-center justify-center`}
                to={``}
              >
                <PersonRounded />
                <span className={`text-xs mt-1.5`}>
                  داشبورد
                </span>
              </NavLink>
              <NavLink
                className={link => `${link.isActive ? 'bg-gradient-to-t from-[#ffffff15] to-transparent' : ''} text-white w-24 h-full flex flex-col items-center justify-center`}
                to={`details`}
              >
                <InfoRounded />
                <span className={`text-xs mt-1.5`}>
                  اطلاعات
                </span>
              </NavLink>
              <NavLink
                className={link => `${link.isActive ? 'bg-gradient-to-t from-[#ffffff15] to-transparent' : ''} text-white w-24 h-full flex flex-col items-center justify-center`}
                to={`add-jobAd`}
              >
                <AssessmentRounded />
                <span className={`text-xs mt-1.5`}>
                  آگهی
                </span>
              </NavLink>
            </nav>
          </>,
          document.querySelector('#root')!!
        )
      }
      {/* mobile navigation */}
    </div>
  )
}

export default Employer