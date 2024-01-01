import { z } from "zod"

const NON_EMPTY_STRING = z.string().min(1, { message: 'این فیلد الزامی است' })
const NUMERIC_STRING = z.string().regex(/^[0-9]+$/, { message: 'لطفا از اعداد استفاده کنید' })
const ARRAY_STRING = z.string().array().min(1, { message: 'لطفا یک مورد را اضافه کنید' })

export {
  NON_EMPTY_STRING,
  NUMERIC_STRING,
  ARRAY_STRING
}