import { useEffect, useState } from 'react'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SearchRounded, StarBorder, WorkOutlineRounded } from '@mui/icons-material'
import { PulseLoader } from 'react-spinners'

import ComboBox from '../../components/inputs/ComboBox'
import MultiSelectBox from '../../components/inputs/MultiSelectBox'
import Title from '../../components/Title'
import AutoComplete from '../../components/inputs/AutoComplete'
import TextInput from '../../components/inputs/TextInput'
import TextArea from '../../components/inputs/TextArea'

type customFormTypes = {
  jobTags: string[];
  benefits: string[];
  abilityForBoss: string[];
  education: string[];
  languages: string[];
  techs: string[]
}

const defaultFormValues: customFormTypes = {
  jobTags: [],
  benefits: [],
  abilityForBoss: [],
  education: [],
  languages: [],
  techs: []
}

const categories = ['برنامه نویسی', 'بازاریابی', 'فتوشاپ']
const datas = ['aaa', 'bbb', 'ccc']
const cities = ['تهران', 'تبریز', 'مشهد']
const cooperationTypes = ['پاره وقت', 'تمام وقت', 'پروژه ای']
const genders = ['مرد', 'زن', 'فرقی ندارد']

const COOPERATION_TYPE = z.enum(['null', ...cooperationTypes])
const GENDER = z.enum(['null', ...genders])

const schema = z.object({
  category: z.string().nonempty(),
  title: z.string().nonempty().min(3).max(256),
  address: z.string().nonempty().min(3).max(256),
  city: z.string().nonempty(),
  remote: z.string(),
  isUrgent: z.string(),
  salary_1: z.string().nonempty().regex(/^[0-9]+$/),
  salary_2: z.string().regex(/^[0-9]+$/),
  workTimes: z.string().nonempty().min(3).max(256),
  cooperationType: COOPERATION_TYPE,
  businessTrips: z.string().nonempty(),
  description: z.string().nonempty().min(3).max(256),
  age_1: z.string().nonempty().regex(/^[0-9]+$/),
  age_2: z.string().regex(/^[0-9]+$/),
  gender: GENDER,
  endOfMilitaryService: z.string(),
  customFormFields: z.string().nonempty()
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
      salary_2: '0',
      age_2: '0',
      remote: '',
      isUrgent: '',
      endOfMilitaryService: '',
    }
  })
  const [form, setForm] = useState<customFormTypes>(defaultFormValues)
  const [twoStepForms, setTwoStepsForms] = useState<{
    salary: boolean;
    age: boolean
  }>({
    salary: false,
    age: false
  })
  const [submittedForm, setSubmittedForm] = useState<boolean>(false)

  useEffect(() => {
    let state: boolean = true
    for (const field in form) {
      if (!form[field as keyof customFormTypes].length) {
        state = false
        break
      }
    }
    if (state) {
      setValue('customFormFields', 'VALID')
    }
  }, [form])

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    console.log(123);
    await new Promise((resolve) => setTimeout(() => {
      console.log(data);
      console.log(form);
      setSubmittedForm(false)
      setForm(defaultFormValues)
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
            توضیحات
          </label>
        </Title>
        <TextArea
          customClass={`bg-jv-bright`}
          register={{ ...register('description') }}
          placeholder={`آگهی شغلی تان را شرح دهید...`}
          error={!!errors.description}
        >
          <SearchRounded />
        </TextArea>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            آدرس و موقعیت
          </label>
        </Title>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('address') }}
          placeholder={`برای مثال هاشمیه 24`}
          error={!!errors.address}
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
            سفر های کاری
          </label>
        </Title>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('businessTrips') }}
          placeholder={`برای مثال 1 هفته در سال`}
          error={!!errors.businessTrips}
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
            placeholder={`برای مثال ${twoStepForms.salary ? 'از ' : ''}20 میلیون تومان`}
            error={!!errors.salary_1}
          >
            <SearchRounded />
          </TextInput>
          <TextInput
            customClass={`show-fade bg-jv-bright mr-3 ${twoStepForms.salary ? '' : 'hidden'}`}
            register={{ ...register('salary_2') }}
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
              setTwoStepsForms(prev => ({ ...prev, salary: event.target.checked }))
            }}
          />
        </div>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            میزان سن
          </label>
        </Title>
        <div className={`w-full flex items-center`}>
          <TextInput
            customClass={`bg-jv-bright`}
            register={{ ...register('age_1') }}
            placeholder={`برای مثال ${twoStepForms.age ? 'از ' : ''}18 سال`}
            error={!!errors.age_1}
          >
            <SearchRounded />
          </TextInput>
          <TextInput
            customClass={`show-fade bg-jv-bright mr-3 ${twoStepForms.age ? '' : 'hidden'}`}
            register={{ ...register('age_2') }}
            placeholder={`تا 25 سال`}
            error={!!errors.age_2}
          >
            <SearchRounded />
          </TextInput>
        </div>
        <div className={`w-full flex items-center mt-5`}>
          <label
            className={`cursor-pointer`}
            htmlFor="age_2"
          >
            ایجاد بازه سنی
          </label>
          <input
            id='age_2'
            className={`mr-2`}
            type="checkbox"
            onChange={event => {
              setTwoStepsForms(prev => ({ ...prev, age: event.target.checked }))
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
          datas={categories}
          error={!!errors.category}
        >
          <WorkOutlineRounded />
        </AutoComplete>

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
          register={{ ...register('cooperationType') }}
          setValue={setValue}
          placeholder={`برای مثال برنامه نویسی`}
          datas={cooperationTypes}
          error={!!errors.cooperationType}
        >
          <WorkOutlineRounded />
        </AutoComplete>

        <Title withOutIcon customClass={`mb-2.5 mt-5`}>
          <label className={`!text-xl`}>
            جنسیت
          </label>
        </Title>
        <AutoComplete
          customClass={`bg-jv-bright`}
          register={{ ...register('gender') }}
          setValue={setValue}
          placeholder={`برای مثال فرقی ندارد`}
          datas={genders}
          error={!!errors.gender}
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