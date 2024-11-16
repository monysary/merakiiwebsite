import { faSpotify, faSoundcloud, faApple, faAmazon, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Abort_Track_Image from '../assets/Abort_Track_Image.png'
import High_Track_Image from '../assets/High_Track_Image.png'
import Quantum_City_Track_Image from '../assets/Quantum_City_Track_Image.png'
import CtaButton from './CtaButton'
import IconLinkOut from './IconLinkOut'

const songs = [
  {
    name: 'Abort',
    description: 'Single',
    alt: 'Abort Track Image',
    imageUrl: Abort_Track_Image,
    linkOut: [
      {
        name: 'Spotify',
        href: 'https://open.spotify.com/track/6DZxE0XJ4prFAs9IVprsT5?si=16489ca5224b4fd7',
        icon: faSpotify,
      },
      {
        name: 'SoundCloud',
        href: 'https://soundcloud.com/merakii_official/abort?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        icon: faSoundcloud,
      },
      {
        name: 'Apple Music',
        href: 'https://music.apple.com/us/album/abort-single/1677093347',
        icon: faApple,
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/watch?v=YKAiCKCDcOM&ab_channel=MERAKII',
        icon: faYoutube,
      },
    ]
  },
  {
    name: 'High',
    description: 'Single',
    alt: 'High Track Image',
    imageUrl: High_Track_Image,
    linkOut: [
      {
        name: 'Spotify',
        href: 'https://open.spotify.com/track/2JiJmyU03INIMbpHCXTz1Q?si=2456ddb123344219',
        icon: faSpotify,
      },
      {
        name: 'SoundCloud',
        href: 'https://soundcloud.com/merakii_official/merakii-high-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        icon: faSoundcloud,
      },
      {
        name: 'Apple Music',
        href: 'https://music.apple.com/us/album/high-single/1661438526',
        icon: faApple,
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/watch?v=kzy3XA21QIo&ab_channel=MERAKII',
        icon: faYoutube,
      },
    ]
  },
  {
    name: 'Quantum City',
    description: 'Single',
    alt: 'Quantum City Track Image',
    imageUrl: Quantum_City_Track_Image,
    linkOut: [
      {
        name: 'Spotify',
        href: 'https://open.spotify.com/track/2FScdoGDYepDTNgBIdwK3n?si=64040c2848f94021',
        icon: faSpotify,
      },
      {
        name: 'SoundCloud',
        href: 'https://on.soundcloud.com/mmMLQJN4prWNNBHK7',
        icon: faSoundcloud,
      },
      {
        name: 'Apple Music',
        href: 'https://music.apple.com/us/album/quantum-city/1773003430?i=1773003431',
        icon: faApple,
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/watch?v=pg1SwmSXyIw&ab_channel=MERAKII',
        icon: faYoutube,
      },
    ]
  },
]

export default function Music() {

  return (
    <div id='music' className="scroll-mt-16 md:scroll-mt-0 pb-24 md:py-24 sm:py-30 relative flex justify-center">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl tracking-[8px]">MUSIC</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 md:mt-20 grid place-items-center max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-16"
        >
          {songs.map((song) => (
            <li key={song.name} className="bg-gray-800 p-8 w-full h-full md:w-max shadow-xl">
              <img src={song.imageUrl} className="m-auto shadow-lg w-64" alt={song.alt} />
              <h3 className="mt-6 text-[2rem] font-semibold leading-7 tracking-tight text-white">{song.name}</h3>
              <p className="text-base leading-6 text-gray-400 py-3">{song.description}</p>
              <ul role="list" className={`mt-6 flex justify-center gap-x-6 ${song.name == 'New Track' && 'hidden'}`}>
                {song.linkOut.map(link => (
                  <li key={link.name}>
                    <IconLinkOut name={link.name} href={link.href} icon={link.icon} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <CtaButton href={'https://soundcloud.com/merakii_official'} >
          {'LISTEN TO MORE'}
        </CtaButton>
      </div>
    </div>
  )
}
