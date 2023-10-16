import { useState } from 'react'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ComboBox from '../../components/inputs/ComboBox'
import { SearchRounded, StarBorder, WorkOutlineRounded } from '@mui/icons-material'
import MultiSelectBox from '../../components/inputs/MultiSelectBox'
import Title from '../../components/Title'
import AutoComplete from '../../components/inputs/AutoComplete'
import TextInput from '../../components/inputs/TextInput'
import { PulseLoader } from 'react-spinners'

const catDatas = ['برنامه نویسی', 'بازاریابی', 'فتوشاپ']
const datas = ['aaa', 'bbb', 'ccc']
const cities = ['تهران', 'تبریز', 'مشهد']
const cooperationTypes = ['پاره وقت', 'تمام وقت', 'پروژه ای']

const COOPERATION_TYPE = z.enum(['full-time', 'part-time', 'as-projects'])
const GENDER = z.enum(['male', 'female', 'none'])

const schema = z.object({
  category: z.string().nonempty(),
  title: z.string().nonempty().min(3).max(256),
  city: z.string().nonempty(),
  location: z.string().nonempty(),
  remote: z.boolean(),
  isUrgent: z.boolean(),
  salary_1: z.string().nonempty().regex(/^[0-9]+$/),
  salary_2: z.string().regex(/^[0-9]+$/),
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
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
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
  const [showSalary2, setShowSalary2] = useState<boolean>(false)
  const [submittedForm, setSubmittedForm] = useState<boolean>(false)

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
        <Title withOutIcon customClass={`mb-2.5`}>
          <label className={`!text-xl`}>
            عنوان آگهی
          </label>
        </Title>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('title') }}
          placeholder={`برای مثال استخدام آقای اکیس`}
          error={!!errors.title}
        >
          <SearchRounded />
        </TextInput>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            آدرس مکان
          </label>
        </Title>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('location') }}
          placeholder={`برای مثال هاشمیه، هاشمیه 4، پلاک 27`}
          error={!!errors.location}
        >
          <SearchRounded />
        </TextInput>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            شرح ساعت کاری
          </label>
        </Title>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('workTimes') }}
          placeholder={`برای مثال از 7 صبح تا 4 بعد از ظهر`}
          error={!!errors.workTimes}
        >
          <SearchRounded />
        </TextInput>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            میزان حقوق
          </label>
        </Title>
        <div className={`w-full flex items-center`}>
          <TextInput
            customClass={`bg-jv-bright`}
            register={{ ...register('salary_1') }}
            placeholder={`برای مثال ${showSalary2 ? 'از ' : ''}20 میلیون تومان`}
            error={!!errors.salary_1}
          >
            <SearchRounded />
          </TextInput>
          <TextInput
            customClass={`show-fade bg-jv-bright mr-3 ${showSalary2 ? '' : 'hidden'}`}
            register={{ ...register('salary_1') }}
            placeholder={`تا 30 میلیون تومان`}
            error={!!errors.salary_2}
          >
            <SearchRounded />
          </TextInput>
        </div>
        <div className={`w-full flex items-center mt-5`}>
          <label
            className={`cursor-pointer`}
            htmlFor="salary_2"
          >
            ایجاد بازه قیمتی
          </label>
          <input
            id='salary_2'
            className={`mr-2`}
            type="checkbox"
            onChange={event => {
              setShowSalary2(event.currentTarget.checked)
            }}
          />
        </div>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            دسته بندی شغلی
          </label>
        </Title>
        <AutoComplete
          customClass={`bg-jv-bright`}
          register={{ ...register('category') }}
          setValue={setValue}
          placeholder={`برای مثال برنامه نویسی`}
          datas={catDatas}
          error={!!errors.category}
        >
          <WorkOutlineRounded />
        </AutoComplete>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            تگ های شغلی
          </label>
        </Title>
        <MultiSelectBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال Front-End'
          datas={datas}
          list={form.jobTags}
          error={(submittedForm && form.jobTags.length <= 0)}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, jobTags: [...prev.jobTags, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, jobTags: [] }))}
          unSelectHandler={(item: string) => setForm(prev => ({ ...prev, jobTags: prev.jobTags.filter(tag => tag !== item) }))}
        />

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            شهر
          </label>
        </Title>
        <AutoComplete
          customClass={`bg-jv-bright`}
          register={{ ...register('city') }}
          setValue={setValue}
          placeholder={`برای مثال برنامه نویسی`}
          datas={cities}
          error={!!errors.city}
        >
          <WorkOutlineRounded />
        </AutoComplete>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            نوع قرارداد
          </label>
        </Title>
        <AutoComplete
          customClass={`bg-jv-bright`}
          register={{ ...register('location') }}
          setValue={setValue}
          placeholder={`برای مثال برنامه نویسی`}
          datas={cooperationTypes}
          error={!!errors.location}
        >
          <WorkOutlineRounded />
        </AutoComplete>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            مزیت های شغلی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال بیمه'
          error={(submittedForm && form.benefits.length <= 0)}
          list={form.benefits}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, benefits: [...prev.benefits, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, benefits: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            شاخص های کلیدی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال 1 سال سابقه کار'
          error={(submittedForm && form.abilityForBoss.length <= 0)}
          list={form.abilityForBoss}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, abilityForBoss: [...prev.abilityForBoss, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, abilityForBoss: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            مدارک تحصیلی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال لیسانس مهندسی کامپیوتر'
          error={(submittedForm && form.education.length <= 0)}
          list={form.education}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, education: [...prev.education, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, education: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            زبان های بین المللی
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال زبان انگلیسی'
          error={(submittedForm && form.languages.length <= 0)}
          list={form.languages}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, languages: [...prev.languages, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, languages: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            تکنولوژی ها
          </label>
        </Title>
        <ComboBox
          customClass={`bg-jv-bright`}
          placeholder='برای مثال Typescript'
          error={(submittedForm && form.techs.length <= 0)}
          list={form.techs}
          addItemHandler={(item: string) => setForm(prev => ({ ...prev, techs: [...prev.techs, item] }))}
          resetHandler={() => setForm(prev => ({ ...prev, techs: [] }))}
        >
          <StarBorder />
        </ComboBox>

        <div className={`w-full flex items-center mt-5`}>
          <label
            className={`cursor-pointer`}
            htmlFor="remote"
          >
            امکان دورکاری
          </label>
          <input
            id='remote'
            value='remote'
            className={`mr-2`}
            {...register('remote')}
            type="checkbox"
          />

          <label
            className={`cursor-pointer mr-5`}
            htmlFor="isUrgent"
          >
            آگهی فوری
          </label>
          <input
            id='isUrgent'
            value={`isUrgent`}
            className={`mr-2`}
            {...register('isUrgent')}
            type="checkbox"
          />

          <label
            className={`cursor-pointer mr-5`}
            htmlFor="endOfMilitaryService"
          >
            پایان خدمت
          </label>
          <input
            id='endOfMilitaryService'
            value={`endOfMilitaryService`}
            className={`mr-2`}
            {...register('endOfMilitaryService')}
            type="checkbox"
          />
        </div>

        <button
          className={`btn btn-primary mt-5`}
          type={`submit`}
          disabled={isSubmitting}
          onClick={() => {
            setSubmittedForm(true)
          }}
        >
          {
            isSubmitting ? '' : 'ثبت آگهی جدید'
          }
          <PulseLoader
            color='white'
            loading={isSubmitting}
            size={6}
          />
        </button>
      </form>
    </div>
  )
}

export default AddJobAd