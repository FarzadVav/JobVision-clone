import { useRef } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import supabase from '../../utils/supabase'
import useLoading from '../../store/useLoading'
import tokenGenerator from '../../utils/tokenGenerator'

const useCompany = () => {
  const { addLoadingKey, removeLoadingKey } = useLoading(s => s)
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
    }
  })

  const { mutate } = useMutation({
    mutationKey: ['company'],
    mutationFn: async (detail: { email: string; password: string }) => {
      const { data } = await supabase
        .from('companies')
        .insert([
          {
            email: detail.email,
            password: detail.password
          }
        ])
        .select()

      return data
    }
  })

  return { data, mutate }
}

export default useCompany