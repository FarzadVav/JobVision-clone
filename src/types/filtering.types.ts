export type CooperationTypes = 'full-time' | 'part-time' | 'as-projects' | 'none'

export type SalaryTypes = '0-4' | '4-8' | '8-15' | '15-25' | '25-40' | '40-75' | 'none'

export type MultiFiltersTypes = CooperationTypes | SalaryTypes

type filtersTypes = {
  remote: boolean;
  setRemoteHandler: (state?: boolean) => void;
  knowledgeBasedCompany: boolean;
  setKnowledgeBasedCompanyHandler: (state?: boolean) => void;
  cooperationType: CooperationTypes;
  setCooperationTypeHandler: (type: CooperationTypes) => void
  salaryType: SalaryTypes
  setSalaryTypeHandler: (salaryType: SalaryTypes) => void
}

export default filtersTypes