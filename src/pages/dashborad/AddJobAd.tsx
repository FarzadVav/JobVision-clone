import { useState } from 'react'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AccessTimeRounded, AccountCircleOutlined, ArticleOutlined, ImportantDevicesOutlined, LanguageOutlined, LocalAirportRounded, NotesRounded, PaymentsOutlined, PeopleOutlined, PsychologyAltOutlined, SchoolOutlined, StarBorder, TextFieldsRounded, WorkOutlineRounded } from '@mui/icons-material'
import { PulseLoader } from 'react-spinners'
import { Toaster, toast } from 'react-hot-toast'

import ComboBox from '../../components/inputs/ComboBox'
import MultiSelectBox from '../../components/inputs/MultiSelectBox'
import Title from '../../components/Title'
import AutoComplete from '../../components/inputs/AutoComplete'
import TextInput from '../../components/inputs/TextInput'
import TextArea from '../../components/inputs/TextArea'
import useContent from '../../hooks/query/useContent'
import useJobAdsQuery from '../../hooks/query/useJobAds'
import { newJobAdTypes } from '../../types/JobAds.types'
import useCompany from '../../hooks/query/useCompany'

const genders = ['مرد', 'زن', 'فرقی ندارد']
const gendersTypes = z.enum(['مرد', 'زن', 'فرقی ندارد'])
const arraySchema = z.string().array().min(1)

const schema = z.object({
  title: z.string().min(3).max(256),
  description: z.string().min(3).max(256),
  workTimes: z.string().min(3).max(256),
  businessTrips: z.string().min(1),
  isRemote: z.boolean(),
  isUrgent: z.boolean(),
  gender: gendersTypes,
  cooperationType: z.string().min(1),
  endOfMilitaryService: z.boolean(),
  category: z.string().min(1),
  tags: arraySchema,
  benefits: arraySchema,
  abilties: arraySchema,
  educations: arraySchema,
  languages: arraySchema,
  technologies: arraySchema,
  age_1: z.string().min(2).max(2).regex(/^[0-9]+$/),
  age_2: z.string().min(2).max(2).regex(/^[0-9]+$/),
  salary_1: z.string().min(1).regex(/^[0-9]+$/),
  salary_2: z.string()
})

type formTypes = z.infer<typeof schema>

const AddJobAd = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // getValues,
    formState: { errors },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema),
  })
  const { content } = useContent()
  const { company } = useCompany()
  const { addJobAd, addJobAdPending } = useJobAdsQuery()

  const [twoStepForms, setTwoStepsForms] = useState<{
    salary: boolean
  }>({
    salary: false
  })

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    if (!company?.company.name
      || !company?.company.activity
      || !company?.company.city
      || company?.company.employees.length < 2
      || !company?.company.logo
      || !company?.company.name
      || !company?.company.province
      || !company?.company.year) {
      toast.error('لطفا ابتدا اطلاعات شرکت را کامل کنید')
    } else {
      const newJobAd: newJobAdTypes = {
        title: data.title,
        description: data.description,
        workTimes: data.workTimes,
        businessTrips: data.businessTrips,
        isRemote: !!data.isRemote,
        isUrgent: !!data.isUrgent,
        endOfMilitaryService: !!data.endOfMilitaryService,
        gender: data.gender === 'مرد' ? true : data.gender === 'زن' ? false : null,
        cooperationType: content?.cooperationType.find(type => type.name === data.cooperationType)?._id || '',
        category: content?.categories.find(cat => cat.name === data.category)?._id || '',
        tags: content?.tags.filter(tag => data.tags.includes(tag.name)).map(t => t._id) || [''],
        benefits: data.benefits,
        abilityForBoss: data.abilties,
        education: data.educations,
        languages: data.languages,
        techs: data.technologies,
        age: +data.age_2 > +data.age_1 ? [+data.age_1, +data.age_2] : [+data.age_1, +data.age_1 + 1],
        salary: +data.salary_2 > +data.salary_1 ? [+data.salary_1, +data.salary_2] : [+data.salary_1],
        company: company.company._id || ''
      }

      addJobAd(newJobAd, {
        onSuccess: () => {
          toast.success('آگهی جدید با موفقیت ثبت شد')
          reset()
        }
      })
    }
  }

  return (
    <>
      <div className={`w-full flex flex-col`}>
        <form
          className={`w-full flex flex-col`}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* job title */}
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
            <TextFieldsRounded className={`-scale-x-100`} />
          </TextInput>
          {/* job title */}

          {/* description */}
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
            <NotesRounded className={`-scale-x-100`} />
          </TextArea>
          {/* description */}

          {/* work times */}
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
            <AccessTimeRounded />
          </TextInput>
          {/* work times */}

          {/* business trips */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              شرح سفر های کاری
            </label>
          </Title>
          <TextInput
            customClass={`bg-jv-bright`}
            register={{ ...register('businessTrips') }}
            placeholder={`برای مثال 1 هفته در سال`}
            error={!!errors.businessTrips}
          >
            <LocalAirportRounded />
          </TextInput>
          {/* business trips */}

          {/* salary */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              میزان حقوق
            </label>
          </Title>
          <div className={`w-full flex flex-col items-center justify-center sm:flex-row`}>
            <TextInput
              customClass={`bg-jv-bright`}
              register={{ ...register('salary_1') }}
              placeholder={`برای مثال ${twoStepForms.salary ? 'از ' : ''}20 میلیون تومان`}
              error={!!errors.salary_1}
            >
              <PaymentsOutlined />
            </TextInput>
            <TextInput
              customClass={`show-fade bg-jv-bright mt-3 sm:mt-0 sm:mr-3 ${twoStepForms.salary ? '' : 'hidden'}`}
              register={{ ...register('salary_2') }}
              placeholder={`تا 30 میلیون تومان`}
              error={!!errors.salary_2}
            >
              <PaymentsOutlined />
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
          {/* salary */}

          {/* age */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              میزان سن
            </label>
          </Title>
          <div className={`w-full flex flex-col items-center justify-center sm:flex-row`}>
            <TextInput
              customClass={`bg-jv-bright`}
              register={{ ...register('age_1') }}
              placeholder={`برای مثال از 18 سال`}
              error={!!errors.age_1}
            >
              <AccountCircleOutlined />
            </TextInput>
            <TextInput
              customClass={`show-fade bg-jv-bright mt-3 sm:mt-0 sm:mr-3`}
              register={{ ...register('age_2') }}
              placeholder={`تا 25 سال`}
              error={!!errors.age_2}
            >
              <AccountCircleOutlined />
            </TextInput>
          </div>
          {/* age */}

          {/* category */}
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
            datas={content?.categories.map(cat => cat.name) || []}
            error={!!errors.category}
          >
            <WorkOutlineRounded />
          </AutoComplete>
          {/* category */}

          {/* cooperaton types */}
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
            datas={content?.cooperationType.map(type => type.name) || []}
            error={!!errors.cooperationType}
          >
            <ArticleOutlined />
          </AutoComplete>
          {/* cooperaton types */}

          {/* gender */}
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
            <PeopleOutlined />
          </AutoComplete>
          {/* gender */}

          {/* tags */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              تگ های شغلی
            </label>
          </Title>
          <MultiSelectBox
            customClass={`bg-jv-bright`}
            placeholder='برای مثال Front-End'
            datas={content?.tags.map(tag => tag.name) || []}
            error={!!errors.tags}
            onChangeList={(list: string[]) => setValue('tags', list)}
            resetHandler={() => setValue('tags', [])}
          />
          {/* tags */}

          {/* benefits */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              مزیت های شغلی
            </label>
          </Title>
          <ComboBox
            customClass={`bg-jv-bright`}
            placeholder='برای مثال بیمه'
            error={!!errors.benefits}
            onChangeList={(list: string[]) => setValue('benefits', list)}
            resetHandler={() => setValue('benefits', [])}
          >
            <StarBorder />
          </ComboBox>
          {/* benefits */}

          {/* abilties */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              شاخص های کلیدی فرد
            </label>
          </Title>
          <ComboBox
            customClass={`bg-jv-bright`}
            placeholder='برای مثال 1 سال سابقه کار'
            error={!!errors.abilties}
            onChangeList={(list: string[]) => setValue('abilties', list)}
            resetHandler={() => setValue('abilties', [])}
          >
            <PsychologyAltOutlined />
          </ComboBox>
          {/* abilties */}

          {/* educations */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              مدارک تحصیلی
            </label>
          </Title>
          <ComboBox
            customClass={`bg-jv-bright`}
            placeholder='برای مثال لیسانس مهندسی کامپیوتر'
            error={!!errors.educations}
            onChangeList={(list: string[]) => setValue('educations', list)}
            resetHandler={() => setValue('educations', [])}
          >
            <SchoolOutlined />
          </ComboBox>
          {/* educations */}

          {/* languages */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              زبان های بین المللی
            </label>
          </Title>
          <ComboBox
            customClass={`bg-jv-bright`}
            placeholder='برای مثال زبان انگلیسی'
            error={!!errors.languages}
            onChangeList={(list: string[]) => setValue('languages', list)}
            resetHandler={() => setValue('languages', [])}
          >
            <LanguageOutlined />
          </ComboBox>
          {/* languages */}

          {/* technologies */}
          <Title withOutIcon customClass={`mb-2.5 mt-5`}>
            <label className={`!text-xl`}>
              تکنولوژی ها
            </label>
          </Title>
          <ComboBox
            customClass={`bg-jv-bright`}
            placeholder='برای مثال Typescript'
            error={!!errors.technologies}
            onChangeList={(list: string[]) => setValue('technologies', list)}
            resetHandler={() => setValue('technologies', [])}
          >
            <ImportantDevicesOutlined />
          </ComboBox>
          {/* technologies */}

          {/* check boxes */}
          <div className={`w-full flex flex-col mt-5 sm:flex-row sm:items-center`}>
            {/* remote */}
            <div className={`flex items-center`}>
              <label
                className={`cursor-pointer`}
                htmlFor="isRemote"
              >
                امکان دورکاری
              </label>
              <input
                id='isRemote'
                value='isRemote'
                className={`mr-2`}
                onChange={e => {
                  setValue('isRemote', e.target.checked)
                }}
                type="checkbox"
              />
            </div>
            {/* remote */}

            {/* isUrgent */}
            <div className={`flex items-center`}>
              <label
                className={`cursor-pointer mt-3 sm:mr-5 sm:mt-0`}
                htmlFor="isUrgent"
              >
                آگهی فوری
              </label>
              <input
                id='isUrgent'
                value={`isUrgent`}
                className={`mr-2`}
                onChange={e => {
                  setValue('isUrgent', e.target.checked)
                }}
                type="checkbox"
              />
            </div>
            {/* isUrgent */}

            {/* end of military service */}
            <div className={`flex items-center`}>
              <label
                className={`cursor-pointer mt-3 sm:mr-5 sm:mt-0`}
                htmlFor="endOfMilitaryService"
              >
                پایان خدمت
              </label>
              <input
                id='endOfMilitaryService'
                value={`endOfMilitaryService`}
                className={`mr-2`}
                onChange={e => {
                  setValue('endOfMilitaryService', e.target.checked)
                }}
                type="checkbox"
              />
            </div>
            {/* end of military service */}
          </div>
          {/* check boxes */}

          <button
            className={`btn btn-primary mt-5`}
            type={`submit`}
            disabled={addJobAdPending}
          >
            {
              addJobAdPending ? '' : 'ثبت آگهی جدید'
            }
            <PulseLoader
              color='white'
              loading={addJobAdPending}
              size={6}
            />
          </button>
        </form>
      </div>

      <Toaster />
    </>
  )
}

export default AddJobAd