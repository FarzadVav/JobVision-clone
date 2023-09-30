import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'
import JobAdsTypes from '../types/Job.types';

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
    clickHandler: () => void
  }[];
}

const MultiFilterJob = ({ title, filters }: MultiFilterJobProps) => {
  const [selected, setSelected] = useState<boolean>(false)
  const [showMultiSelect, setShowMultiSelect] = useState<boolean>(false)

  return (
    <button
      className={`border border-solid min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer !transition-colors last:ml-0 ${selected ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'} relative`}
      onClick={() => {
        setShowMultiSelect(prev => !prev)
      }}
    >
      {title}
      {
        selected && (
          <div
            className={`h-full flex items-center`}
            onClick={(event) => {
              filters[0].clickHandler()
              setSelected(false)
              event.stopPropagation()
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
        showMultiSelect && filters.length ? (
          <ul className={`light-shadow bg-white border border-solid border-jv-light w-max flex flex-col items-center absolute
          top-[calc(100%+0.75rem)] right-1/2 translate-x-1/2 z-10 rounded-md`}>
            <div className={`bg-white border-t border-l border-solid border-jv-light w-3 h-3 absolute -top-1.5 rotate-45
            rounded-tl`}></div>
            {
              filters.map((filter, i) => (
                <li
                  key={i}
                  className={`text-jv-dark w-full px-5 py-1.5 rounded-md first-of-type:mt-1.5 last-of-type:pb-3
                  hover:bg-jv-bright`}
                  onClick={() => {
                    filter.clickHandler()
                  }}
                >
                  {filter.title}
                </li>
              ))
            }
          </ul>
        ) : null
      }
    </button>
  )
}

type JobsFiltersBarProps = {
  jobAds: JobAdsTypes[];
  jobAdsFiltered: JobAdsTypes[];
  setJobAdsFilteredHandler: (jobAd: JobAdsTypes[]) => void
}

const JobsFiltersBar = ({ jobAds, jobAdsFiltered, setJobAdsFilteredHandler }: JobsFiltersBarProps) => {
  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center pb-3 overflow-x-auto sm:overflow-visible`}>
      <FilterJob
        title='دورکرای'
        filterHandler={() => setJobAdsFilteredHandler(jobAdsFiltered.filter(job => job.remote))}
        unFilterHandler={() => {
          const newJobAds = [...jobAdsFiltered, ...jobAds.filter(job => !job.remote)]
          setJobAdsFilteredHandler(newJobAds)
        }}
      />
      <FilterJob
        title='امریه سربازی'
        filterHandler={() => setJobAdsFilteredHandler(jobAdsFiltered.filter(job => job.knowledgeBasedCompany))}
        unFilterHandler={() => {
          const newJobAds = [...jobAdsFiltered, ...jobAds.filter(job => !job.knowledgeBasedCompany)]
          setJobAdsFilteredHandler(newJobAds)
        }}
      />
      <MultiFilterJob
        title={'نوع همکاری'}
        filters={[
          {
            title: 'پیش',
            clickHandler: () => { }
          },
          {
            title: 'تمام وقت',
            clickHandler: () => { }
          },
          {
            title: 'پاره وقت',
            clickHandler: () => { }
          },
          {
            title: 'پروژه ای',
            clickHandler: () => { }
          }
        ]}
      />
    </div>
  )
}

export default JobsFiltersBar