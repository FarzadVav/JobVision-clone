import { useState, useContext } from 'react'
import { CloseRounded } from '@mui/icons-material'

import FilteringContext from '../context/FilteringContext'

type FilterJobProps = {
  title: string;
  clickHandler: () => void
}

const FilterJob = ({ title, clickHandler }: FilterJobProps) => {
  const [select, setSelect] = useState<boolean>(false)

  return (
    <button
      className={`border border-solid flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer !transition-colors last:ml-0 ${select ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'}`}
      onClick={() => {
        setSelect(prev => !prev)
        clickHandler()
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
  const [select, setSelect] = useState<boolean>(false)
  const [showMultiSelect, setShowMultiSelect] = useState<boolean>(false)

  return (
    <button
      className={`border border-solid flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer !transition-colors last:ml-0 ${select ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'} relative`}
      onClick={() => {
        setShowMultiSelect(prev => !prev)
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
      {
        showMultiSelect && filters.length ? (
          <ul className={`light-shadow bg-jv-light w-full flex flex-col absolute top-full right-0 z-10 
          py-1.5 rounded-md`}>
            {
              filters.map(filter => (
                <li
                  className={`text-jv-dark w-full px-3 py-1.5`}
                  onClick={() => {
                    setSelect(prev => !prev)
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

const JobsFiltersBar = () => {
  const filtering = useContext(FilteringContext)

  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center pb-3`}>
      <FilterJob
        title='دورکرای'
        clickHandler={() => {
          filtering.setRemoteHandler()
        }}
      />
      <FilterJob
        title='امریه سربازی'
        clickHandler={() => {
          filtering.setKnowledgeBasedCompanyHandler()
        }}
      />
      <MultiFilterJob
        title='نوع همکاری'
        filters={[
          {
            title: 'تمام وقت',
            clickHandler: () => filtering.setCooperationTypeHandler('full-time')
          },
          {
            title: 'پاره وقت',
            clickHandler: () => filtering.setCooperationTypeHandler('part-time')
          },
          {
            title: 'پروژه ای',
            clickHandler: () => filtering.setCooperationTypeHandler('as-projects')
          }
        ]}
      />
    </div>
  )
}

export default JobsFiltersBar