import { z } from "zod"

const NUMERIC_STRING = z.string().regex(/^[0-9]+$/, { message: 'لطفا از اعداد استفاده کنید' })
const NON_EMPTY_STRING = z.string().min(1, { message: 'این فیلد الزامی است' })
const ARRAY_STRING = z.string().array().min(1, { message: 'لطفا یک مورد را اضافه کنید' })

export {
  NUMERIC_STRING,
  NON_EMPTY_STRING,
  ARRAY_STRING
}