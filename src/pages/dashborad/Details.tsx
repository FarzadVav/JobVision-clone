import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import TextInput from "../../components/inputs/TextInput"
import Title from "../../components/Title"
import { PulseLoader } from "react-spinners"
import { ManageSearchRounded, CalendarMonthRounded, HelpOutlineRounded, PeopleOutlineRounded } from "@mui/icons-material"

const schema = z.object({
  about: z.string().nonempty().min(16).max(9999),
  year: z.string().nonempty().regex(/^[0-9]+$/).min(4).max(4),
  employees: z.string().nonempty().regex(/^[0-9]+$/),
  activity: z.string().nonempty().regex(/^[0-9]+$/),
})

type formTypes = {
  about: string;
  year: string;
  employees: string;
  activity: string
}

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
      <Title withOutIcon>
        <label className={`!text-xl mb-2`}>
          درباره شرکت
        </label>
      </Title>
      <TextInput
        customClass={`bg-jv-bright`}
        register={{ ...register('about') }}
        placeholder={`درباره شرکت`}
        error={!!errors.about}
      >
        <HelpOutlineRounded />
      </TextInput>

      <Title withOutIcon>
        <label className={`!text-xl mb-2 mt-5`}>
          اطلاعات شرکت
        </label>
      </Title>
      <div className={`w-full grid grid-rows-2 grid-cols-2 gap-2`}>
        <TextInput
          customClass={`bg-jv-bright`}
          register={{ ...register('year') }}
          placeholder={`سال تاسیس`}
          error={!!errors.year}
          numeric
        >
          <CalendarMonthRounded />
        </TextInput>
        <TextInput
          customClass={`bg-jv-bright`}
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