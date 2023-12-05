import { useState, useEffect } from 'react'
import { CloseRounded } from '@mui/icons-material'
import { createPortal } from 'react-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';

import JobAdsTypes from '../types/JobAds.types';
import useJobAds from '../store/useJobAds';
import useJobAdsFilters, { useJobAdsFiltersTypes } from '../store/useJobAdsFilters';
import useJobAdsQuery from '../hooks/useJobAdsQuery';

// simple filter button
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

// multi select filter
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

// handle query params, FilterJob and MultiFilterJob filters
type JobsFiltersBarProps = {
  jobAdsSelectHandler: (singleJobAd: JobAdsTypes) => void
}
const JobsFiltersBar = ({ jobAdsSelectHandler }: JobsFiltersBarProps) => {
  const { data: jobAds } = useJobAdsQuery()
  const {
    setFilteredJobAds,
    setSelectedJobAds,
    setJobAdsToDefault,
    setHasFilter
  } = useJobAds(s => s)
  const filters = useJobAdsFilters(s => s)
  const [searchParams] = useSearchParams()
  const redirect = useNavigate()
  const [showClearFilters, setShowClearFilters] = useState<boolean>(false)

  useEffect(() => {
    if (chekFilters()) {
      setShowClearFilters(true)
      setHasFilter(true)
    } else {
      setShowClearFilters(false)
      setHasFilter(false)
    }

    let newFilteredJobAds: JobAdsTypes[] = jobAds || []
    if (filters.q_id) {
      const newFilteredJobAdsFromId = newFilteredJobAds.find(job => job._id === filters.q_id)
      if (newFilteredJobAdsFromId) {
        newFilteredJobAds = [newFilteredJobAdsFromId]
        setSelectedJobAds(newFilteredJobAdsFromId)
        jobAdsSelectHandler(newFilteredJobAdsFromId)
      } else {
        newFilteredJobAds = []
      }
    } else {
      if (filters.q_search) {
        const search: string = filters.q_search
        newFilteredJobAds = newFilteredJobAds.filter(job => {
          if (job.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || job.category.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || job.tags.filter(tag => tag.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).length) {
            return job
          }
        })
      }
      if (filters.q_category) {
        newFilteredJobAds = newFilteredJobAds.filter(job => job.category.name === filters.q_category)
      }
      if (filters.q_tag) {
        let _newFilteredJobAds: JobAdsTypes[] = []
        newFilteredJobAds.forEach(job => {
          job.tags.forEach(tag => {
            if (tag.name === filters.q_tag) _newFilteredJobAds.push(job)
          })
        })
        newFilteredJobAds = _newFilteredJobAds
      }
      if (filters.q_province) {
        newFilteredJobAds = newFilteredJobAds.filter(job => job.company.province.name === filters.q_province)
      }
      if (filters.q_city) {
        newFilteredJobAds = newFilteredJobAds.filter(job => job.company.city.name === filters.q_city)
      }
      if (filters.q_cooperationType) {
        newFilteredJobAds = newFilteredJobAds.filter(job => job.cooperationType.name === filters.q_cooperationType)
      }
      if (filters.q_cooperationTypeCity) {
        const cooperationTypeCitySplited = filters.q_cooperationTypeCity.split('_')
        newFilteredJobAds = newFilteredJobAds.filter(job => job.cooperationType.name === cooperationTypeCitySplited[0]
          && job.company.city.name === cooperationTypeCitySplited[1])
      }
      if (filters.remote) {
        newFilteredJobAds = newFilteredJobAds.filter(job => job.isRemote)
      }
      if (filters.knowledgeBasedCompany) {
        newFilteredJobAds = newFilteredJobAds.filter(job => job.company.knowledgeBased)
      }
      if (filters.salaryType) {
        newFilteredJobAds = newFilteredJobAds.filter(job => {
          if (job.salary !== null
            && filters.salaryType !== null
            && job.salary[0] >= filters.salaryType[0]
            && job.salary[job.salary.length - 1] <= filters.salaryType[1]) {
            return job
          }
        })
      }
      if (filters.cooprationType) {
        newFilteredJobAds = newFilteredJobAds.filter(job => {
          if (job.cooperationType.name === filters.cooprationType) {
            return job
          }
        })
      }
    }
    setFilteredJobAds(newFilteredJobAds)
  }, [filters, jobAds])

  useEffect(() => {
    setJobAdsToDefault()
    const q_id = searchParams.get('id')
    const q_search = searchParams.get('search')
    const q_category = searchParams.get('category')
    const q_tag = searchParams.get('tag')
    const q_province = searchParams.get('province')
    const q_city = searchParams.get('city')
    const q_cooperationType = searchParams.get('cooperationType')
    const q_cooperationTypeCity = searchParams.get('cooperationType-city')
    useJobAdsFilters.setState({
      q_id,
      q_search,
      q_category,
      q_tag,
      q_province,
      q_city,
      q_cooperationType,
      q_cooperationTypeCity
    })
    setShowClearFilters(chekFilters())
  }, [location.href])

  const chekFilters = (): boolean => {
    let state = false
    if (location.href.includes('?')) {
      state = true
    } else {
      for (const key in filters) {
        if (filters[key as keyof useJobAdsFiltersTypes] !== null
          && ['string', 'object'].includes(typeof filters[key as keyof useJobAdsFiltersTypes])
          && filters[key as keyof useJobAdsFiltersTypes] !== 'none') {
          state = true
        } else if (typeof filters[key as keyof useJobAdsFiltersTypes] === 'boolean'
          && filters[key as keyof useJobAdsFiltersTypes] === true) {
          state = true
        }
      }
    }
    return state
  }

  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center pb-3 overflow-x-auto sm:overflow-visible`}>
      {/* call setJobAdsToDefault and clear filters */}
      <button
        className={`bg-jv-danger text-white min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full ${showClearFilters ? 'cursor-pointer active:scale-95' : 'opacity-20 cursor-not-allowed'}`}
        onClick={() => {
          redirect('/jobs')
          setJobAdsToDefault()
          filters.setFiltersToDefault()
        }}
        disabled={!showClearFilters}
      >
        پاک کردن فیلتر ها
      </button>

      <div className={filters.q_id?.length ? 'hidden' : 'flex items-center'}>
        <FilterJob
          selected={filters.remote}
          title='دورکاری'
          filterHandler={() => useJobAdsFilters.setState({ remote: true })}
          unFilterHandler={() => useJobAdsFilters.setState({ remote: false })}
        />

        <FilterJob
          selected={filters.knowledgeBasedCompany}
          title='امریه سربازی'
          filterHandler={() => useJobAdsFilters.setState({ knowledgeBasedCompany: true })}
          unFilterHandler={() => useJobAdsFilters.setState({ knowledgeBasedCompany: false })}
        />

        <MultiFilterJob
          selected={filters.cooprationType !== null}
          title={'نوع همکاری'}
          filters={[
            {
              title: 'تمام وقت',
              filterHandler: () => useJobAdsFilters.setState({ cooprationType: 'تمام وقت' })
            },
            {
              title: 'پاره وقت',
              filterHandler: () => useJobAdsFilters.setState({ cooprationType: 'پاره وقت' })
            },
            {
              title: 'پروژه ای',
              filterHandler: () => useJobAdsFilters.setState({ cooprationType: 'پروژه ای' })
            }
          ]}
          unFilterHandler={() => useJobAdsFilters.setState({ cooprationType: null })}
        />

        <MultiFilterJob
          selected={filters.salaryType !== null}
          title={'حقوق'}
          filters={[
            {
              title: 'تا 4 میلیون',
              filterHandler: () => useJobAdsFilters.setState({ salaryType: [0, 4] })
            },
            {
              title: '4 تا 8 میلیون',
              filterHandler: () => useJobAdsFilters.setState({ salaryType: [4, 8] })
            },
            {
              title: 'از 8 تا 15 میلیون',
              filterHandler: () => useJobAdsFilters.setState({ salaryType: [8, 15] })
            },
            {
              title: 'از 15 تا 25 میلیون',
              filterHandler: () => useJobAdsFilters.setState({ salaryType: [15, 25] })
            },
            {
              title: 'از 25 تا 40 میلیون',
              filterHandler: () => useJobAdsFilters.setState({ salaryType: [25, 40] })
            },
            {
              title: 'از 40 تا 75 میلیون',
              filterHandler: () => useJobAdsFilters.setState({ salaryType: [40, 75] })
            },
          ]}
          unFilterHandler={() => useJobAdsFilters.setState({ salaryType: null })}
        />
      </div>
    </div>
  )
}

export default JobsFiltersBar