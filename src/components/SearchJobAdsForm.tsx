import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { WorkOutlineRounded, SearchRounded, LocationOnOutlined } from "@mui/icons-material";

import TextInput from "./inputs/TextInput";
import AutoComplete from "./inputs/AutoComplete";
import useContent from "../hooks/query/useContent";
import { PulseLoader } from "react-spinners";
import { NON_EMPTY_STRING } from "../utils/zodSchema";

const schema = z.object({
  search: NON_EMPTY_STRING,
  job: z.string(),
  city: z.string()
})

type formTypes = z.infer<typeof schema>

const SearchJobForm = () => {
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
      className={`w-full h-max flex flex-wrap justify-center gap-2`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`w-full md:w-[calc(40%-(0.5rem-0.5rem/4))]`}>
        <TextInput
          register={{ ...register('search') }}
          placeholder={`عنوان شغلی یا شرکت`}
          error={errors.search}
        >
          <SearchRounded />
        </TextInput>
      </div>
      <div className={`w-full sm:w-[calc(40%-(0.5rem-0.5rem/3))] md:w-[calc(25%-(0.5rem-0.5rem/4))]`}>
        <AutoComplete
          register={{ ...register('job') }}
          setValue={setValue}
          placeholder={`گروه شغلی`}
          datas={content?.categories.map(cat => cat.name) || []}
        >
          <WorkOutlineRounded />
        </AutoComplete>
      </div>
      <div className={`w-full sm:w-[calc(40%-(0.5rem-0.5rem/3))] md:w-[calc(25%-(0.5rem-0.5rem/4))]`}>
        <AutoComplete
          register={{ ...register('city') }}
          setValue={setValue}
          placeholder={`شهر`}
          datas={content?.cities.map(city => city.name) || []}
        >
          <LocationOnOutlined />
        </AutoComplete>
      </div>
      <button
        className={`btn btn-primary w-full sm:w-[calc(20%-(0.5rem-0.5rem/3))] md:w-[calc(10%-(0.5rem-0.5rem/4))]`}
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