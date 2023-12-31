import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { EmailOutlined, VpnKeyOutlined } from '@mui/icons-material';
import PulseLoader from "react-spinners/PulseLoader";
import { Toaster, toast } from 'react-hot-toast';
import { z } from 'zod';

import TextInput from './inputs/TextInput';
import useAuth from '../hooks/store/useAuth';
import useHeader from '../hooks/store/useHeader';
import useCompany from '../hooks/query/useCompany';
import Dialog from './Dialog';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(128)
})

type formTypes = z.infer<typeof schema>

const LoginPopUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<formTypes>({
    resolver: zodResolver(schema)
  })
  const redirect = useNavigate()
  const { loginHandler } = useAuth(s => s)
  const { refetchCompany, addCompany, updateCompany, fetchingCompany, addCompanyLoading } = useCompany()
  const { showLogin } = useHeader(s => s)

  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    let hasUser = false

    refetchCompany()
      .then(res => {
        res.data?.companies?.forEach(company => {
          if (company.email === data.email) {
            if (company.password === data.password) {
              loginHandler(company._id || '')
              updateCompany(data)
              reset()
              setTimeout(() => {
                useHeader.setState({ showLogin: false })
                redirect('/employer')
              }, 1500);
              toast.success('با موفقیت وارد حسابتان شدید')
            } else {
              toast.error('رمز عبور اشتباه است')
            }
            return hasUser = true
          }
        })

        if (!hasUser) {
          addCompany(data, {
            onSuccess: () => {
              toast.success('با موفقیت ثبت نام شدید')
              reset()
              setTimeout(() => {
                useHeader.setState({ showLogin: false })
                redirect('/employer')
              }, 1500);
            }
          })
        }
      })
  }

  return (
    <Dialog
      show={showLogin}
      closeHandler={() => useHeader.setState({ showLogin: false })}
    >
      <form
        className={`bg-white border border-solid border-jv-light w-[640px] flex flex-col justify-center items-stretch p-6 rounded-md relative sm:w-96`}
        onClick={(event) => {
          event.stopPropagation()
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <img
          className={`h-12 mb-6`}
          src="/images/logo.svg"
        />
        <TextInput
          register={{ ...register('email') }}
          placeholder={`ایمیل`}
          error={errors.email}
        >
          <EmailOutlined />
        </TextInput>
        <TextInput
          customClass={`mt-3`}
          register={{ ...register('password') }}
          placeholder={`رمز عبور`}
          error={errors.password}
        >
          <VpnKeyOutlined />
        </TextInput>
        <button
          className={`btn btn-primary w-full mt-3`}
          type={`submit`}
          disabled={addCompanyLoading || fetchingCompany}
        >
          {
            (addCompanyLoading || fetchingCompany) ? '' : 'ورود'
          }
          <PulseLoader
            color='white'
            loading={(addCompanyLoading || fetchingCompany)}
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
      <Toaster />
    </Dialog>
  )
}

export default LoginPopUp