import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import CompanyTypes from "../types/Company.types";
import tokenGenerator from "../utils/tokenGenerator";
import CompanyBox from './CompanyBox';

const testCompany: CompanyTypes = {
  _id: tokenGenerator(),
  logo: 'https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=3518088&width=70&height=70',
  name: 'تاکسی ماکسیم',
  score: 4.1,
  aboutCompany: 'ما به عنوان سازمانی یادگیرنده، همه تلاش خود را برای ارتقاء کیفیت و عدالت آموزشی بکار می گیریم. دانش و تخصصمان به ما کمک می کند در کنار حامیان خیرخواه و نیکوکار، راه حلهای کارآمدی برای یادگیری دانش آموزان، معلمان و والدین خلق کنیم. ما با بکارگیری فناوری های روز و دستاوردهای علمی نهاد آموزش را به عنوان یکی از الزامات توسعه پایدار تقویت می نماییم تا در مسیر شکل گیری جامعه یادگیرنده قدم برداریم.',
  employees: [10, 30],
  year: 1397,
  knowledgeBased: false,
  activity: 'تاکسی رانی اینترنتی',
  province: { _id: '', name: '' },
  city: { _id: '', name: '' }
}

const PopularCompanies = () => {
  return (
    <div className={`w-full`}>
      <Swiper
        className={`rounded-md`}
        slidesPerView={'auto'}
        spaceBetween={16}
        breakpoints={{
          540: {
            slidesPerView: 3,
          }, 768: {
            slidesPerView: 3,
          }, 1024: {
            slidesPerView: 5,
          }
        }}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
        <SwiperSlide className={`!w-52`}>
          <CompanyBox {...testCompany} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PopularCompanies