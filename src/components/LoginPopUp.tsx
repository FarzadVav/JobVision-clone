import { createPortal } from 'react-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import TextInput from './inputs/TextInput';
import { CloseRounded, EmailOutlined, VpnKeyOutlined } from '@mui/icons-material';
import PulseLoader from "react-spinners/PulseLoader";
import supabase from '../utils/supabase';
import { Toaster, toast } from 'react-hot-toast';
import useAuth from '../store/useAuth';

type LoginPopUpProps = {
  showLogin: boolean;
  setShowLogin: Function
}

const schema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(4).max(128)
})

type formTypes = {
  email: string;
  password: string;
}

const LoginPopUp = ({ showLogin, setShowLogin }: LoginPopUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })
  const { loginHandler } = useAuth(s => s)

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    const { data: companies } = await supabase
      .from('companies')
      .select('*')

    let hasUser = false
    companies?.forEach(company => {
      if (company.email === data.email) {
        if (company.password === data.password) {
          loginHandler(company._id)
          toast.success('با موفقیت وارد حسابتان شدید')
          reset()
        } else {
          toast.error('رمز عبور اشتباه است')
        }
        return hasUser = true
      }
    })

    if (!hasUser) {
      const { data: company } = await supabase
        .from('companies')
        .insert([
          {
            email: data.email,
            password: data.password
          }
        ])
        .select()
      // @ts-ignore
      loginHandler(company[0]._id)
      toast.success('با موفقیت ثبت نام شدید')
      reset()
    }
  }

  return createPortal(
    <>
      <div
        className={`backdrop-blur-2xl w-full h-screen fixed top-0 right-0 z-50 ${showLogin ? '' : 'opacity-0 invisible'} flex justify-center items-center`}
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