import { ReactNode, createContext, useState } from "react";

import filtersTypes from "../types/filters.types";

interface FilteringContextProps extends filtersTypes {
  setRemote: Function;
  setKnowledgeBasedCompany: Function;
  setCooperationType: Function;
  setSalary: Function;
}

const FilteringContext = createContext({} as FilteringContextProps)

export const FilteringContextProvider = ({ children }: { children: ReactNode }) => {
  const [remote, setRemote] = useState<boolean>(false)
  const [knowledgeBasedCompany, setKnowledgeBasedCompany] = useState<boolean>(false)
  const [cooperationType, setCooperationType] = useState<{
    fullTime: boolean;
    partTime: boolean;
    asProject: boolean;
  }>({
    fullTime: false,
    partTime: false,
    asProject: false
  })
  const [salary, setSalary] = useState<{
    one: [0, 4];
    two: [4, 8];
    three: [8, 15];
    four: [15, 25];
    five: [25, 75]
  }>({
    one: [0, 4],
    two: [4, 8],
    three: [8, 15],
    four: [15, 25],
    five: [25, 75]
  })

  return (
    <FilteringContext.Provider
      value={{
        remote,
        setRemote,
        knowledgeBasedCompany,
        setKnowledgeBasedCompany,
        cooperationType,
        setCooperationType,
        salary,
        setSalary
      }}
    >
      {children}
    </FilteringContext.Provider>
  )
}

export default FilteringContext