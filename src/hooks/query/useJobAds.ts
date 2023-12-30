import { useMutation, useQuery } from "@tanstack/react-query"
// import { useQueryClient } from "@tanstack/react-query"
import supabase from "../../utils/supabase"

import useLoading from "../store/useLoading"
import tokenGenerator from "../../utils/tokenGenerator"
import { newJobAdTypes } from "../../types/JobAds.types"
import { JOB_ADS } from "../../utils/keys"

function useJobAds() {
  // const queryClient = useQueryClient()
  const { addLoadingKey, removeLoadingKey } = useLoading(s => s)

  const { data: jobAds, refetch: reFetchJobAds } = useQuery({
    queryKey: [JOB_ADS],
    queryFn: async () => {
      addLoadingKey(JOB_ADS)

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

      removeLoadingKey(JOB_ADS)
      return jobAds
    }
  })

  const { mutate: addJobAd, isPending: addJobAdPending } = useMutation({
    mutationKey: [JOB_ADS],
    mutationFn: async (newJobAd: newJobAdTypes) => {
      const key = tokenGenerator()
      addLoadingKey(key)

      // @ts-ignore
      const { data } = await supabase
        .from('jobAds')
        .insert([newJobAd])
        .select()

      reFetchJobAds()

      // ! the following line will work with real API
      // queryClient.setQueryData([JOB_ADS], data)

      removeLoadingKey(key)
      return data
    },
  })

  return { jobAds, addJobAd, addJobAdPending }
}

export default useJobAds