import { create } from "zustand";
import JobAdsTypes from "../types/JobAds.types";
import supabase from "../utils/supabase";

type useJobAdsStoreTypes = {
  jobAds: JobAdsTypes[];
  filteredJobAds: JobAdsTypes[];
  selectedJobAds: JobAdsTypes;
  hasFilter: boolean;
  getJobAds: () => void;
  setFilteredJobAds: (newJobAds: JobAdsTypes[]) => void;
  setJobAdsToDefault: () => void,
  setSelectedJobAds: (jobAd: JobAdsTypes) => void
  setHasFilter: (state: boolean) => void
}

const useJobAdsStore = create<useJobAdsStoreTypes>(set => ({
  jobAds: [],
  filteredJobAds: [],
  selectedJobAds: {} as JobAdsTypes,
  hasFilter: false,
  getJobAds: async () => {
    const { data: jobAds } = await supabase
      .from('jobAds')
      .select('*')

    const { data: companies } = await supabase
      .from('companies')
      .select('*')

    const { data: provinces } = await supabase
      .from('provinces')
      .select('*')

    const { data: cities } = await supabase
      .from('cities')
      .select('*')

    jobAds?.forEach(jobAd => {
      companies?.forEach(company => {
        if (jobAd.company === company._id) {
          provinces?.forEach(province => {
            if (company.province === province._id) {
              company.province = province
            }
          })
          cities?.forEach(city => {
            if (company.city === city._id) {
              company.city = city
            }
          })
          jobAd.company = company
        }
      })
    })

    set(() => ({ jobAds: jobAds || [] }))
  },
  setFilteredJobAds: newJobAds => set(() => ({ filteredJobAds: newJobAds })),
  setJobAdsToDefault: () => set(() => ({ filteredJobAds: [] })),
  setSelectedJobAds: jobAd => set(() => ({ selectedJobAds: jobAd })),
  setHasFilter: state => set(() => ({ hasFilter: state }))
}))

export default useJobAdsStore