import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { WorkOutlineRounded, SearchRounded, LocationOnOutlined } from "@mui/icons-material";

import TextInput from "./inputs/TextInput";
import AutoComplete from "./inputs/AutoComplete";
import { PulseLoader } from "react-spinners";
import useContent from "../hooks/query/useContent";

const schema = z.object({
  search: z.string().min(2).max(128),
  job: z.string(),
  city: z.string()
})

type formTypes = z.infer<typeof schema>

const SearchJobForm = ({ customClass }: { customClass?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })
  const redirect = useNavigate()
  const { content } = useContent()

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    await new Promise((resolve) => setTimeout(() => {
      if (location.pathname === '/jobs') {
        location.href =
          `/jobs?search=${data.search}${data.job ? `&cat=${data.job}` : ''}${data.city ? `&city=${data.city}` : ''}`
      } else {
        redirect(
          `/jobs?search=${data.search}${data.job ? `&cat=${data.job}` : ''}${data.city ? `&city=${data.city}` : ''}`
        )
      }
      reset()
      return resolve
    }, 1500));
  }

  return (
    <form
      className={`w-full h-max grid grid-rows-3 grid-cols-1 gap-2 sm:col-span-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-8
      lg:gap-3 ${customClass}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        customClass={`sm:col-span-2 lg:col-span-3`}
        register={{ ...register('search') }}
        placeholder={`عنوان شغلی یا شرکت`}
        error={!!errors.search}
      >
        <SearchRounded />
      </TextInput>
      <AutoComplete
        customClass={`lg:col-span-2`}
        register={{ ...register('job') }}
        setValue={setValue}
        placeholder={`گروه شغلی`}
        datas={content?.categories.map(cat => cat.name) || []}
      >
        <WorkOutlineRounded />
      </AutoComplete>
      <AutoComplete
        customClass={`lg:col-span-2`}
        register={{ ...register('city') }}
        setValue={setValue}
        placeholder={`شهر`}
        datas={content?.cities.map(city => city.name) || []}
      >
        <LocationOnOutlined />
      </AutoComplete>
      <button
        className={`btn btn-primary w-full sm:col-span-2 lg:col-span-1`}
        type={`submit`}
        disabled={isSubmitting}
      >
        {
          isSubmitting ? '' : 'جستجو'
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

export default SearchJobForm