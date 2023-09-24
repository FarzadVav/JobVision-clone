import { Link } from 'react-router-dom';
import { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'

type FilterJobProps = {
  title: string;
  query: string;
  param: string;
  setSelectedFiltersHandler: (title: string) => void
}

const FilterJob = ({ title, query, param, setSelectedFiltersHandler }: FilterJobProps) => {
  const [select, setSelect] = useState<boolean>(false)

  return (
    <Link
      className={`border border-solid flex justify-center items-center px-4 py-1 ml-3 rounded-full
      cursor-pointer !transition-colors last:ml-0 ${select ? 'bg-jv-primary text-white border-jv-primary pl-1.5' : 'bg-white border-jv-light hover:text-jv-primary'}`}
      onClick={() => {
        setSelect(prev => !prev)
        setSelectedFiltersHandler(title)
      }}
      to={`?${query}=${param}`}
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
    </Link>
  )
}

const filter = {
  title: 'دورکاری',
  query: 'type',
  param: 'remote'
}

const JobsFiltersBar = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const setSelectedFiltersHandler = (title: string) => {
    setSelectedFilters(prev => ([...prev, title]))
  }

  return (
    <div className={`list-scrollbar w-full mt-6 flex items-center overflow-x-auto pb-3`}>
      {
        selectedFilters.length ? (
          <button
            className={`bg-jv-primary text-white border border-solid border-jv-primary cursor-pointer
            flex justify-center items-center pr-4 pl-1.5 py-1 rounded-full ml-3`}
            onClick={() => setSelectedFilters([])}
          >
            فیلتر ها
            <span className={`mr-2`}><code>(</code>{selectedFilters.length}<code>)</code> </span>
            <CloseRounded
              className='bg-jv-primary text-white brightness-125 mr-2 rounded-full p-0.5'
              fontSize='small'
            />
          </button>
        ) : null
      }
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
      <FilterJob {...filter} setSelectedFiltersHandler={setSelectedFiltersHandler} />
    </div>
  )
}

export default JobsFiltersBar