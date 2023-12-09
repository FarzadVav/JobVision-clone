import { useQuery, useMutation } from '@tanstack/react-query'

import supabase from '../../utils/supabase'

const useCompany = () => {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { data } = await supabase
        .from('companies')
        .select('*')

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