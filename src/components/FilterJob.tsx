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

const JobsFiltersBar = () => {
  const filtering = useContext(FilteringContext)

  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center overflow-x-auto pb-3`}>
      <FilterJob
        title='دورکرای'
        clickHandler={() => {
          console.log(123);
          filtering.setRemote((prev: boolean) => !prev)
        }}
      />
    </div>
  )
}

export default JobsFiltersBar