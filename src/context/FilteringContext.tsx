import { ReactNode, createContext, useState } from "react";

type filtersTypes = {
  remote: boolean;
  setRemoteHandler: (state?: boolean) => void;
  knowledgeBasedCompany: boolean;
  setKnowledgeBasedCompanyHandler: (state?: boolean) => void;
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  setCooperationTypeHandler: (type: 'full-time' | 'part-time' | 'as-projects') => void
  salary: [number, number]
  setSalaryHandler: (newSalary: [number, number]) => void
}

const FilteringContext = createContext({} as filtersTypes)

export const FilteringContextProvider = ({ children }: { children: ReactNode }) => {
  const [remote, setRemote] = useState<boolean>(false)
  const [knowledgeBasedCompany, setKnowledgeBasedCompany] = useState<boolean>(false)
  const [cooperationType, setCooperationType] = useState<'full-time' | 'part-time' | 'as-projects'>('full-time')
  const [salary, setSalary] = useState<[number, number]>([0, 75])

  const setRemoteHandler = (state?: boolean) => {
    if (typeof state === 'undefined') {
      setRemote(prev => !prev)
    } else {
      setRemote(state)
    }
  }

  const setKnowledgeBasedCompanyHandler = (state?: boolean) => {
    if (typeof state === 'undefined') {
      setKnowledgeBasedCompany(prev => !prev)
    } else {
      setKnowledgeBasedCompany(state)
    }
  }

  const setCooperationTypeHandler = (type: 'full-time' | 'part-time' | 'as-projects') => {
    setCooperationType(type)
  }

  const setSalaryHandler = (newSalary: [number, number]) => {
    setSalary(newSalary)
  }

  return (
    <FilteringContext.Provider
      value={{
        remote,
        setRemoteHandler,
        knowledgeBasedCompany,
        setKnowledgeBasedCompanyHandler,
        cooperationType,
        setCooperationTypeHandler,
        salary,
        setSalaryHandler
      }}
    >
      {children}
    </FilteringContext.Provider>
  )
}

export default FilteringContext