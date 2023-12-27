import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import CompanyBox from './CompanyBox';
import useCompany from "../hooks/query/useCompany";

const PopularCompanies = () => {
  const { company } = useCompany()

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
          company?.companies.map(company => (
            <SwiperSlide className={`!w-52`}>
              <CompanyBox {...company} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default PopularCompanies