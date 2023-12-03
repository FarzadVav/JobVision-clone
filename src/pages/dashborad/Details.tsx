import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PulseLoader } from "react-spinners"
import { ManageSearchRounded, CalendarMonthRounded, HelpOutlineRounded, PeopleOutlineRounded, LocationOnOutlined } from "@mui/icons-material"

import useContent from "../../hooks/useContentQuery"
import Title from "../../components/Title"
import TextArea from "../../components/inputs/TextArea"
import TextInput from "../../components/inputs/TextInput"
import AutoComplete from "../../components/inputs/AutoComplete"

const schema = z.object({
  about: z.string().nonempty().min(16).max(9999),
  year: z.string().nonempty().regex(/^[0-9]+$/).min(4).max(4),
  employees1: z.string().nonempty().regex(/^[0-9]+$/),
  employees2: z.string().nonempty().regex(/^[0-9]+$/),
  activity: z.string().nonempty(),
  province: z.string().nonempty(),
  city: z.string().nonempty(),
  knowledgeBased: z.string()
})

type formTypes = z.infer<typeof schema>

const Details = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })
  const { data: content } = useContent()

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    await new Promise((resolve) => setTimeout(() => {
      console.log(data);
      reset()
      return resolve
    }, 1500));
  }

  return (
    <form
      className={`w-full flex flex-col`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* about company */}
      <Title withOutIcon customClass={`mb-2.5`}>
        <label className={`!text-xl`}>
          درباره شرکت
        </label>
      </Title>
      <TextArea
        customClass={`bg-jv-bright`}
        register={{ ...register('about') }}
        placeholder={`درباره شرکت`}
        error={!!errors.about}
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

      {/* employees */}
      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          تعداد کارکنان
        </label>
      </Title>
      <div className={`w-full flex flex-col items-center justify-center sm:flex-row`}>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('employees1') }}
          placeholder={`از این تعداد`}
          error={!!errors.employees1}
          numeric
        >
          <PeopleOutlineRounded />
        </TextInput>
        <TextInput
          customClass={`bg-jv-bright mt-3 sm:mr-3 sm:mt-0`}
          register={{ ...register('employees2') }}
          placeholder={`تا این تعداد`}
          error={!!errors.employees2}
          numeric
        >
          <PeopleOutlineRounded />
        </TextInput>
      </div>
      {/* employees */}

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
        >
          <LocationOnOutlined />
        </AutoComplete>
        <AutoComplete
          customClass={`bg-jv-bright mt-3 sm:mr-3 sm:mt-0`}
          register={{ ...register('city') }}
          setValue={setValue}
          placeholder={`شهر`}
          datas={content?.cities.map(city => city.name) || []}
        >
          <LocationOnOutlined />
        </AutoComplete>
      </div>
      {/* city */}

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
          value={`endOfMilitaryService`}
          className={`mr-2`}
          {...register('knowledgeBased')}
          type="checkbox"
        />
      </div>
      {/* knowledgeBased */}

      <button
        className={`btn btn-primary mt-5`}
        type={`submit`}
        disabled={isSubmitting}
      >
        {
          isSubmitting ? '' : 'ثبت اطلاعات'
        }
        <PulseLoader
          color='white'
          loading={isSubmitting}
          size={6}
        />
      </button>
    </form>
  )
}

export default Details