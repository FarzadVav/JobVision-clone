import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import tokenGenerator from "../utils/tokenGenerator";
import Title from "./Title"
import FooterAccordion, { FooterLinksAccordion } from "./FooterAccordion";
import { Instagram, KeyboardArrowDownRounded, LinkedIn, Telegram, Twitter } from "@mui/icons-material";

const accordions = [
  {
    title: 'سایت استخدامی جاب ویژن، چه مزیتی نسبت به دیگر سایت‌های کاریابی و استخدامی دارد؟',
    text: 'وبسایت جاب ویژن با بیش از 26 هزار آگهی استخدام فعال و استفاده از هوش مصنوعی برای پیشنهاد مرتبط‌ترین آگهی‌ها به کارجویان، فرایند کاریابی را بسیار آسان‌تر کرده است.'
  },
  {
    title: 'آیا ساخت و ارسال رزومه در جاب ویژن برای من هزینه‌ای دارد؟',
    text: 'خیر، کارجویان می‌توانند بدون پرداخت هیچ هزینه‌ای در سایت کاریابی جاب ویژن رزومه بسازند و برای آگهی‌های استخدام ارسال کنند.'
  },
  {
    title: 'چگونه می‌توانم آگهی‌های استخدام مشاغل مرتبط با خودم را پیدا کنم؟',
    text: 'شما می‌توانید به راحتی با استفاده از نوار جستجوی بالای سایت و انتخاب فیلترهای مختلف، آگهی‌های استخدامی حوزه مرتبط با خودتان را پیدا کنید.'
  },
]

const footerLinks: { title: string; links: { title: string; link: string }[] }[] = [
  {
    title: 'کارجویان',
    links: [
      { title: 'رزومه ساز دو زبانه', link: '/' },
      { title: 'جستجوی فرصت‌های شغلی', link: '/' },
      { title: 'آزمون‌های خود شناسی', link: '/' },
      { title: 'رزومه ساز دو زبانه', link: '/' },
    ]
  },
  {
    title: 'کارفرمایان',
    links: [
      { title: 'ثبت آگهی جدید', link: '/' },
      { title: 'جستجوی بانک رزومه', link: '/' },
      { title: 'ثبت آگهی جدید', link: '/' },
      { title: 'جستجوی بانک رزومه', link: '/' },
    ]
  },
  {
    title: 'درباره جاب‌ویژن',
    links: [
      { title: 'درباره ما', link: '/' },
      { title: 'سوالات متداول', link: '/' },
      { title: 'تماس با ما', link: '/' },
      { title: 'قوانین و مقررات', link: '/' },
      { title: 'تماس با ما', link: '/' },
    ]
  },
]

const footerSocials: { link: string; svg: ReactNode }[] = [
  {
    link: '/',
    svg: <Instagram fontSize="large" />
  },
  {
    link: '/',
    svg: <Telegram fontSize="large" />
  },
  {
    link: '/',
    svg: <Twitter fontSize="large" />
  },
  {
    link: '/',
    svg: <LinkedIn fontSize="large" />
  },
]

const FooterTitle = ({ children, margin }: { children: ReactNode, margin?: boolean }) => {
  return (
    <Title
      customClass={`justify-center sm:justify-start ${margin ? 'mt-6' : ''}`}
      withOutIcon
    >
      <h6 className={` text-center sm:text-right`}>
        {children}
      </h6>
    </Title>
  )
}

const Footer = () => {
  const [showFooterOtherContent, setShowFooterOtherContent] = useState<boolean>(false)
  const footerOtherContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showFooterOtherContent) {
      footerOtherContentRef.current ? footerOtherContentRef.current.style.maxHeight =
        `${footerOtherContentRef.current?.scrollHeight}px` : null
    } else {
      footerOtherContentRef.current ? footerOtherContentRef.current.style.maxHeight = '0' : null
    }
  }, [showFooterOtherContent])

  return (
    <footer className={`text-white bg-jv-dark z-40 pt-12`}>
      <div className={`wrapper flex flex-col justify-center items-center`}>
        <FooterTitle>
          سوالات متداول درباره سایت استخدام و کاریابی جاب ویژن
        </FooterTitle>
        <ul className={`w-full flex flex-col justify-center items-center mt-6`}>
          {
            accordions.length ? accordions.map((accordion, index) => (
              <FooterAccordion
                key={tokenGenerator()}
                length={index + 1}
                {...accordion}
              />
            )) : null
          }
        </ul>
        <div className={`w-full mt-12`}>
          <FooterTitle>
            استخدام با معتبرترین سایت کاریابی و استخدامی ایران
          </FooterTitle>
          <p className={`text-justify mt-3`}>
            پیدا کردن شغل دلخواه و فرصت استخدام جدید در سازمانی معتبر با شرایط مطلوب کاری آسان نیست. فرآیند پیدا کردن شغل و کاریابی، همواره مسیری با ناهمواری‌های زیاد برای کارجویان بوده و هست. وضعیت نه‌چندان مطلوب بازار کار در ایران از یک طرف و عدم کسب مهارت‌های تخصصی توسط کارجویان از طرف دیگر، این موضوع را به یک مسئله بزرگ در جامعه تبدیل کرده است.

            همه کارجویان در هر حوزه، شهر، شغل و سنی تمایل به کوتاه و آسان‌تر کردن این مسیر ناهموار و تسریع در استخدام خود دارند. برای موفقیت در این راه به یک رزومه حرفه‌ای، دسترسی به آگهی‌های استخدام جدید، شناخت سازمان‌ها، مهارت تخصصی و در نهایت ارسال رزومه به فرصت‌های شغلی متناسب با خود نیاز دارید.
            <span className={showFooterOtherContent ? 'block' : 'hidden sm:block'}>
              سایت استخدامی جاب ویژن از سال 1395 فعالیت خود را آغاز کرد. در سال‌های فعالیت خود پیوسته تلاش کرده است با ارائه امکانات و رفع نیازهای شما، مسیر سخت جستجوی کار و کاریابی را به راهی هموار تبدیل کند. در این سایت درج آگهی از سوی کارفرمایان یا مسئولان منابع انسانی انجام شده و نیازمندی های شغلی، حقوق، بیمه و شرایط جذب نیرو در آگهی کار درج می‌شود.

              رزومه ساز دوزبانه رایگان، ارائه آگهی‌های استخدام جدید معتبرترین سازمان‌ها و شرکت های کشور، سیستم هوشمند انطباق، امکان شرکت در آزمون‌های شخصیت شناسی معتبر، به روز بودن فرصت‌های شغلی، ارائه دوره‌های آموزشی برای افزایش مهارت کارجویان و ... از جمله این امکانات است.
            </span>
          </p>
          <div
            className={`overflow-hidden duration-300 ${showFooterOtherContent ? 'opacity-100' : 'opacity-0'}`}
            ref={footerOtherContentRef}
          >
            <FooterTitle margin>
              مراحل استفاده از امکانات جاب ویژن
            </FooterTitle>
            <p className={`text-justify mt-3`}>
              در ادامه، به طور مختصر مراحل و نحوه استفاده از امکاناتی را که سایت کاریابی و استخدامی جاب ویژن در اختیار شما قرار می‌دهد بررسی می‌کنیم.
            </p>
            <FooterTitle margin>
              ثبت‌نام در سایت جاب ویژن
            </FooterTitle>
            <p className={`text-justify mt-3`}>
              برای ارسال رزومه از طریق سایت استخدامی جاب ویژن، ابتدا باید در سایت ثبت نام کنید. برای این کار روی دکمه‌ی ورود/عضویت کلیک کنید. در این جا، کافی است برای ثبت نام، ایمیل خود را وارد کرده و برای حساب کاربری‌تان یک رمز عبور انتخاب نمایید. علاوه بر آن، امکان ثبت‌نام با گوگل و لینکدین نیز به شما داده شده است.
            </p>
            <FooterTitle margin>
              لینک های مرتبط
            </FooterTitle>
            <div className={`flex flex-col items-center gap-3 mt-3 sm:flex-row`}>
              <Link
                to={``}
                className={`btn btn-dark brightness-110 decoration-[#ffffff35] underline w-full
                hover:brightness-125 sm:w-max`}
              >
                استخدام بیمه
              </Link>
              <Link
                to={``}
                className={`btn btn-dark brightness-110 decoration-[#ffffff35] underline w-full
                hover:brightness-125 sm:w-max`}
              >
                استخدام کارگزاری
              </Link>
              <Link
                to={``}
                className={`btn btn-dark brightness-110 decoration-[#ffffff35] underline w-full
                hover:brightness-125 sm:w-max`}
              >
                استخدام خودرو
              </Link>
            </div>
            <FooterTitle margin>
              آخرین مطالب بلاگ
            </FooterTitle>
            <div className={`flex flex-col items-center gap-3 mt-3 sm:flex-row`}>
              <article className={`w-full sm:w-max`}>
                <Link
                  to={``}
                  className={`btn btn-dark brightness-110 w-full hover:brightness-125`}
                >
                  راهنمای جامع استخدام
                </Link>
              </article>
              <article className={`w-full sm:w-max`}>
                <Link
                  to={``}
                  className={`btn btn-dark brightness-110 w-full hover:brightness-125`}
                >
                  راهنمای جامع رزومه نویسی برای کارجویان
                </Link>
              </article>
              <article className={`w-full sm:w-max`}>
                <Link
                  to={``}
                  className={`btn btn-dark brightness-110 w-full hover:brightness-125`}
                >
                  گزارش افزایش حقوق 1402 کارگران
                </Link>
              </article>
            </div>
          </div>
          <button
            className={`btn text-white mt-6 mx-auto`}
            onClick={() => setShowFooterOtherContent(prev => !prev)}
          >
            {
              showFooterOtherContent ? 'مشاهده موارد کمتر' : 'مشاهده موارد بیشتر'
            }
            <KeyboardArrowDownRounded
              className={showFooterOtherContent ? '-scale-y-100' : ''}
            />
          </button>
        </div>

        <div className={`w-full hidden grid-rows-2 grid-cols-3 mt-12 sm:grid lg:grid-rows-1 lg:grid-cols-5 
        lg:justify-items-end`}>
          {
            footerLinks.length ? footerLinks.map((link, index) => {
              if (index <= 2) {
                return (
                  <div
                    key={tokenGenerator()}
                    className={`w-full flex flex-col`}
                  >
                    <span className={` dana-bold`}>
                      {link.title}
                    </span>
                    {
                      link.links.length ? (
                        <ul className={`w-full flex flex-col mt-1.5`}>
                          {
                            link.links.map((sublink, index) => {
                              if (index <= 4) {
                                return (
                                  <li
                                    key={tokenGenerator()}
                                    className={`w-full mt-1.5`}
                                  >
                                    <Link
                                      className={`text-white underline decoration-[#ffffff35] hover:decoration-[#fff]`}
                                      to={sublink.link}
                                    >
                                      {sublink.title}
                                    </Link>
                                  </li>
                                )
                              }
                            })
                          }
                        </ul>
                      ) : 'لینکی پیدا نشد'
                    }
                  </div>
                )
              }
            }) : null
          }
          <Link
            to={'/'}
            className={`bg-white w-44 h-44 flex justify-center items-center rounded-md p-5 mt-6 hover:-translate-y-1 lg:mt-0`}
          >
            <img
              className={`w-full h-full object-cover object-center`}
              src={`/images/enamad.png`}
              alt={`لوگوی ای نماد`}
            />
          </Link>
          <Link
            to={'/'}
            className={`bg-white w-44 h-44 flex justify-center items-center rounded-md p-5 mt-6 hover:-translate-y-1 lg:mt-0`}
          >
            <img
              className={`w-full h-full object-cover object-center`}
              src={`/images/samandehi.png`}
              alt={`لوگوی ای نماد`}
            />
          </Link>
        </div>

        {
          footerLinks.length ? (
            <div className={`w-full flex-col justify-center items-center mt-6 sm:hidden`}>
              {
                footerLinks.map((link, index) => {
                  if (index <= 2) {
                    return (
                      <FooterLinksAccordion
                        key={tokenGenerator()}
                        title={link.title}
                        text={link.links.length ? (
                          <ul className={`w-full flex flex-col justify-center items-center`}>
                            {
                              link.links.map((sublink, index) => {
                                if (index <= 4) {
                                  return (
                                    <li
                                      key={tokenGenerator()}
                                      className={`w-full mt-3 first:mt-0`}
                                    >
                                      <Link
                                        to={sublink.link}
                                        className={`text-white underline decoration-[#ffffff35]`}
                                      >
                                        {sublink.title}
                                      </Link>
                                    </li>
                                  )
                                }
                              })
                            }
                          </ul>
                        ) : ''}
                      />
                    )
                  }
                })
              }
            </div>
          ) : null
        }

        <p className={`border-t border-solid border-[#ffffff10] w-full leading-loose text-sm pt-6 mt-9 sm:mt-12`}>
          جاب‌ویژن بعنوان اولین ارائه دهنده بسته جامع خدمات کاریابی و استخدام، تجربه برگزاری موفق ادوار مختلف نمایشگاه‌های کار شریف و ایران را در کارنامه کاری خود دارد. سیستم هوشمند انطباق، رزومه ساز دو زبانه، تست‌های خودشناسی، ارتقای توانمندی‌ها به کمک پیشنهاد دوره‌های آموزشی و همکاری با معتبرترین سازمان‌ها برای استخدام از ویژگی‌های متمایز جاب‌ویژن است.
          <span className={`w-full flex flex-col mt-6 md:flex-row md:items-center`}>
            <span className={`block text-sm`}>
              جاب‌ویژن محصولی دانش بنیان شناخته شده است.
            </span>
            <span className={`block text-sm mt-3 md:mt-0 md:mr-6`}>
              دارای مجوز رسمی کاریابی الکترونیکی از وزارت کار، تعاون و رفاه اجتماعی
            </span>
          </span>
        </p>

        <div className={`w-full flex justify-between items-center pt-6 pb-2 mt-6 sm:pb-6`}>
          <Link to={`/`}>
            <img
              src={`/images/logo-white.svg`}
              alt={`لوگوی جاب ویژن`}
            />
          </Link>
          <div className={`flex justify-center items-center`}>
            {
              footerSocials.length ? footerSocials.map((social, index) => {
                if (index <= 3) {
                  return (
                    <Link
                      key={tokenGenerator()}
                      className={`text-white mr-6 first:mr-0 hover:-translate-y-0.5`}
                      to={social.link}
                    >
                      {social.svg}
                    </Link>
                  )
                }
              }) : null
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer