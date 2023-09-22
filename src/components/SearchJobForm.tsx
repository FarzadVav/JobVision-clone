import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { WorkOutlineRounded, SearchRounded, LocationOnOutlined } from "@mui/icons-material";

import TextInput from "./inputs/TextInput";
import AutoComplete from "./inputs/AutoComplete";

const schema = z.object({
  search: z.string().nonempty('لطفا عنوان شغل را خالی نگذارید').min(2).max(128),
  job: z.string(),
  city: z.string()
})

type formTypes = {
  search: string;
  job: string;
  city: string;
}

const datas = [
  { name: 'برنامه نویسی' },
  { name: 'بازاریابی' },
  { name: 'فتوشاپ' },
]

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

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset()
  }

  return (
    <form
      className={`w-full h-max grid grid-rows-3 grid-cols-1 gap-2 sm:col-span-2 md:grid-rows-1 md:grid-cols-8
      md:gap-3 ${customClass}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        customClass={`sm:col-span-2 md:col-span-3`}
        register={{ ...register('search') }}
        placeholder={`عنوان شغلی یا شرکت`}
        error={!!errors.search}
      >
        <SearchRounded />
      </TextInput>
      <AutoComplete
        customClass={`md:col-span-2`}
        register={{ ...register('job') }}
        setValue={setValue}
        placeholder={`گروه شغلی`}
        datas={datas}
      >
        <WorkOutlineRounded />
      </AutoComplete>
      <AutoComplete
        customClass={`md:col-span-2`}
        register={{ ...register('city') }}
        setValue={setValue}
        placeholder={`شهر`}
        datas={datas}
      >
        <LocationOnOutlined />
      </AutoComplete>
      <button
        className={`btn btn-primary w-full ${isSubmitting && 'opacity-25'} sm:col-span-2 md:col-span-1`}
        type={`submit`}
      >
        جستجو
      </button>
    </form>
  )
}

export default SearchJobForm