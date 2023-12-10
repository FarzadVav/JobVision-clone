import { useRef } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import supabase from '../../utils/supabase'
import useLoading from '../store/useLoading'
import tokenGenerator from '../../utils/tokenGenerator'
import useAuth from '../store/useAuth'
import CompanyTypes, { companyDetailsTypes } from '../../types/Company.types'

type DatasTypes = {
  companies: CompanyTypes[];
  company: CompanyTypes
}

const useCompany = () => {
  const { addLoadingKey, removeLoadingKey } = useLoading(s => s)
  const { loginHandler, getToken } = useAuth(s => s)

  const key = useRef<string>(tokenGenerator())

  const { data, refetch } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      addLoadingKey(key.current)

      const myToken = getToken()

      const { data } = await supabase
        .from('companies')
        .select('*')

      removeLoadingKey(key.current)

      const datas: DatasTypes = {
        companies: data as CompanyTypes[],
        company: data?.find(company => company._id === myToken) || {} as CompanyTypes
      }

      return datas
    },
    staleTime: 0
  })

  const { mutate, isPending: mutateLoading } = useMutation({
    mutationKey: ['companies'],
    mutationFn: async (newCompany: { email: string, password: string }) => {
      const { data } = await supabase
        .from('companies')
        .insert([newCompany])
        .select()

      // @ts-ignore
      loginHandler(data[0]._id)
      refetch()

      return data
    },
  })

  const { mutate: updateMutate, isPending: updateMutateLoading } = useMutation({
    mutationKey: ['companies'],
    mutationFn: async (newCompany: companyDetailsTypes) => {
      const { data: company } = await supabase
        .from('companies')
        .update(newCompany)
        .eq('_id', data?.company._id)
        .select()

      refetch()

      return company
    },
  })

  return { data, mutate, mutateLoading, updateMutate, updateMutateLoading }
}

export default useCompany