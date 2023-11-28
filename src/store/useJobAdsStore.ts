import { create } from "zustand";
import JobAdsTypes from "../types/JobAds.types";
import supabase from "../utils/supabase";

type useJobAdsStoreTypes = {
  jobAds: JobAdsTypes[];
  getNesJobAds: () => void;
}

const useJobAdsStore = create<useJobAdsStoreTypes>(set => ({
  jobAds: [],
  getNesJobAds: async () => {
    const { data } = await supabase
      .from('jobAds')
      .select('*')
    //@ts-ignore
    set(state => state.jobAds = data)
  }
}))

export default useJobAdsStore