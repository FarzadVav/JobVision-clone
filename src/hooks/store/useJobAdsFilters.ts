import { create } from 'zustand'
import CooperationTypes from '../../types/CooperationTypes.type';

export type useJobAdsFiltersTypes = {
  q_id: string | null;
  q_search: string | null;
  q_category: string | null;
  q_tag: string | null;
  q_province: string | null;
  q_city: string | null;
  q_cooperationType: string | null;
  q_cooperationTypeCity: string | null;
  remote: boolean;
  knowledgeBasedCompany: boolean;
  cooprationType: CooperationTypes | null;
  salaryType: [number, number] | null;
  setFiltersToDefault: () => void
}

const initialValues: useJobAdsFiltersTypes = {
  q_id: null,
  q_search: null,
  q_category: null,
  q_tag: null,
  q_province: null,
  q_city: null,
  q_cooperationType: null,
  q_cooperationTypeCity: null,
  remote: false,
  knowledgeBasedCompany: false,
  cooprationType: null,
  salaryType: null, 
  setFiltersToDefault: () => { }
}

const useJobAdsFilters = create<useJobAdsFiltersTypes>(set => ({
  ...initialValues,
  setFiltersToDefault: () => set({ ...initialValues })
}))

export default useJobAdsFilters