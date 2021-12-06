import { parseISO, format } from 'date-fns'
import dayjs from 'dayjs'

export default function Date({ dateString }) {
  return <time dateTime={dateString}>{dayjs(dateString).format('DD MMMM YYYY')}</time>
}
