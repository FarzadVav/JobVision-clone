import { createPortal } from 'react-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import TextInput from './inputs/TextInput';
import { CloseRounded, EmailOutlined, VpnKeyOutlined } from '@mui/icons-material';
import PulseLoader from "react-spinners/PulseLoader";
import { Toaster, toast } from 'react-hot-toast';
import useAuth from '../hooks/store/useAuth';
import useHeader from '../hooks/store/useHeader';
import { useNavigate } from 'react-router-dom';
import useCompany from '../hooks/query/useCompany';

const schema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(4).max(128)
})

type formTypes = z.infer<typeof schema>

const LoginPopUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })
  const redirect = useNavigate()
  const { loginHandler } = useAuth(s => s)
  const { data: companies, mutate } = useCompany()
  const { setShowLogin } = useHeader(s => s)

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    let hasUser = false
    companies?.forEach(company => {
      if (company.email === data.email) {
        if (company.password === data.password) {
          loginHandler(company._id)
          toast.success('با موفقیت وارد حسابتان شدید')
          reset()
          setShowLogin(false)
          redirect('/employer')
        } else {
          toast.error('رمز عبور اشتباه است')
        }
        return hasUser = true
      }
    })

    if (!hasUser) {
      mutate(data, {
        onSuccess: () => {
          // @ts-ignore
          loginHandler(company[0]._id)
          toast.success('با موفقیت ثبت نام شدید')
          reset()
          setShowLogin(false)
          redirect('/employer')
        }
      })
    }
  }

  return createPortal(
    <>
      <div
        className={`backdrop-blur-2xl w-full h-screen fixed top-0 right-0 z-50 flex justify-center items-center`}
        onClick={() => setShowLogin(false)}
      >
        <form
          className={`bg-white border border-solid border-jv-light w-full h-full flex flex-col justify-center items-stretch p-6 rounded-md relative sm:w-96 sm:h-max`}
          onClick={(event) => {
            event.stopPropagation()
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            className={`btn-sm absolute top-5 left-1.5 sm:hidden`}
            onClick={() => setShowLogin(false)}
            type='button'
          >
            <CloseRounded className={`text-jv-danger`} />
          </button>
          <img
            className={`h-12 mb-6`}
            src="/images/logo.svg"
          />
          <TextInput
            register={{ ...register('email') }}
            placeholder={`ایمیل`}
            error={!!errors.email}
          >
            <EmailOutlined />
          </TextInput>
          <TextInput
            customClass={`mt-3`}
            register={{ ...register('password') }}
            placeholder={`رمز عبور`}
            error={!!errors.password}
          >
            <VpnKeyOutlined />
          </TextInput>
          <button
            className={`btn btn-primary w-full mt-3`}
            type={`submit`}
            disabled={isSubmitting}
          >
            {
              isSubmitting ? '' : 'ورود'
            }
            <PulseLoader
              color='white'
              loading={isSubmitting}
              size={6}
            />
          </button>
          <div className={`w-full text-center mt-6 text-sm`}>
            مشکلی پیش آمده؟
            <span className={`text-jv-primary mr-1.5 text-sm cursor-pointer`}>
              گزارش
            </span>
          </div>
        </form>
      </div>

      <Toaster />
    </>,
    document.body
  )
}

export default LoginPopUp