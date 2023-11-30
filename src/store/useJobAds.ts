import { create } from "zustand";

import JobAdsTypes from "../types/jobAds.types";

type useJobAdsStoreTypes = {
  filteredJobAds: JobAdsTypes[];
  selectedJobAds: JobAdsTypes;
  hasFilter: boolean;
  setFilteredJobAds: (newJobAds: JobAdsTypes[]) => void;
  setJobAdsToDefault: () => void,
  setSelectedJobAds: (jobAd: JobAdsTypes) => void
  setHasFilter: (state: boolean) => void
}

const useJobAdsStore = create<useJobAdsStoreTypes>(set => ({
  filteredJobAds: [],
  selectedJobAds: {} as JobAdsTypes,
  hasFilter: false,
  setFilteredJobAds: newJobAds => set(() => ({ filteredJobAds: newJobAds })),
  setJobAdsToDefault: () => set(() => ({ filteredJobAds: [] })),
  setSelectedJobAds: jobAd => set(() => ({ selectedJobAds: jobAd })),
  setHasFilter: state => set(() => ({ hasFilter: state }))
}))

export default useJobAdsStore