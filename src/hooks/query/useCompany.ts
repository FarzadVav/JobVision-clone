import { useQuery, useMutation } from '@tanstack/react-query'

import supabase from '../../utils/supabase'

const useCompany = () => {
  const { data } = useQuery({
    queryKey: ['company'],
    queryFn: async () => {
      const { data: companies } = await supabase
        .from('companies')
        .select('*')

      return companies
    }
  })

  const { mutate } = useMutation({
    mutationKey: ['company'],
    mutationFn: async (detail: { email: string; password: string }) => {
      const { data: company } = await supabase
        .from('companies')
        .insert([
          {
            email: detail.email,
            password: detail.password
          }
        ])
        .select()

      return company
    }
  })

  return { data, mutate }
}

export default useCompany