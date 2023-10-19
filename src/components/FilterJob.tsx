import { useState, useEffect } from 'react'
import { CloseRounded } from '@mui/icons-material'
import JobAdsTypes from '../types/Job.types';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

type FilterJobProps = {
  selected: boolean;
  title: string;
  filterHandler: () => void;
  unFilterHandler: () => void
}
const FilterJob = ({ selected, title, filterHandler, unFilterHandler }: FilterJobProps) => {
  return (
    <button
      className={`border border-solid min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer last:ml-0 ${selected ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'} !transition-transform active:scale-95`}
      onClick={() => {
        if (selected) {
          unFilterHandler()
        } else {
          filterHandler()
        }
      }}
    >
      {title}
      {
        selected && (
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
  selected: boolean;
  title: string;
  filters: {
    title: string;
    filterHandler: () => void;
  }[];
  unFilterHandler: () => void
}
const MultiFilterJob = ({ selected, title, filters, unFilterHandler }: MultiFilterJobProps) => {
  const [dynamicTitle, setDynamicTitle] = useState<string | null>(null)
  const [showMultiSelect, setShowMultiSelect] = useState<boolean>(false)

  useEffect(() => {
    if (!selected) {
      setDynamicTitle(null)
    }
  }, [selected])

  return (
    <button
      className={`border border-solid min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer last:ml-0 ${selected ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'} relative !transition-transform active:scale-95`}
      onClick={() => {
        setShowMultiSelect(prev => !prev)
      }}
    >
      {title}
      {
        (dynamicTitle && selected) ? ' : ' : ''
      }
      {selected ? dynamicTitle : null}
      {
        selected && (
          <div
            className={`h-full flex items-center`}
            onClick={(event) => {
              event.stopPropagation()
              unFilterHandler()
              setShowMultiSelect(false)
              setDynamicTitle(null)
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
                  hover:bg-jv-bright ${dynamicTitle === filter.title ? 'text-jv-primary' : ''}`}
                  onClick={() => {
                    setDynamicTitle(filter.title)
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
                        text-center mb-1 last-of-type:mb-0 last-of-type:border-b-0 ${dynamicTitle === filter.title ?
                          '!text-jv-warning' : ''}`}
                      onClick={() => {
                        setDynamicTitle(filter.title)
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
  setJobAdsToDefault: () => void;
  jobAds: JobAdsTypes[];
  filteredJobAds: JobAdsTypes[];
  setJobAdsFilteredHandler: (jobAd: JobAdsTypes[]) => void
}
type filtersTypes = {
  remote: boolean;
  knowledgeBasedCompany: boolean;
  cooprationType: 'full-time' | 'part-time' | 'as-projects' | 'none';
  salaryType: [number, number] | 'none'
}
const initialFiltersValue: filtersTypes = {
  remote: false,
  knowledgeBasedCompany: false,
  cooprationType: 'none',
  salaryType: 'none'
}
const JobsFiltersBar = ({ setJobAdsToDefault, jobAds, filteredJobAds, setJobAdsFilteredHandler }: JobsFiltersBarProps) => {
  const redirect = useNavigate()
  const [filters, setFilters] = useState<filtersTypes>(initialFiltersValue)
  const [showClearFilters, setShowClearFilters] = useState<boolean>(false)

  useEffect(() => {
    let newFilteredJobAds: JobAdsTypes[] = []
    const mainJobAds: JobAdsTypes[] = (filteredJobAds.length && chekFilters()) ? filteredJobAds : jobAds

    if (filters.remote) {
      newFilteredJobAds = mainJobAds.filter(job => job.remote)
    }
    if (filters.knowledgeBasedCompany) {
      newFilteredJobAds = mainJobAds.filter(job => job.knowledgeBasedCompany)
    }
    if (filters.salaryType !== 'none') {
      newFilteredJobAds = mainJobAds.filter(job => {
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
      newFilteredJobAds = mainJobAds.filter(job => {
        if (job.cooperationType === filters.cooprationType) {
          return job
        }
      })
    }
    setJobAdsFilteredHandler(newFilteredJobAds)

    setShowClearFilters(chekFilters())
  }, [filters])

  useEffect(() => {
    setFilters(initialFiltersValue)
    setShowClearFilters(chekFilters())
  }, [location.href])

  const chekFilters = (): boolean => {
    let state = false
    if (location.href.includes('?')) {
      state = true
    } else {
      for (const key in filters) {
        if (typeof filters[key as keyof filtersTypes] === 'boolean'
          && filters[key as keyof filtersTypes] === true) {
          state = true
          break;
        } else if (['string', 'object'].includes(typeof filters[key as keyof filtersTypes])
          && filters[key as keyof filtersTypes] !== 'none') {
          state = true
          break;
        }
      }
    }
    return state
  }

  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center pb-3 overflow-x-auto sm:overflow-visible`}>
      <button
        className={`bg-jv-danger text-white min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full ${showClearFilters ? 'cursor-pointer active:scale-95' : 'opacity-20 cursor-not-allowed'}`}
        onClick={() => {
          redirect('/jobs')
          setJobAdsToDefault()
          setFilters(initialFiltersValue)
        }}
        disabled={!showClearFilters}
      >
        پاک کردن فیلتر ها
      </button>

      <FilterJob
        selected={filters.remote}
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
        selected={filters.knowledgeBasedCompany}
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
        selected={filters.cooprationType !== 'none'}
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
        selected={filters.salaryType !== 'none'}
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