import { z } from "zod"

const NUMERIC_STRING = z.string().regex(/^[0-9]+$/)
const NON_EMPTY_STRING = z.string().min(1)
const ARRAY_STRING = z.string().array().min(1)

export {
  NUMERIC_STRING,
  NON_EMPTY_STRING,
  ARRAY_STRING
}