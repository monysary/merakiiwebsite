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

export default function Footer() {
  return (
    <footer className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl py-12 md:flex md:items-center md:justify-center md:gap-[500px]">
        <div className="flex justify-center space-x-6 md:order-2">
          {socials.map((social, index) => (
            <IconLinkOut key={index} name={social.name} href={social.href} icon={social.icon} />
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-white">
            &copy; 2024 Merakii Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
