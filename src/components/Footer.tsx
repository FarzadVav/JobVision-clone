import { useEffect, useRef, useState } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";

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
        className={`h-12 flex items-center`}
        onClick={() => setShowText(prev => !prev)}
      >
        <span className={`text-white`}>
          {length}
        </span>
        <span className={`text-white mr-6`}>
          {title}
        </span>
      </div>
      <p
        className={`border-solid border-[#ffffff10] ${showText ? 'border-t py-3' : ''} text-white max-w-2xl
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
    <footer className={`bg-jv-dark z-40 py-12`}>
      <div className={`wrapper flex flex-col justify-center items-center`}>
        <Title
          customClass={`justify-center`}
          withOutIcon
        >
          <h6 className={`text-white`}>
            سوالات متداول درباره سایت استخدام و کاریابی جاب ویژن
          </h6>
        </Title>
        <ul className={`w-max flex flex-col justify-center items-center mt-6`}>
          {
            accordions.length ? accordions.map((accordion, index) => (
              <FooterAccordion
                length={index + 1}
                {...accordion}
              />
            )) : null
          }
        </ul>
        <div className={`mt-12`}>
          <Title
            withOutIcon
          >
            <h6 className={`text-white`}>
              استخدام با معتبرترین سایت کاریابی و استخدامی ایران
            </h6>
          </Title>
          <p className={`text-white text-justify mt-3`}>
            پیدا کردن شغل دلخواه و فرصت استخدام جدید در سازمانی معتبر با شرایط مطلوب کاری آسان نیست. فرآیند پیدا کردن شغل و کاریابی، همواره مسیری با ناهمواری‌های زیاد برای کارجویان بوده و هست. وضعیت نه‌چندان مطلوب بازار کار در ایران از یک طرف و عدم کسب مهارت‌های تخصصی توسط کارجویان از طرف دیگر، این موضوع را به یک مسئله بزرگ در جامعه تبدیل کرده است.

            همه کارجویان در هر حوزه، شهر، شغل و سنی تمایل به کوتاه و آسان‌تر کردن این مسیر ناهموار و تسریع در استخدام خود دارند. برای موفقیت در این راه به یک رزومه حرفه‌ای، دسترسی به آگهی‌های استخدام جدید، شناخت سازمان‌ها، مهارت تخصصی و در نهایت ارسال رزومه به فرصت‌های شغلی متناسب با خود نیاز دارید.

            سایت استخدامی جاب ویژن از سال 1395 فعالیت خود را آغاز کرد. در سال‌های فعالیت خود پیوسته تلاش کرده است با ارائه امکانات و رفع نیازهای شما، مسیر سخت جستجوی کار و کاریابی را به راهی هموار تبدیل کند. در این سایت درج آگهی از سوی کارفرمایان یا مسئولان منابع انسانی انجام شده و نیازمندی های شغلی، حقوق، بیمه و شرایط جذب نیرو در آگهی کار درج می‌شود.

            رزومه ساز دوزبانه رایگان، ارائه آگهی‌های استخدام جدید معتبرترین سازمان‌ها و شرکت های کشور، سیستم هوشمند انطباق، امکان شرکت در آزمون‌های شخصیت شناسی معتبر، به روز بودن فرصت‌های شغلی، ارائه دوره‌های آموزشی برای افزایش مهارت کارجویان و ... از جمله این امکانات است.
          </p>
          <div
            className={`overflow-hidden`}
            ref={footerOtherContentRef}
          >
            <Title
              customClass={`mt-6`}
              withOutIcon
            >
              <h6 className={`text-white`}>
                مراحل و نحوه‌ی استفاده از امکانات جاب ویژن
              </h6>
            </Title>
            <p className={`text-white text-justify mt-3`}>
              در ادامه، به طور مختصر مراحل و نحوه استفاده از امکاناتی را که سایت کاریابی و استخدامی جاب ویژن در اختیار شما قرار می‌دهد بررسی می‌کنیم.
            </p>
            <Title
              customClass={`mt-6`}
              withOutIcon
            >
              <h6 className={`text-white`}>
                ثبت‌نام در سایت جاب ویژن
              </h6>
            </Title>
            <p className={`text-white text-justify mt-3`}>
              برای ارسال رزومه از طریق سایت استخدامی جاب ویژن، ابتدا باید در سایت ثبت نام کنید. برای این کار روی دکمه‌ی ورود/عضویت کلیک کنید. در این جا، کافی است برای ثبت نام، ایمیل خود را وارد کرده و برای حساب کاربری‌تان یک رمز عبور انتخاب نمایید. علاوه بر آن، امکان ثبت‌نام با گوگل و لینکدین نیز به شما داده شده است.
            </p>
            <Title withOutIcon>
              <span className={`text-white mt-6 text-xl`}>
                لینک های مرتبط
              </span>
            </Title>
            <div className={`flex items-center mt-3`}>
              <Link
                to={``}
                className={`btn decoration-[#ffffff45] text-white underline`}
              >
                استخدام بیمه
              </Link>
              <Link
                to={``}
                className={`btn decoration-[#ffffff45] text-white underline`}
              >
                استخدام کارگزاری
              </Link>
              <Link
                to={``}
                className={`btn decoration-[#ffffff45] text-white underline`}
              >
                استخدام خودرو
              </Link>
            </div>
            <Title withOutIcon>
              <span className={`text-white mt-6 text-xl`}>
                آخرین مطالب بلاگ
              </span>
            </Title>
            <div className={`flex items-center gap-3 flex-wrap mt-3`}>
              <article>
                <Link
                  to={``}
                  className={`btn btn-dark brightness-110 hover:brightness-125`}
                >
                  راهنمای جامع استخدام
                </Link>
              </article>
              <article>
                <Link
                  to={``}
                  className={`btn btn-dark brightness-110 hover:brightness-125`}
                >
                  راهنمای جامع رزومه نویسی برای کارجویان
                </Link>
              </article>
              <article>
                <Link
                  to={``}
                  className={`btn btn-dark brightness-110 hover:brightness-125`}
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
      </div>
    </footer>
  )
}

export default Footer