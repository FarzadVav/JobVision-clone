import { AccountCircle, DoNotDisturbAltRounded, DoneRounded } from "@mui/icons-material"

const EmployerDashboard = () => {
  return (
    <div className={`w-full flex flex-col`}>
      <ul className={`w-full flex flex-col justify-center items-center`}>
        <li className={`bg-jv-light w-full flex justify-between items-center p-2 pr-3 rounded`}>
          <div className={`flex items-center`}>
            <AccountCircle
              className={`text-jv-primary`}
              fontSize="large"
            />
            <span className={`dana-bold hidden mr-3 sm:inline-block`}>
              فرزاد وحدتی نژاد
            </span>
          </div>
          <div className={`flex items-center`}>
            <button className={`btn btn-success`}>
              استخدام
              <DoneRounded />
            </button>
            <button className={`btn btn-danger mr-2`}>
              <DoNotDisturbAltRounded />
            </button>
          </div>
        </li>
        <li className={`bg-jv-light w-full flex justify-between items-center p-2 pr-3 rounded mt-2`}>
          <div className={`flex items-center`}>
            <AccountCircle
              className={`text-jv-primary`}
              fontSize="large"
            />
            <span className={`dana-bold hidden mr-3 sm:inline-block`}>
              فرزاد وحدتی نژاد
            </span>
          </div>
          <div className={`flex items-center`}>
            <button className={`btn btn-success`}>
              استخدام
              <DoneRounded />
            </button>
            <button className={`btn btn-danger mr-2`}>
              <DoNotDisturbAltRounded />
            </button>
          </div>
        </li>
        <li className={`bg-jv-light w-full flex justify-between items-center p-2 pr-3 rounded mt-2`}>
          <div className={`flex items-center`}>
            <AccountCircle
              className={`text-jv-primary`}
              fontSize="large"
            />
            <span className={`dana-bold hidden mr-3 sm:inline-block`}>
              فرزاد وحدتی نژاد
            </span>
          </div>
          <div className={`flex items-center`}>
            <button className={`btn btn-success`}>
              استخدام
              <DoneRounded />
            </button>
            <button className={`btn btn-danger mr-2`}>
              <DoNotDisturbAltRounded />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default EmployerDashboard