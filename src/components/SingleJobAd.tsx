import { useEffect } from "react"
import { CloseRounded, FavoriteBorderRounded, HelpRounded, InfoOutlined, PeopleAltRounded, ShareOutlined, StarRateRounded } from "@mui/icons-material"
import { Alert } from '@mui/material';

import tokenGenerator from "../utils/tokenGenerator"
import useJobAdsStore from "../hooks/store/useJobAds"
import JobAdsTypes from "../types/JobAds.types"
import Title from "./Title"
import Tabs from "./Tabs"
import useJobAds from "../hooks/query/useJobAds"
import JobAdsBox from "./JobAdsBox"
import { Link } from "react-router-dom";

const SingleJobAd = () => {
  const { jobAds } = useJobAds()
  const { singleJobAd, singleJobAdTabs } = useJobAdsStore(s => s)

  useEffect(() => {
    if (Object.entries(singleJobAd || {}).length) {
      useJobAdsStore.setState({
        singleJobAdTabs: [
          {
            id: tokenGenerator(),
            title: 'درباره شغل',
            content: (
              <div className={`w-full flex flex-col`}>
                <Title withIcon>
                  <span className='!text-xl'>
                    مشخصات موقعیت شغلی
                  </span>
                </Title>
                <div className={`w-full flex flex-wrap gap-y-3 mt-3`}>
                  <div className={`w-full sm:w-1/2`}>
                    <span className={`dana-bold block`}>
                      روز و ساعت کاری
                    </span>
                    <span className={`block text-sm mt-1`}>
                      {singleJobAd?.workTimes}
                    </span>
                  </div>
                  <div className={`w-full sm:w-1/2`}>
                    <span className={`dana-bold block`}>
                      نوع همکاری
                    </span>
                    <span className={`block text-sm mt-1`}>
                      {singleJobAd?.cooperationType?.name}
                    </span>
                  </div>
                  <div className={`w-full sm:w-1/2`}>
                    <span className={`dana-bold block`}>
                      سفر های کاری
                    </span>
                    <span className={`block text-sm mt-1`}>
                      {singleJobAd?.businessTrips || 'ندارد'}
                    </span>
                  </div>
                  <div className={`w-full sm:w-1/2`}>
                    <span className={`dana-bold block`}>
                      مزایا و تسهیلات
                    </span>
                    <div className={`text-sm mt-1`}>
                      {
                        singleJobAd?.benefits.length ? singleJobAd?.benefits.map((benefit, i) => {
                          if (i < singleJobAd?.benefits.length - 1) {
                            return (
                              <div
                                key={tokenGenerator()}
                                className={`inline-block ml-2`}
                              >
                                {benefit}
                                <span className={`inline-block mr-2 opacity-25`}>
                                  /
                                </span>
                              </div>
                            )
                          } else {
                            return (
                              <span
                                key={i}
                                className={`inline-block`}
                              >
                                {benefit}
                              </span>
                            )

                          }
                        }) : 'ندارد'
                      }
                    </div>
                  </div>
                </div>

                <Title
                  customClass={`mt-6`}
                  withIcon
                >
                  <span className='!text-xl'>
                    شاخص های کلیدی از نظر کارفرما
                  </span>
                </Title>
                <ul className={`w-full flex flex-col`}>
                  {
                    singleJobAd?.abilityForBoss.length ? singleJobAd?.abilityForBoss.map(ability => (
                      <li
                        key={tokenGenerator()}
                        className={`bg-jv-bright w-max flex items-center justify-center px-3 py-1.5 mt-2 first:mt-3`}
                      >
                        {ability}
                      </li>
                    )) : 'مهم نیست'
                  }
                </ul>

                <Title
                  customClass={`mt-6`}
                  withIcon
                >
                  <span className='!text-xl'>
                    شرح شغل و وظایف
                  </span>
                </Title>
                <p className={`w-full mt-3 pr-2`}>
                  {singleJobAd?.description}
                </p>

                <Title
                  customClass={`mt-6`}
                  withIcon
                >
                  <span className='!text-xl'>
                    شرایط احراز شغل
                  </span>
                </Title>
                <ul className={`w-full flex flex-col mt-3`}>
                  <li className={`single-jobAd-ability`}>
                    <span>
                      سن
                    </span>
                    <span>
                      {
                        `${singleJobAd?.age.from} تا ${singleJobAd?.age.to}`
                      }
                    </span>
                  </li>
                  <li className={`single-jobAd-ability mt-2`}>
                    <span>
                      جنسیت
                    </span>
                    <span>
                      {
                        typeof singleJobAd?.gender === 'object' ? 'فرقی ندارد' : singleJobAd?.gender ? 'مرد' : 'زن'
                      }
                    </span>
                  </li>
                  <li className={`single-jobAd-ability mt-2`}>
                    <span>
                      سربازی
                    </span>
                    <span>
                      {
                        singleJobAd?.endOfMilitaryService ? 'پایان خدمت یا معاف از سربازی' : 'مهم نیست'
                      }
                    </span>
                  </li>
                  <li className={`single-jobAd-ability mt-2`}>
                    <span>
                      تحصیلات
                    </span>
                    <span>
                      {
                        singleJobAd?.education.length ? singleJobAd?.education.map((education, i) => (
                          <div
                            key={i}
                            className={`bg-jv-light min-w-max text-xs px-3 py-0.5 ml-1.5 rounded last:ml-0`}
                          >
                            {education}
                          </div>
                        )) : 'فرقی ندارد'
                      }
                    </span>
                  </li>
                  <li className={`single-jobAd-ability mt-2`}>
                    <span>
                      زبان ها
                    </span>
                    <span>
                      {
                        singleJobAd?.languages.length ? singleJobAd?.languages.map((language, i) => (
                          <div
                            key={i}
                            className={`bg-jv-light min-w-max text-xs px-3 py-0.5 ml-1.5 rounded last:ml-0`}
                          >
                            {language}
                          </div>
                        )) : 'فرقی ندارد'
                      }
                    </span>
                  </li>
                  <li className={`single-jobAd-ability mt-2`}>
                    <span>
                      تکنولوژی ها
                    </span>
                    <span>
                      {
                        singleJobAd?.techs.length ? singleJobAd?.techs.map(tech => (
                          <div
                            key={tokenGenerator()}
                            className={`bg-jv-light min-w-max text-xs px-3 py-0.5 ml-1.5 rounded last:ml-0`}
                          >
                            {tech}
                          </div>
                        )) : 'فرقی ندارد'
                      }
                    </span>
                  </li>
                </ul>

                <div className={`border-t border-b border-solid border-jv-light w-full flex items-center py-1.5 mt-6`}>
                  <button className={`btn underline decoration-jv-light`}>
                    <InfoOutlined
                      className={`opacity-25`}
                      fontSize='small'
                    />
                    ثبت مشکل و تخلف آگهی
                  </button>
                </div>

                <Title
                  customClass={`mt-6`}
                  withIcon
                >
                  <span className='!text-xl'>
                    فرصت‌های شغلی مشابه
                  </span>
                </Title>
                <>
                  {
                    (jobAds?.length && jobAds.filter(job => (job.category?.name === singleJobAd?.category?.name && job._id !== singleJobAd?._id)).length) ? (
                      <div className={`w-full grid grid-cols-1 gap-3 mt-3 sm:grid-cols-2`}>
                        {
                          jobAds.map((job, i) => {
                            if (i < 6 && job.category?.name === singleJobAd?.category?.name && job._id !== singleJobAd?._id) {
                              return (
                                <JobAdsBox
                                  key={tokenGenerator()}
                                  jobAd={job}
                                />
                              )
                            }
                          })
                        }
                      </div>
                    ) : (
                      <div className={`w-full mt-3`} dir='ltr'>
                        <Alert
                          className={`!justify-between`}
                          severity="warning"
                        >
                          آگهی وجود ندارد
                        </Alert>
                      </div>
                    )
                  }
                </>
              </div >
            )
          },
          {
            id: tokenGenerator(),
            title: 'درباره شرکت',
            content: (
              <div className={`w-full flex flex-col`}>
                <Title withIcon>
                  <span className='!text-xl'>
                    امتیاز سازمان
                  </span>
                </Title>
                <div className={`w-full flex items-center mt-3`}>
                  <span className={`dana-bold h-5 ml-3`}>
                    {singleJobAd?.company.score}
                  </span>
                  {
                    Array(Math.floor(singleJobAd?.company.score || 0)).fill('').map(() => (
                      <StarRateRounded
                        key={tokenGenerator()}
                        className={`text-jv-warning`}
                      />
                    ))
                  }
                  {
                    Array(Math.ceil(5 - (singleJobAd?.company.score || 0))).fill('').map(() => (
                      <StarRateRounded
                        key={tokenGenerator()}
                        className={`text-jv-dark opacity-25`}
                      />
                    ))
                  }
                </div>

                <Title
                  customClass={`mt-6`}
                  withIcon
                >
                  <span className='!text-xl'>
                    درباره {singleJobAd?.company?.name}
                  </span>
                </Title>
                <p className={`w-full mt-3`}>
                  {singleJobAd?.company.aboutCompany}
                </p>

                <Title
                  customClass={`mt-6`}
                  withIcon
                >
                  <span className='!text-xl'>
                    {singleJobAd?.company?.name} در یک نگاه
                  </span>
                </Title>
                <div className={`w-full flex flex-wrap gap-y-3 mt-3`}>
                  <div className={`w-1/2 px-3`}>
                    <span className={`dana-bold block`}>
                      سال تاسیس
                    </span>
                    <span className={`opacity-75 block text-sm mt-1`}>
                      {singleJobAd?.company.year}
                    </span>
                  </div>
                  <div className={`w-1/2 px-3`}>
                    <span className={`dana-bold block`}>
                      اندازه سازمان
                    </span>
                    <span className={`opacity-75 block text-sm mt-1`}>
                      {
                        `${singleJobAd?.company.employees.from} تا ${singleJobAd?.company.employees.to}`
                      }
                    </span>
                  </div>
                  <div className={`w-1/2 px-3`}>
                    <span className={`dana-bold block`}>
                      حوزه فعالیت
                    </span>
                    <span className={`opacity-75 block text-sm mt-1`}>
                      {singleJobAd?.company.activity}
                    </span>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: tokenGenerator(),
            title: 'سایر آگهی های این شرکت',
            content: (
              <>
                {
                  (jobAds?.length && jobAds.filter(job => (job.company._id === singleJobAd?.company._id && job._id !== singleJobAd?._id)).length) ? (
                    <div className={`w-full grid grid-cols-1 gap-3 sm:grid-cols-2`}>
                      {
                        jobAds.map(job => {
                          if (job.company._id === singleJobAd?.company._id && job._id !== singleJobAd?._id) {
                            return (
                              <JobAdsBox
                                key={tokenGenerator()}
                                jobAd={job}
                              />
                            )
                          }
                        })
                      }
                    </div>
                  ) : (
                    <div className={`w-full`} dir='ltr'>
                      <Alert
                        className={`!justify-between`}
                        severity="warning"
                      >
                        آگهی وجود ندارد
                      </Alert>
                    </div>
                  )
                }
              </>
            )
          }
        ]
      })
    }
  }, [singleJobAd])

  return (
    <div className={`list-scrollbar bg-white w-full h-full flex flex-col px-3 py-4 rounded overflow-y-auto`}>
      {
        Object.keys(singleJobAd || {}).length ? (
          <>
            <div className={`w-full`}>
              <div className={`w-full flex justify-between items-center mb-6 lg:hidden`}>
                <Link
                  className={`btn-sm btn-bright`}
                  to={'/jobs'}
                  onClick={() => useJobAdsStore.setState({ singleJobAd: {} as JobAdsTypes })}
                >
                  بستن
                  <CloseRounded fontSize='inherit' />
                </Link>
                <div className={`flex items-center`}>
                  <span className={`text-sm`}>
                    {new Date(singleJobAd?.created_at || '').toLocaleDateString('fa-ir')}
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
                    {singleJobAd?.title}
                  </h2>
                </Title>
                <span className={`min-w-max hidden text-sm lg:block`}>
                  {new Date(singleJobAd?.created_at || '').toLocaleDateString('fa-ir')}
                </span>
              </div>
              <div className={`flex items-center mt-4 lg:mt-6`}>
                <span className={`text-jv-primary`}>
                  {singleJobAd?.company?.name}
                </span>
                <span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
                  {singleJobAd?.company.province?.name}، {singleJobAd?.company.city?.name}
                </span>
                {
                  singleJobAd?.isRemote && (
                    <span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
                      امکان دورکاری
                    </span>
                  )
                }
                {
                  singleJobAd?.isUrgent && (
                    <span className={`text-jv-danger border-r border-solid border-jv-light italic pr-3 mr-3`}>
                      فوری
                    </span>
                  )
                }
              </div>
              <div className={`w-full flex items-center justify-between mt-4`}>
                <span className={`text-jv-success`}>
                  {
                    singleJobAd?.salary
                      ? `${singleJobAd?.salary.from} ${singleJobAd?.salary.to
                        ? `تا ${singleJobAd?.salary.to}`
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
                    src={singleJobAd?.company.logo}
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
                    `${singleJobAd?.company.employees.from} تا ${singleJobAd?.company.employees.to}`
                  }
                </span>
              </div>
              <div className={`flex items-center mt-1.5 md:mr-6 md:mt-0`}>
                <HelpRounded className={`text-jv-light brightness-75`} />
                <p className={`mr-3`}>
                  {singleJobAd?.company.activity.slice(0, 75)}
                </p>
              </div>
            </div>

            <Tabs
              customClass={`mt-6`}
              tabs={singleJobAdTabs}
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