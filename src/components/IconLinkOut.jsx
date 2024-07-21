import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconLinkOut({ name, href, icon }) {

  return (
    <a href={href} target="_blank" className="text-gray-400 hover:text-gray-300">
      <span className="sr-only">{name}</span>
      <FontAwesomeIcon icon={icon} className='w-[25px] h-[25px]' />
    </a>
  )
}