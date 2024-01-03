import { CloseRounded, FavoriteBorderRounded, HelpRounded, PeopleAltRounded, ShareOutlined } from "@mui/icons-material"
import useJobAdsStore from "../hooks/store/useJobAds"
import Title from "./Title"
import JobAdsTypes from "../types/JobAds.types"
import Tabs from "./Tabs"

const SingleJobAd = () => {
  const { selectedJobAds } = useJobAdsStore(s => s)

  return (
    <div className={`list-scrollbar bg-white w-full h-full flex flex-col px-3 py-4 rounded overflow-y-auto`}>
      {
        Object.keys(selectedJobAds || {}).length ? (
          <>
            <div className={`w-full`}>
              <div className={`w-full flex justify-between items-center mb-6 lg:hidden`}>
                <button
                  className={`btn-sm btn-bright`}
                  onClick={() => useJobAdsStore.setState({ selectedJobAds: {} as JobAdsTypes })}
                >
                  بستن <CloseRounded fontSize='inherit' />
                </button>
                <div className={`flex items-center`}>
                  <span className={`text-sm`}>
                    {new Date(selectedJobAds?.created_at || '').toLocaleDateString('fa-ir')}
                  </span>
                  <button className={`btn-sm bg-blue-50 rounded-full mr-4`}>
                    <ShareOutlined className={`text-jv-primary cursor-pointer`} />
                  </button>
                  <button className={`btn-sm bg-red-50 rounded-full mr-1.5`}>
                    <FavoriteBorderRounded className={`text-jv-danger cursor-pointer`} />
                  </button>
                </div>
              </div>
              <div className={`w-full flex justify-between`}>
                <Title>
                  <h2>
                    {selectedJobAds?.title}
                  </h2>
                </Title>
                <span className={`min-w-max hidden text-sm lg:block`}>
                  {new Date(selectedJobAds?.created_at || '').toLocaleDateString('fa-ir')}
                </span>
              </div>
              <div className={`flex items-center mt-4 lg:mt-6`}>
                <span className={`text-jv-primary`}>
                  {selectedJobAds?.company.name}
                </span>
                <span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
                  {selectedJobAds?.company.province.name}، {selectedJobAds?.company.city.name}
                </span>
                {
                  selectedJobAds?.isRemote && (
                    <span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
                      امکان دورکاری
                    </span>
                  )
                }
                {
                  selectedJobAds?.isUrgent && (
                    <span className={`text-jv-danger border-r border-solid border-jv-light italic pr-3 mr-3`}>
                      فوری
                    </span>
                  )
                }
              </div>
              <div className={`w-full flex items-center justify-between mt-4`}>
                <span className={`text-jv-success`}>
                  {
                    selectedJobAds?.salary
                      ? `${selectedJobAds?.salary.from} ${selectedJobAds?.salary.to
                        ? `تا ${selectedJobAds?.salary.to}`
                        : ''}`
                      : 'حقوق توافقی'
                  }
                </span>
                <div className={`flex items-center`}>
                  <div className={`hidden items-center lg:flex`}>
                    <ShareOutlined className={`text-jv-primary cursor-pointer`} />
                    <FavoriteBorderRounded className={`text-jv-danger mr-3 cursor-pointer`} />
                  </div>
                  <button className={`btn btn-success sm:mr-6`}>
                    ارسال رزومه
                  </button>
                  <img
                    className={`w-10 h-10 mr-3 rounded-full`}
                    src={selectedJobAds?.company.logo}
                  />
                </div>
              </div>
            </div>

            <div className={`bg-jv-bright w-full flex flex-col p-3 mt-6 rounded md:flex-row md:items-center md:px-5
          md:py-2`}>
              <div className={`flex items-center`}>
                <PeopleAltRounded className={`text-jv-light brightness-75`} />
                <span className={`mr-3`}>
                  {
                    `${selectedJobAds?.company.employees.from} تا ${selectedJobAds?.company.employees.to}`
                  }
                </span>
              </div>
              <div className={`flex items-center mt-1.5 md:mr-6 md:mt-0`}>
                <HelpRounded className={`text-jv-light brightness-75`} />
                <p className={`mr-3`}>
                  {selectedJobAds?.company.activity.slice(0, 75)}
                </p>
              </div>
            </div>

            <Tabs
              customClass={`mt-6`}
              tabs={[]}
            />
          </>
        ) : (
          <div className={`w-full flex flex-col items-center mt-3`}>
            <img
              src="/images/job-detail-empty-state.svg"
            />
            <span className={`text-center opacity-50 -translate-y-6`}>
              جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت <br /> راست انتخاب کنید.
            </span>
          </div>
        )
      }
    </div>
  )
}

export default SingleJobAd