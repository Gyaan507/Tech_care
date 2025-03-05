import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faUsers,
  faCalendarDays,
  faMessage,
  faCreditCard,
  faCalendar,
  faVenusMars,
  faPhone,
  faPhoneVolume,
  faShieldHalved,
  faLungs,
  faTemperatureHalf,
  faHeartPulse,
  faDownload,
  faCog,
  faEllipsisVertical,
  faMagnifyingGlass,
  faEllipsis,
  faChevronDown,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons"

// Icon mapping object - centralized place to define all icons
const iconMap = {
  // Navigation icons
  overview: faHome,
  patients: faUsers,
  schedule: faCalendarDays,
  message: faMessage,
  transactions: faCreditCard,

  // Patient profile icons
  calendar: faCalendar,
  gender: faVenusMars,
  phone: faPhone,
  emergency: faPhoneVolume,
  insurance: faShieldHalved,

  // Vital signs icons
  lungs: faLungs,
  temperature: faTemperatureHalf,
  heart: faHeartPulse,

  // Action icons
  download: faDownload,
  settings: faCog,
  more: faEllipsisVertical,
  search: faMagnifyingGlass,
  ellipsis: faEllipsis,

  // UI icons
  chevronDown: faChevronDown,
  arrowUp: faArrowUp,
  arrowDown: faArrowDown,
}

// Reusable Icon component
const Icon = ({ name, className, ...props }) => {
  if (!iconMap[name]) {
    console.warn(`Icon "${name}" not found in iconMap`)
    return null
  }

  return <FontAwesomeIcon icon={iconMap[name]} className={className} {...props} />
}

export default Icon
export { iconMap }

