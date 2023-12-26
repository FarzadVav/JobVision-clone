import { Instagram, LinkedIn, Telegram, Twitter } from "@mui/icons-material";
import { ReactNode } from "react";

export const accordions = [
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

export const footerLinks: { title: string; links: { title: string; link: string }[] }[] = [
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

export const footerSocials: { link: string; svg: ReactNode }[] = [
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