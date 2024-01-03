import { create } from "zustand";

import JobAdsTypes from "../../types/JobAds.types";
import TabsTypes from "../../types/Tabs.types";

type useJobAdsStoreTypes = {
  filteredJobAds: JobAdsTypes[];
  selectedJobAds: JobAdsTypes | undefined;
  singleJobAdTabs: TabsTypes;
  hasFilter: boolean;
  setFilteredJobAds: (newJobAds: JobAdsTypes[]) => void;
  setJobAdsToDefault: () => void;
  setSelectedJobAds: (jobAd: JobAdsTypes) => void;
  setHasFilter: (state: boolean) => void
}

const useJobAdsStore = create<useJobAdsStoreTypes>(set => ({
  filteredJobAds: [],
  selectedJobAds: {} as JobAdsTypes,
  singleJobAdTabs: [],
  hasFilter: false,
  setFilteredJobAds: newJobAds => set(() => ({ filteredJobAds: newJobAds })),
  setJobAdsToDefault: () => set(() => ({ filteredJobAds: [] })),
  setSelectedJobAds: jobAd => set(() => ({ selectedJobAds: jobAd })),
  setHasFilter: state => set(() => ({ hasFilter: state }))
}))

export default useJobAdsStore