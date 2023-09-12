import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

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

const SearchJobForm = () => {
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
      className={`grid gap-2 grid-cols-2 grid-rows-[3rem_3rem_3rem] justify-center items-center col-span-2 lg:grid-rows-1 lg:grid-cols-5 sm:gap-3`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        customClass={`col-span-2`}
        register={{ ...register('search') }}
        placeholder={`عنوان شغلی یا شرکت`}
        error={!!errors.search}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </TextInput>
      <TextInput
        register={{ ...register('job') }}
        placeholder={`گروه شغلی`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      </TextInput>
      <TextInput
        register={{ ...register('city') }}
        placeholder={`شهر`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </TextInput>
      <button
        className={`btn btn-primary col-span-2 ${isSubmitting && 'opacity-25'} lg:col-span-1`}
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