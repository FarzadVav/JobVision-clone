import { useQuery, useMutation } from '@tanstack/react-query'
// import { useQueryClient } from "@tanstack/react-query"

import supabase from '../../utils/supabase'
import useLoading from '../store/useLoading'
import tokenGenerator from '../../utils/tokenGenerator'
import useAuth from '../store/useAuth'
import CompanyTypes from '../../types/Company.types'
import { COMPANY } from "../../utils/keys"

type DatasTypes = {
  companies: CompanyTypes[];
  company: CompanyTypes
}

const useCompany = () => {
  // const queryClient = useQueryClient()
  const { addLoadingKey, removeLoadingKey } = useLoading(s => s)
  const { loginHandler, getToken } = useAuth(s => s)

  const createCompanies = (data: CompanyTypes[]): DatasTypes => {
    const myToken = getToken()
    return {
      companies: data,
      company: data?.find(company => company._id === myToken) || {} as CompanyTypes
    }
  }

  const { data: company, refetch: refetchCompany, isFetching: fetchingCompany } = useQuery({
    queryKey: [COMPANY],
    queryFn: async () => {
      addLoadingKey(COMPANY)

      const { data: companies } = await supabase
        .from('companies')
        .select('*')

      const { data: provinces } = await supabase
        .from('provinces')
        .select('*')

      const { data: cities } = await supabase
        .from('cities')
        .select('*')

      companies?.forEach(company => {
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
      })

      removeLoadingKey(COMPANY)
      return createCompanies(companies as CompanyTypes[])
    }
  })

  const { mutate: addCompany, isPending: addCompanyLoading } = useMutation({
    mutationKey: [COMPANY],
    mutationFn: async (newCompany: { email: string, password: string }) => {
      const key = tokenGenerator()
      addLoadingKey(key)

      const { data: singleData } = await supabase
        .from('companies')
        .insert([newCompany])
        .select()

      const { data: datas } = await supabase
        .from('companies')
        .select('*')

      // @ts-ignore
      loginHandler(datas?.find(data => data._id === singleData[0]._id)._id)

      refetchCompany()

      // ! the following line will work with real API
      // queryClient.setQueryData([COMPANY], createCompanies(datas as CompanyTypes[]))

      removeLoadingKey(key)
      return datas
    },
  })

  const { mutate: updateCompany, isPending: updateCompanyLoading } = useMutation({
    mutationKey: [COMPANY],
    mutationFn: async (newCompany: {}) => {
      const key = tokenGenerator()
      addLoadingKey(key)

      await supabase
        .from('companies')
        .update(newCompany)
        .eq('_id', getToken())
        .select()

      const { data: datas } = await supabase
        .from('companies')
        .select('*')

      refetchCompany()

      // ! the following line will work with real API
      // queryClient.setQueryData([COMPANY], createCompanies(datas as CompanyTypes[]))

      removeLoadingKey(key)
      return datas
    },
  })

  return { company, refetchCompany, addCompany, updateCompany, fetchingCompany, addCompanyLoading, updateCompanyLoading }
}

export default useCompany