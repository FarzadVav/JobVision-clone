import { useQuery } from "@tanstack/react-query"
import supabase from "../utils/supabase"

import useLoading from "../store/useLoading"

function useJobAdsQuery() {
  const { startPageLoadingHandler, endPageLoadingHandler } = useLoading(s => s)

  return useQuery({
    queryKey: ['jobAds'],
    queryFn: async () => {
      startPageLoadingHandler()

      const { data: jobAds } = await supabase
        .from('jobAds')
        .select('*')

      const { data: categories } = await supabase
        .from('categories')
        .select('*')

      const { data: tags } = await supabase
        .from('tags')
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

      const { data: cooperationTypes } = await supabase
        .from('cooperationTypes')
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
        cooperationTypes?.forEach(type => {
          if (jobAd.cooperationType === type._id) {
            jobAd.cooperationType = type
          }
        })
        categories?.forEach(cat => {
          if (jobAd.category === cat._id) {
            jobAd.category = cat
          }
        })
        jobAd.tags = jobAd.tags.map((tag: string) => tags?.find(tag2 => tag === tag2._id))
      })

      endPageLoadingHandler()
      return jobAds
    }
  })
}

export default useJobAdsQuery