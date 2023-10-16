import { useState } from 'react'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ComboBox from '../../components/inputs/ComboBox'
import { StarBorder } from '@mui/icons-material'
import MultiSelectBox from '../../components/inputs/MultiSelectBox'
import Title from '../../components/Title'

const datas = ['aaa', 'bbb', 'ccc']

const COOPERATION_TYPE = z.enum(['full-time', 'part-time', 'as-projects'])
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
  businessTrips: z.string().nonempty(),
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
    // register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      salary_2: '0'
    }
  })
  const [form, setForm] = useState<{
    jobTags: string[];
    benefits: string[];
    abilityForBoss: string[];
    education: string[];
    languages: string[];
    techs: string[]
  }>({
    jobTags: [],
    benefits: [],
    abilityForBoss: [],
    education: [],
    languages: [],
    techs: []
  })

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    await new Promise((resolve) => setTimeout(() => {
      console.log(data);
      reset()
      return resolve
    }, 1500));
  }

  return (
    <div className={`w-full flex flex-col`}>
      <form
        className={`w-full flex flex-col`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title withOutIcon>
          <label className={`!text-xl mb-2`}>
            تگ های شغلی
          </label>
        </Title>
        <MultiSelectBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال Front-End'
          datas={datas}
          list={form.jobTags}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, jobTags: [...prev.jobTags, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, jobTags: [] }))}
          unSelectHandler={(item: string) => setForm(prev => ({ ...prev, jobTags: prev.jobTags.filter(tag => tag !== item) }))}
        />

        <Title withOutIcon>
          <label className={`!text-xl mb-2 mt-5`}>
            مزیت های شغلی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال بیمه'
          list={form.benefits}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, benefits: [...prev.benefits, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, benefits: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon>
          <label className={`!text-xl mb-2 mt-5`}>
            شاخص های کلیدی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال 1 سال سابقه کار'
          list={form.abilityForBoss}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, abilityForBoss: [...prev.abilityForBoss, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, abilityForBoss: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2 mt-5`}>
          <label className={`!text-xl`}>
            مدارک تحصیلی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال لیسانس مهندسی کامپیوتر'
          list={form.education}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, education: [...prev.education, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, education: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2 mt-5`}>
          <label className={`!text-xl`}>
            زبان های بین المللی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال زبان انگلیسی'
          list={form.languages}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, languages: [...prev.languages, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, languages: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2 mt-5`}>
          <label className={`!text-xl`}>
            تکنولوژی ها
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال Typescript'
          list={form.techs}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, techs: [...prev.techs, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, techs: [] }))}
        >
          <StarBorder />
        </ComboBox>
      </form>
    </div>
  )
}

export default AddJobAd