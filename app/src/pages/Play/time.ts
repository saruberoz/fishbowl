import { format, parse } from "date-fns"

/**
 * Return the current time as a timestamp with time-zone (timestamptz)
 * See https://www.postgresql.org/docs/9.1/datatype-datetime.html
 */
export const timestamptzNow = (): string => {
  return format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSSX")
}

export const dateFromTimestamptzNow = (dateString: string) => {
  return parse(dateString, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date())
}
