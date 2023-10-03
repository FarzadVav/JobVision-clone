import { useState, useEffect } from 'react'
import { CloseRounded } from '@mui/icons-material'
import JobAdsTypes from '../types/Job.types';
import { createPortal } from 'react-dom';

type FilterJobProps = {
  title: string;
  filterHandler: () => void;
  unFilterHandler: () => void
}

const FilterJob = ({ title, filterHandler, unFilterHandler }: FilterJobProps) => {
  const [select, setSelect] = useState<boolean>(false)

  return (
    <button
      className={`border border-solid min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer !transition-colors last:ml-0 ${select ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'}`}
      onClick={() => {
        if (select) {
          setSelect(false)
          unFilterHandler()
        } else {
          setSelect(true)
          filterHandler()
        }
      }}
    >
      {title}
      {
        select && (
          <CloseRounded
            className='bg-jv-primary text-white brightness-125 mr-3 rounded-full p-0.5'
            fontSize='small'
          />
        )
      }
    </button>
  )
}

type MultiFilterJobProps = {
  title: string;
  filters: {
    title: string;
    filterHandler: () => void;
  }[];
  unFilterHandler: () => void
}

const MultiFilterJob = ({ title, filters, unFilterHandler }: MultiFilterJobProps) => {
  const [selected, setSelected] = useState<{ title: string; state: boolean; }>({ title: '', state: false })
  const [showMultiSelect, setShowMultiSelect] = useState<boolean>(false)

  return (
    <button
      className={`border border-solid min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer !transition-colors last:ml-0 ${selected.state ? 'bg-jv-primary text-white border-jv-primary pl-1.5'
          : 'bg-white border-jv-light hover:text-jv-primary'} relative`}
      onClick={() => {
        setShowMultiSelect(prev => !prev)
      }}
    >
      {title}
      {
        selected.title.length ? ' : ' : ''
      }
      {selected.title}
      {
        selected.state && (
          <div
            className={`h-full flex items-center`}
            onClick={(event) => {
              event.stopPropagation()
              unFilterHandler()
              setShowMultiSelect(false)
              setSelected({ title: '', state: false })
            }}
          >
            <CloseRounded
              className='bg-jv-primary text-white brightness-125 mr-3 rounded-full p-0.5'
              fontSize='small'
            />
          </div>
        )
      }
      {
        showMultiSelect && (
          <ul className={`light-shadow bg-white border border-solid border-jv-light w-max hidden flex-col items-center absolute
          top-[calc(100%+0.75rem)] right-1/2 translate-x-1/2 z-10 rounded-md sm:flex`}>
            <div className={`bg-white border-t border-l border-solid border-jv-light w-3 h-3 absolute -top-1.5 rotate-45
            rounded-tl`}></div>
            {
              filters.map((filter, i) => (
                <li
                  key={i}
                  className={`text-jv-dark w-full px-5 py-1.5 rounded-md first-of-type:mt-1.5 last-of-type:pb-3
                  hover:bg-jv-bright ${selected.title === filter.title ? 'text-jv-primary' : ''}`}
                  onClick={() => {
                    setSelected({ title: filter.title, state: true })
                    filter.filterHandler()
                  }}
                >
                  {filter.title}
                </li>
              ))
            }
          </ul>
        )
      }
      {
        createPortal(
          <>
            <div
              className={`w-full h-screen flex items-end fixed bottom-0 right-0 ${showMultiSelect ? '' : 'opacity-0 invisible'}
              z-50 sm:hidden`}
              onClick={(event) => {
                event.stopPropagation()
                setShowMultiSelect(false)
              }}
            >
              <ul className={`bg-jv-primary w-full flex flex-col items-center px-6 pb-2 pt-9 rounded-t-[2rem] ${showMultiSelect ? '' : 'translate-y-full'} relative`}>
                <div className={`bg-jv-primary brightness-125 w-12 h-1 rounded-full absolute top-3`}></div>
                {
                  filters.map((filter, i) => (
                    <li
                      key={i}
                      className={`text-white border-b border-solid border-[#ffffff25] w-full px-5 py-2.5
                        text-center mb-1 last-of-type:mb-0 last-of-type:border-b-0 ${selected.title === filter.title ?
                          '!text-jv-warning' : ''}`}
                      onClick={() => {
                        setSelected({ title: filter.title, state: true })
                        filter.filterHandler()
                      }}
                    >
                      {filter.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          </>,
          document.querySelector('#root')!
        )
      }
    </button>
  )
}

type JobsFiltersBarProps = {
  jobAds: JobAdsTypes[];
  setJobAdsFilteredHandler: (jobAd: JobAdsTypes[]) => void
}

const JobsFiltersBar = ({ jobAds, setJobAdsFilteredHandler }: JobsFiltersBarProps) => {
  const [filters, setFilters] = useState<{
    remote: boolean;
    knowledgeBasedCompany: boolean;
    cooprationType: 'full-time' | 'part-time' | 'as-projects' | 'none';
    salaryType: [number, number] | 'none'
  }>({
    remote: false,
    knowledgeBasedCompany: false,
    cooprationType: 'none',
    salaryType: 'none'
  })

  useEffect(() => {
    let newFilteredJobAds: JobAdsTypes[] = jobAds

    if (filters.remote) {
      newFilteredJobAds = newFilteredJobAds.filter(job => job.remote)
    }
    if (filters.knowledgeBasedCompany) {
      newFilteredJobAds = newFilteredJobAds.filter(job => job.knowledgeBasedCompany)
    }
    if (filters.salaryType !== 'none') {
      newFilteredJobAds = newFilteredJobAds.filter(job => {
        if (typeof job.salary === 'number'
          && typeof filters.salaryType === 'object'
          && job.salary >= filters.salaryType[0]
          && job.salary <= filters.salaryType[1]) {
          return job
        } else if (typeof job.salary === 'object'
          && typeof filters.salaryType === 'object'
          && job.salary[0] >= filters.salaryType[0]
          && job.salary[1] <= filters.salaryType[1]) {
          return job
        }
      })
    }
    if (filters.cooprationType !== 'none') {
      newFilteredJobAds = newFilteredJobAds.filter(job => {
        if (job.cooperationType === filters.cooprationType) {
          return job
        }
      })
    }
    setJobAdsFilteredHandler(newFilteredJobAds)
  }, [filters])

  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center pb-3 overflow-x-auto sm:overflow-visible`}>
      <FilterJob
        title='دورکاری'
        filterHandler={() => setFilters(prev => ({
          ...prev,
          remote: true
        }))}
        unFilterHandler={() => setFilters(prev => ({
          ...prev,
          remote: false
        }))}
      />

      <FilterJob
        title='امریه سربازی'
        filterHandler={() => setFilters(prev => ({
          ...prev,
          knowledgeBasedCompany: true
        }))}
        unFilterHandler={() => setFilters(prev => ({
          ...prev,
          knowledgeBasedCompany: false
        }))}
      />

      <MultiFilterJob
        title={'نوع همکاری'}
        filters={[
          {
            title: 'تمام وقت',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              cooprationType: 'full-time'
            }))
          },
          {
            title: 'پاره وقت',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              cooprationType: 'part-time'
            }))
          },
          {
            title: 'پروژه ای',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              cooprationType: 'as-projects'
            }))
          }
        ]}
        unFilterHandler={() => setFilters(prev => ({
          ...prev,
          cooprationType: 'none'
        }))}
      />

      <MultiFilterJob
        title={'حقوق'}
        filters={[
          {
            title: 'تا 4 میلیون',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              salaryType: [0, 4]
            }))
          },
          {
            title: '4 تا 8 میلیون',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              salaryType: [4, 8]
            }))
          },
          {
            title: 'از 8 تا 15 میلیون',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              salaryType: [8, 15]
            }))
          },
          {
            title: 'از 15 تا 25 میلیون',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              salaryType: [15, 25]
            }))
          },
          {
            title: 'از 25 تا 40 میلیون',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              salaryType: [25, 40]
            }))
          },
          {
            title: 'از 40 تا 75 میلیون',
            filterHandler: () => setFilters(prev => ({
              ...prev,
              salaryType: [40, 75]
            }))
          },
        ]}
        unFilterHandler={() => setFilters(prev => ({
          ...prev,
          salaryType: 'none'
        }))}
      />
    </div>
  )
}

export default JobsFiltersBar