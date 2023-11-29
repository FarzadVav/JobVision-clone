import { create } from "zustand";
import supabase from "../utils/supabase";
import CooperationTypes from "../types/CooperationTypes.type";

type useDetailsJobAdsTypes = {
  cooperationType: { _id: string; name: CooperationTypes }[];
  provinces: { _id: string; name: CooperationTypes }[];
  cities: { _id: string; name: CooperationTypes }[];
  getDetails: () => void
}

const useDetailsJobAds = create<useDetailsJobAdsTypes>(set => ({
  cooperationType: [],
  provinces: [],
  cities: [],
  getDetails: async () => {
    const { data: cooperationTypes } = await supabase
      .from('cooperationTypes')
      .select('*')

    const { data: provinces } = await supabase
      .from('provinces')
      .select('*')

    const { data: cities } = await supabase
      .from('cities')
      .select('*')

    set({
      cooperationType: cooperationTypes || [],
      provinces: provinces || [],
      cities: cities || []
    })
  }
}))

export default useDetailsJobAds