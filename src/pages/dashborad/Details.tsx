import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import TextArea from "../../components/inputs/TextArea"
import TextInput from "../../components/inputs/TextInput"
import Title from "../../components/Title"
import { PulseLoader } from "react-spinners"
import { ManageSearchRounded, CalendarMonthRounded, HelpOutlineRounded, PeopleOutlineRounded } from "@mui/icons-material"

const schema = z.object({
  about: z.string().nonempty().min(16).max(9999),
  year: z.string().nonempty().regex(/^[0-9]+$/).min(4).max(4),
  employees: z.string().nonempty().regex(/^[0-9]+$/),
  activity: z.string().nonempty(),
  ownership: z.string().nonempty()
})

type formTypes = z.infer<typeof schema>

const Details = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })

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

      <Title withOutIcon customClass={`mb-2.5 mt-5`}>
        <label className={`!text-xl`}>
          اطلاعات شرکت
        </label>
      </Title>
      <div className={`w-full grid grid-rows-3 grid-cols-2 gap-2 sm:grid-cols-2`}>
        <TextInput
          customClass={`bg-jv-bright col-span-2 sm:col-span-1`}
          register={{ ...register('year') }}
          placeholder={`سال تاسیس`}
          error={!!errors.year}
          numeric
        >
          <CalendarMonthRounded />
        </TextInput>
        <TextInput
          customClass={`bg-jv-bright col-span-2 sm:col-span-1`}
          register={{ ...register('employees') }}
          placeholder={`تعداد کارکنان شرکت`}
          error={!!errors.employees}
          numeric
        >
          <PeopleOutlineRounded />
        </TextInput>
        <TextInput
          customClass={`bg-jv-bright col-span-2`}
          register={{ ...register('activity') }}
          placeholder={`حوزه فعالیت`}
          error={!!errors.activity}
          numeric
        >
          <ManageSearchRounded />
        </TextInput>
      </div>
      <div className={`w-full flex items-center mt-5`}>
        <span className={`dana-bold`}>
          نوع ماکلیت
        </span>
        <label
          className={`mr-3 ${errors.ownership ? 'text-jv-danger' : ''}`}
          htmlFor="pv"
        >
          شخصی
        </label>
        <input
          id="pv"
          className={`mr-1`}
          {...register('ownership')}
          value={'pv'}
          type="radio"
        />
        <label
          className={`mr-3 ${errors.ownership ? 'text-jv-danger' : ''}`}
          htmlFor="governmental"
        >
          دولتی
        </label>
        <input
          id="governmental"
          className={`mr-1`}
          value={'governmental'}
          {...register('ownership')}
          type="radio"
        />
      </div>
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