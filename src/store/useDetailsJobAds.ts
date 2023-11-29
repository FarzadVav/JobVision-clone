import { create } from "zustand";
import supabase from "../utils/supabase";
import CooperationTypes from "../types/CooperationTypes.type";
import JobAdsMenuTypes from "../types/JobAdsMenu.types";
import tokenGenerator from "../utils/tokenGenerator";

type useDetailsJobAdsTypes = {
  categories: { _id: string; name: CooperationTypes }[];
  tags: { _id: string; name: CooperationTypes }[];
  cooperationType: { _id: string; name: CooperationTypes }[];
  provinces: { _id: string; name: CooperationTypes }[];
  cities: { _id: string; name: CooperationTypes }[];
  jobAdsMneu: JobAdsMenuTypes[];
  getDetails: () => void
}

const useDetailsJobAds = create<useDetailsJobAdsTypes>(set => ({
  categories: [],
  tags: [],
  cooperationType: [],
  provinces: [],
  cities: [],
  jobAdsMneu: [],
  getDetails: async () => {
    const { data: categories } = await supabase
      .from('categories')
      .select('*')

    const { data: tags } = await supabase
      .from('tags')
      .select('*')

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
      categories: categories || [],
      tags: tags || [],
      cooperationType: cooperationTypes || [],
      provinces: provinces || [],
      cities: cities || [],
      jobAdsMneu: [
        {
          id: tokenGenerator(),
          title: 'دسته بندی مشاغل',
          query: 'category',
          links: categories?.map(cat => ({
            link: cat.name,
            query2: 'tag',
            subLinks: tags?.map(tag => tag.name) || []
          })) || []
        },
        {
          id: tokenGenerator(),
          title: 'استان و شهر',
          query: 'province',
          links: provinces?.map(province => ({
            link: province.name,
            query2: 'city',
            subLinks: cities?.map(city => city.name) || []
          })) || []
        },
        {
          id: tokenGenerator(),
          title: 'نوع همکاری',
          query: 'cooperationType',
          links: cooperationTypes?.map(type => ({
            link: type.name,
            query2: 'cooperationType-city',
            subLinks: cooperationTypes?.map(type => `${type.name}_شهر`) || []
          })) || []
        }
      ]
    })
  }
}))

// cities?.map(city => `${type.name}_${city.name}`)

export default useDetailsJobAds