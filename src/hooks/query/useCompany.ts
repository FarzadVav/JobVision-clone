import { useRef } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import supabase from '../../utils/supabase'
import useLoading from '../store/useLoading'
import tokenGenerator from '../../utils/tokenGenerator'
import useAuth from '../store/useAuth'

const useCompany = () => {
  const { addLoadingKey, removeLoadingKey } = useLoading(s => s)
  const { loginHandler } = useAuth(s => s)

  const key = useRef<string>(tokenGenerator())

  const { data, refetch } = useQuery({
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
    mutationKey: ['company'],
    mutationFn: async (newCompany: { email: string, password: string }) => {
      const { data } = await supabase
        .from('companies')
        .insert([newCompany])
        .select()


      // @ts-ignore
      useAuth.setState({ company: data[0] })
      // @ts-ignore
      loginHandler(data[0]._id)
      refetch()

      return data
    },
  })

  return { data, mutate, mutateLoading }
}

export default useCompany