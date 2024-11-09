import {
  faTiktok,
  faInstagram,
  faFacebook,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import IconLinkOut from "./IconLinkOut"
import Academy_Stage_Shot from '../assets/Academy_Stage_Shot.jpeg'

const socials = [
  { name: 'TikTok', href: 'https://www.tiktok.com/@merakiimusic', icon: faTiktok },
  { name: 'Instagram', href: 'https://instagram.com/merakiimusic_', icon: faInstagram },
  { name: 'SoundCloud', href: 'https://m.soundcloud.com/merakii_official', icon: faSoundcloud },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/1Q0zMPW6glSd2qW0Y7H73p?si=VLY3rIrJSgWmwjGedVWt5w', icon: faSpotify },
  { name: 'YouTube', href: 'https://www.youtube.com/@merakiimusic', icon: faYoutube },
  { name: 'Facebook', href: 'https://www.facebook.com/merakiiofficial', icon: faFacebook },
]

export default function ShowsMerchToCome() {

  return (
    <div id="shows_merch" className="scroll-mt-24 flex justify-center md:block">
      <div className="hidden md:block relative bg-gray-800 py-16 bg-center bg-no-repeat bg-cover lg:bg-fixed" style={{ backgroundImage: `url(${Academy_Stage_Shot})` }}>
        <div className="mx-auto w-max flex flex-col items-center backdrop-blur-md px-8 py-4 drop-shadow-xl">
          <p className="text-2xl font-semibold leading-7 text-slate-100">Show Dates & Merch</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-100 sm:text-7xl text-nowrap">COMING SOON</h2>
          <p className="mt-6 text-lg leading-8 text-slate-100 text-center">
            Follow to stay up to date with the latest
          </p>
          <div className="mt-4 flex justify-center gap-6">
            {socials.map((social, index) => (
              <IconLinkOut key={index} name={social.name} href={social.href} icon={social.icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden w-max flex flex-col items-center px-4 drop-shadow-xl">
        <p className="text-xl font-semibold leading-7 text-slate-100">Show Dates & Merch</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-100 sm:text-7xl text-nowrap">COMING SOON</h2>
        <p className="mt-6 text-sm leading-8 text-slate-100 text-center">
          Follow to stay up to date with the latest
        </p>
        <div className="mt-4 flex justify-center gap-6">
          {socials.map((social, index) => (
            <IconLinkOut key={index} name={social.name} href={social.href} icon={social.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
