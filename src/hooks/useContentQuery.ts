import { useQuery } from "@tanstack/react-query"
import supabase from "../utils/supabase"

import useLoading from "../store/useLoading"
import tokenGenerator from "../utils/tokenGenerator"
import CooperationTypes from "../types/CooperationTypes.type"
import JobAdsMenuTypes from "../types/JobAdsMenu.types"

type ContentTypes = {
  categories: { _id: string; name: string }[];
  tags: { _id: string; name: string }[];
  cooperationType: { _id: string; name: CooperationTypes }[];
  provinces: { _id: string; name: string }[];
  cities: { _id: string; name: string }[];
  jobAdsMneu: JobAdsMenuTypes[]
}

function useContent() {
  const { startPageLoadingHandler, endPageLoadingHandler } = useLoading(s => s)

  return useQuery({
    queryKey: ['content'],
    queryFn: async () => {
      console.log(2);
      startPageLoadingHandler()

      let content: ContentTypes = {} as ContentTypes
      
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

      content = {
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
              subLinks: tags?.filter(tag => tag.parentCategory === cat._id).map(tag => tag.name) || []
            })) || []
          },
          {
            id: tokenGenerator(),
            title: 'استان و شهر',
            query: 'province',
            links: provinces?.map(province => ({
              link: province.name,
              query2: 'city',
              subLinks: cities?.filter(city => city.parentProvince === province._id).map(city => city.name) || []
            })) || []
          },
          {
            id: tokenGenerator(),
            title: 'نوع همکاری',
            query: 'cooperationType',
            links: cooperationTypes?.map(type => ({
              link: type.name,
              query2: 'cooperationType-city',
              subLinks: cities?.map(city => `${type.name}_${city.name}`) || []
            })) || []
          }
        ]
      }

      endPageLoadingHandler()
      return content
    },
  })
}

export default useContent