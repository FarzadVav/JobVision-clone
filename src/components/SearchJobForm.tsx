import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { WorkOutlineRounded, SearchRounded, LocationOnOutlined } from "@mui/icons-material";

import TextInput from "./inputs/TextInput";

const schema = z.object({
  search: z.string().nonempty('لطفا عنوان شغل را خالی نگذارید').min(3).max(128),
  job: z.string(),
  city: z.string()
})

type formTypes = {
  search: string;
  job: string;
  city: string;
}

const SearchJobForm = ({ customClass }: { customClass?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset()
  }

  return (
    <form
      className={`w-full h-max grid grid-rows-3 grid-cols-2 gap-2 sm:col-span-2 md:grid-rows-1 md:grid-cols-5
      md:gap-3 ${customClass}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        customClass={`col-span-2`}
        register={{ ...register('search') }}
        placeholder={`عنوان شغلی یا شرکت`}
        error={!!errors.search}
      >
        <SearchRounded />
      </TextInput>
      <TextInput
        register={{ ...register('job') }}
        placeholder={`گروه شغلی`}
      >
        <WorkOutlineRounded />
      </TextInput>
      <TextInput
        register={{ ...register('city') }}
        placeholder={`شهر`}
      >
        <LocationOnOutlined />
      </TextInput>
      <button
        className={`btn btn-primary w-full col-span-2 ${isSubmitting && 'opacity-25'} md:col-span-1`}
        type={`submit`}
        onClick={() => {
          console.log(errors.search);
        }}
      >
        جستجو در مشاغل
      </button>
    </form>
  )
}

export default SearchJobForm