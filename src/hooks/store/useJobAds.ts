import { create } from "zustand";

import JobAdsTypes from "../../types/JobAds.types";
import TabsTypes from "../../types/Tabs.types";

type useJobAdsStoreTypes = {
  filteredJobAds: JobAdsTypes[];
  singleJobAd: JobAdsTypes | undefined;
  singleJobAdTabs: TabsTypes;
  hasFilter: boolean;
  setJobAdsToDefault: () => void;
}

const useJobAdsStore = create<useJobAdsStoreTypes>(set => ({
  filteredJobAds: [],
  singleJobAd: {} as JobAdsTypes,
  singleJobAdTabs: [],
  hasFilter: false,
  setJobAdsToDefault: () => set(() => ({ filteredJobAds: [] })),
}))

export default useJobAdsStore