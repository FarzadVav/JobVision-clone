import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import CompanyBox from './CompanyBox';
import useCompany from "../hooks/query/useCompany";
import tokenGenerator from "../utils/tokenGenerator";
import useJobAds from "../hooks/query/useJobAds";

const PopularCompanies = () => {
  const { company } = useCompany()
  const { jobAds } = useJobAds()

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
        {
          company?.companies?.map(company => (
            <SwiperSlide
              key={tokenGenerator()}
              className={`!w-52`}
            >
              <CompanyBox
                {...company}
                jobAds={jobAds?.filter(jobAd => jobAd.company._id === company._id) || []}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default PopularCompanies