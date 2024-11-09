import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function PandoraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="25" viewBox="0 0 50 50" className="invert-[69%] sepia-[11%] saturate-[282%] hue-rotate-[179deg] brightness-[92%] contrast-[94%] hover:invert-[92%] hover:sepia-[6%] hover:saturate-[214%] hover:hue-rotate-[177deg] hover:brightness-[98%] hover:contrast-[81%]">
      <path d="M37.993,10.492C35.229,7.596,31.502,6,27.5,6H10C9.448,6,9,6.447,9,7v36c0,0.553,0.448,1,1,1h8c1.654,0,3-1.346,3-3v-6	h6.119c7.971,0,14.5-6.062,14.865-13.801C42.172,17.19,40.755,13.388,37.993,10.492z"></path>
    </svg>
  )
}

export default function IconLinkOut({ name, href, icon }) {

  return (
    <a href={href} target="_blank" className="text-gray-400 hover:text-gray-300">
      <span className="sr-only">{name}</span>
      {icon == 'PandoraIcon'
        ? <PandoraIcon/>
        : <FontAwesomeIcon icon={icon} className='w-[25px] h-[25px]' />
      }
    </a>
  )
}