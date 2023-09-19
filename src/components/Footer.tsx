import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import tokenGenerator from "../utils/tokenGenerator";
import Title from "./Title"

type FooterAccordionProps = {
  length: number;
  title: string;
  text: string;
}

const FooterAccordion = ({ length, title, text }: FooterAccordionProps) => {
  const [showText, setShowText] = useState<boolean>(false)
  const accordionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (showText) {
      accordionRef.current ? accordionRef.current.style.maxHeight = `${accordionRef.current?.scrollHeight + 24}px` : null
    } else {
      accordionRef.current ? accordionRef.current.style.maxHeight = '0' : null
    }
  }, [showText])

  return (
    <li className={`bg-jv-dark brightness-110 w-full rounded-md px-6 py-1 mt-2 first:mt-0 cursor-pointer`}>
      <div
        className={`h-16 flex items-center sm:h-12`}
        onClick={() => setShowText(prev => !prev)}
      >
        <span className={``}>
          {length}
        </span>
        <span className={` mr-6`}>
          {title}
        </span>
      </div>
      <p
        className={`border-solid border-[#ffffff10] ${showText ? 'border-t py-3' : ''} 
        cursor-text overflow-hidden`}
        ref={accordionRef}
      >
        {text}
      </p>
    </li>
  )
}

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
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z" /></svg>
    )
  },
  {
    link: '/',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z" /></svg>
    )
  },
  {
    link: '/',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Zm-3.11-8.83l.013-.007l.87 2.87c.112.311.266.367.453.341c.188-.025.287-.126.41-.244l1.188-1.148l2.55 1.888c.466.257.801.124.917-.432l1.658-7.822c.183-.728-.139-1.02-.703-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78Z" /></svg>
    )
  },
  {
    link: '/',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z" /></svg>
    )
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`svg-duration stroke-white w-4 h-4 ${showFooterOtherContent ? '-scale-y-100' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        <div className={`w-full grid grid-cols-5 justify-items-end mt-12`}>
          {
            footerLinks.length ? footerLinks.map((link, index) => {
              if (index <= 2) {
                return (
                  <div className={`w-full flex flex-col`}>
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
                                  <li className={`w-full mt-1.5`}>
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
            className={`bg-white w-44 h-44 flex justify-center items-center rounded-md p-5 hover:-translate-y-1`}
          >
            <img
              className={`w-full h-full object-cover object-center`}
              src={`/images/enamad.png`}
              alt={`لوگوی ای نماد`}
            />
          </Link>
          <Link
            to={'/'}
            className={`bg-white w-44 h-44 flex justify-center items-center rounded-md p-5 hover:-translate-y-1`}
          >
            <img
              className={`w-full h-full object-cover object-center`}
              src={`/images/samandehi.png`}
              alt={`لوگوی ای نماد`}
            />
          </Link>
        </div>

        <p className={`border-t border-solid border-[#ffffff10] w-full text-sm pt-6 mt-12`}>
          جاب‌ویژن بعنوان اولین ارائه دهنده بسته جامع خدمات کاریابی و استخدام، تجربه برگزاری موفق ادوار مختلف نمایشگاه‌های کار شریف و ایران را در کارنامه کاری خود دارد. سیستم هوشمند انطباق، رزومه ساز دو زبانه، تست‌های خودشناسی، ارتقای توانمندی‌ها به کمک پیشنهاد دوره‌های آموزشی و همکاری با معتبرترین سازمان‌ها برای استخدام از ویژگی‌های متمایز جاب‌ویژن است.
          <div className={`w-full flex items-center mt-6`}>
            <p className={`text-sm`}>
              جاب‌ویژن محصولی دانش بنیان شناخته شده است.
            </p>
            <p className={`text-sm mr-6`}>
              دارای مجوز رسمی کاریابی الکترونیکی از وزارت کار، تعاون و رفاه اجتماعی
            </p>
          </div>
        </p>

        <div className={`w-full flex justify-between items-center py-6 mt-6`}>
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