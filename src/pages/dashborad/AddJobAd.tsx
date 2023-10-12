import { useState } from 'react'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const COOPERATION_TYPE = z.enum(['full-time', 'part-time', 'as-projects'])
const BUSINESS_TRIPS = z.enum(['month', 'year', 'ever', 'some-times', 'none'])
const GENDER = z.enum(['male', 'female', 'none'])

const schema = z.object({
  category: z.string().nonempty(),
  title: z.string().nonempty().min(3).max(256),
  city: z.string().nonempty(),
  location: z.string().nonempty(),
  remote: z.boolean(),
  isUrgent: z.boolean(),
  knowledgeBasedCompany: z.boolean(),
  salary_1: z.string().nonempty().regex(/^[0-9]+$/),
  salary_2: z.string().nonempty().regex(/^[0-9]+$/),
  workTimes: z.string().nonempty(),
  cooperationType: COOPERATION_TYPE,
  businessTrips: BUSINESS_TRIPS,
  businessTripsNumbers: z.string().nonempty().regex(/^[0-9]+$/),
  description: z.string().nonempty(),
  age_1: z.string().nonempty().regex(/^[0-9]+$/),
  age_2: z.string().nonempty().regex(/^[0-9]+$/),
  gender: GENDER,
  endOfMilitaryService: z.boolean()
})

type formTypes = z.infer<typeof schema>

const AddJobAd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      salary_2: '0'
    }
  })
  const [form, setForm] = useState<{
    jobTags: { title: string; id: string; }[];
    benefits: string[];
    abilityForBoss: string[];
    education: string[];
    languages: { name: string; power: number }[];
    techs: { name: string; power: number }[]
  }>({
    jobTags: [],
    benefits: [],
    abilityForBoss: [],
    education: [],
    languages: [],
    techs: []
  })

  return (
    <div>AddJobAd</div>
  )
}

export default AddJobAd