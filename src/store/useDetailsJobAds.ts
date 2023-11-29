import { create } from "zustand";
import supabase from "../utils/supabase";
import CooperationTypes from "../types/cooperationTypes.type";

type useDetailsJobAdsTypes = {
  cooperationType: { id: string; name: CooperationTypes }[];
  getDetails: () => void
}

const useDetailsJobAds = create<useDetailsJobAdsTypes>(set => ({
  cooperationType: [],
  getDetails: async () => {
    const { data: cooperationTypes } = await supabase
      .from('cooperationTypes')
      .select('*')

    set({
      cooperationType: cooperationTypes || []
    })
  }
}))

export default useDetailsJobAds