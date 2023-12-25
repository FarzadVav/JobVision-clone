import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PulseLoader } from "react-spinners"
import { ManageSearchRounded, CalendarMonthRounded, HelpOutlineRounded, PeopleOutlineRounded, LocationOnOutlined, DriveFileRenameOutlineOutlined } from "@mui/icons-material"
import toast from "react-hot-toast"

import useContent from "../../hooks/query/useContent"
import Title from "../../components/Title"
import TextArea from "../../components/inputs/TextArea"
import TextInput from "../../components/inputs/TextInput"
import AutoComplete from "../../components/inputs/AutoComplete"
import { companyDetailsTypes } from "../../types/Company.types"
import useCompany from "../../hooks/query/useCompany"
import { NON_EMPTY_STRING, NUMERIC_STRING } from "../../utils/zodSchema"

const schema = z.object({
  name: NON_EMPTY_STRING,
  aboutCompany: z.string().min(3),
  year: NUMERIC_STRING.min(4).max(4),
  employees_1: NUMERIC_STRING,
  employees_2: NUMERIC_STRING,
  activity: NON_EMPTY_STRING,
  province: NON_EMPTY_STRING,
  city: NON_EMPTY_STRING,
  knowledgeBased: z.boolean().optional()
})

type formTypes = z.infer<typeof schema>

const Details = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })
  const { updateCompany, updateCompanyLoading } = useCompany()
  const { content } = useContent()

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    const companyDetials: companyDetailsTypes = {
      logo: 'logo.png',
      name: data.name,
      aboutCompany: data.aboutCompany,
      activity: data.activity,
      year: +data.year,
      score: 5,
      knowledgeBased: !!data.knowledgeBased,
      employees: +data.employees_2 > +data.employees_1 ? [+data.employees_1, +data.employees_2] : [+data.employees_1, +data.employees_1 + 1],
      province: content?.provinces.find(province => province.name === data.province)?._id || '',
      city: content?.cities.find(city => city.name === data.city)?._id || ''
    }

    updateCompany(companyDetials, {
      onSuccess: () => {
        toast.success('اطلاعات شرکت با موفقیت ویرایش شد')
        reset()
      }
    })
  }

  return (
    <form
      className={`w-full flex flex-col`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* name */}
      <Title withOutIcon customClass={`mb-2.5`}>
        <label className={`!text-xl`}>
          نام شرکت
        </label>
      </Title>
      <TextInput
        customClass={`bg-jv-bright`}
        register={{ ...register('name') }}
        placeholder={`برای مثال جاب ویژن`}
        error={!!errors.name}
        numeric
      >
        <DriveFileRenameOutlineOutlined />
      </TextInput>
      {/* name */}

      {/* about company */}
      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          درباره شرکت
        </label>
      </Title>
      <TextArea
        customClass={`bg-jv-bright`}
        register={{ ...register('aboutCompany') }}
        placeholder={`درباره شرکت`}
        error={!!errors.aboutCompany}
      >
        <HelpOutlineRounded />
      </TextArea>
      {/* about company */}

      {/* year */}
      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          سال تاسیس
        </label>
      </Title>
      <TextInput
        customClass={`bg-jv-bright`}
        register={{ ...register('year') }}
        placeholder={`برای مثال 1390`}
        error={!!errors.year}
        numeric
      >
        <CalendarMonthRounded />
      </TextInput>
      {/* year */}

      {/* city */}
      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          مکان شرکت
        </label>
      </Title>
      <div className={`w-full flex flex-col items-center justify-center sm:flex-row`}>
        <AutoComplete
          customClass={`bg-jv-bright`}
          register={{ ...register('province') }}
          setValue={setValue}
          placeholder={`استان`}
          datas={content?.provinces.map(province => province.name) || []}
          error={!!errors.province}
        >
          <LocationOnOutlined />
        </AutoComplete>
        <AutoComplete
          customClass={`bg-jv-bright mt-3 sm:mr-3 sm:mt-0`}
          register={{ ...register('city') }}
          setValue={setValue}
          placeholder={`شهر`}
          datas={content?.cities.map(city => city.name) || []}
          error={!!errors.city}
        >
          <LocationOnOutlined />
        </AutoComplete>
      </div>
      {/* city */}

      {/* activity */}
      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          حوزه فعالیت
        </label>
      </Title>
      <TextArea
        customClass={`bg-jv-bright`}
        register={{ ...register('activity') }}
        placeholder={`برای مثال برنامه نویسی`}
        error={!!errors.activity}
      >
        <ManageSearchRounded />
      </TextArea>
      {/* activity */}

      {/* employees */}
      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          تعداد کارکنان
        </label>
      </Title>
      <div className={`w-full flex flex-col items-center justify-center sm:flex-row`}>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('employees_1') }}
          placeholder={`از این تعداد`}
          error={!!errors.employees_1}
          numeric
        >
          <PeopleOutlineRounded />
        </TextInput>
        <TextInput
          customClass={`bg-jv-bright mt-3 sm:mr-3 sm:mt-0`}
          register={{ ...register('employees_2') }}
          placeholder={`تا این تعداد`}
          error={!!errors.employees_2}
          numeric
        >
          <PeopleOutlineRounded />
        </TextInput>
      </div>
      {/* employees */}

      {/* knowledgeBased */}
      <div className={`flex items-center mt-5`}>
        <label
          className={`cursor-pointer`}
          htmlFor="endOfMilitaryService"
        >
          شرکت دانش بنیان
        </label>
        <input
          id='endOfMilitaryService'
          className={`mr-2`}
          type="checkbox"
          onChange={e => setValue('knowledgeBased', e.target.checked)}
        />
      </div>
      {/* knowledgeBased */}

      <button
        className={`btn btn-primary mt-5`}
        type={`submit`}
        disabled={updateCompanyLoading}
      >
        {
          updateCompanyLoading ? '' : 'ثبت اطلاعات'
        }
        <PulseLoader
          color='white'
          loading={updateCompanyLoading}
          size={6}
        />
      </button>
    </form>
  )
}

export default Details