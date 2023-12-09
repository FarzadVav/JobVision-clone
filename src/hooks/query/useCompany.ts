import { useRef } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import supabase from '../../utils/supabase'
import useLoading from '../store/useLoading'
import tokenGenerator from '../../utils/tokenGenerator'
import useAuth from '../store/useAuth'
import { companyDetailsTypes } from '../../types/Company.types'

const useCompany = () => {
  const { addLoadingKey, removeLoadingKey } = useLoading(s => s)
  const { loginHandler } = useAuth(s => s)

  const key = useRef<string>(tokenGenerator())

  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      addLoadingKey(key.current)

      const { data } = await supabase
        .from('companies')
        .select('*')

      removeLoadingKey(key.current)
      return data
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
      useAuth.setState({ company: data[0] })
      // @ts-ignore
      loginHandler(data[0]._id)

      return data
    },
  })

  const { mutate: updateMutate, isPending: updateMutateLoading } = useMutation({
    mutationKey: ['companies'],
    mutationFn: async (newCompany: companyDetailsTypes) => {
      const { error, data } = await supabase
        .from('companies')
        .update([newCompany])
        .select()

      console.log(error);
      console.log(data);

      // @ts-ignore
      useAuth.setState({ company: data[0] })

      return data
    },
  })

  return { data, mutate, mutateLoading, updateMutate, updateMutateLoading }
}

export default useCompany