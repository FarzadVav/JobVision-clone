import { useState, useContext } from 'react'
import { CloseRounded } from '@mui/icons-material'

import FilteringContext from '../context/FilteringContext'
import { MultiFiltersTypes } from '../types/filtering.types';

type FilterJobProps = {
  title: string;
  clickHandler: () => void
}

const FilterJob = ({ title, clickHandler }: FilterJobProps) => {
  const [select, setSelect] = useState<boolean>(false)

  return (
    <button
      className={`border border-solid min-w-max flex justify-center items-center px-4 py-1 ml-3 rounded-full
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
    type: MultiFiltersTypes;
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
                    if (filter.type === 'none') {
                      setSelected(false)
                    } else {
                      setSelected(true)
                    }
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
    <div className={`list-scrollbar w-full mt-6 flex items-center pb-3 overflow-x-auto sm:overflow-visible`}>
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
        title={
          filtering.cooperationType === 'full-time' ? 'تمام وقت'
            : filtering.cooperationType === 'as-projects' ? 'پروژه ای'
              : filtering.cooperationType === 'part-time' ? 'پاره وقت'
                : 'نوع همکاری'
        }
        filters={[
          {
            title: 'پیش فرض',
            type: 'none',
            clickHandler: () => filtering.setCooperationTypeHandler('none')
          },
          {
            title: 'تمام وقت',
            type: 'full-time',
            clickHandler: () => filtering.setCooperationTypeHandler('full-time')
          },
          {
            title: 'پاره وقت',
            type: 'part-time',
            clickHandler: () => filtering.setCooperationTypeHandler('part-time')
          },
          {
            title: 'پروژه ای',
            type: 'as-projects',
            clickHandler: () => filtering.setCooperationTypeHandler('as-projects')
          }
        ]}
      />
      <MultiFilterJob
        title={
          filtering.salaryType === '0-4' ? '0 تا 4 میلیون'
            : filtering.salaryType === '4-8' ? '4 تا 8 میلیون'
              : filtering.salaryType === '8-15' ? '8 تا 15 میلیون'
                : filtering.salaryType === '15-25' ? '15 تا 25 میلیون'
                  : filtering.salaryType === '25-40' ? '25 تا 40 میلیون'
                    : filtering.salaryType === '40-75' ? '40 تا 75 میلیون'
                      : 'حقوق ماهیانه'
        }
        filters={[
          {
            title: 'پیش فرض',
            type: 'none',
            clickHandler: () => filtering.setSalaryTypeHandler('none')
          },
          {
            title: '0 تا 4 میلیون',
            type: '0-4',
            clickHandler: () => filtering.setSalaryTypeHandler('0-4')
          },
          {
            title: '4 تا 8 میلیون',
            type: '4-8',
            clickHandler: () => filtering.setSalaryTypeHandler('4-8')
          },
          {
            title: '8 تا 15 میلیون',
            type: '8-15',
            clickHandler: () => filtering.setSalaryTypeHandler('8-15')
          },
          {
            title: '15 تا 25 میلیون',
            type: '15-25',
            clickHandler: () => filtering.setSalaryTypeHandler('15-25')
          },
          {
            title: '25 تا 40 میلیون',
            type: '25-40',
            clickHandler: () => filtering.setSalaryTypeHandler('25-40')
          },
          {
            title: '40 تا 75 میلیون',
            type: '40-75',
            clickHandler: () => filtering.setSalaryTypeHandler('40-75')
          },
        ]}
      />
    </div>
  )
}

export default JobsFiltersBar