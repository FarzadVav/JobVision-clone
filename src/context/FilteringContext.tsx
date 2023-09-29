import { ReactNode, createContext, useState } from "react";

import filtersTypes, { CooperationTypes, SalaryTypes } from "../types/filtering.types";

const FilteringContext = createContext({} as filtersTypes)

export const FilteringContextProvider = ({ children }: { children: ReactNode }) => {
  const [remote, setRemote] = useState<boolean>(false)
  const [knowledgeBasedCompany, setKnowledgeBasedCompany] = useState<boolean>(false)
  const [cooperationType, setCooperationType] = useState<CooperationTypes>('none')
  const [salaryType, setSalaryType] = useState<SalaryTypes>('none')

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

  const setCooperationTypeHandler = (type: CooperationTypes) => {
    setCooperationType(type)
  }

  const setSalaryTypeHandler = (salaryType: SalaryTypes) => {
    setSalaryType(salaryType)
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
        salaryType,
        setSalaryTypeHandler
      }}
    >
      {children}
    </FilteringContext.Provider>
  )
}

export default FilteringContext