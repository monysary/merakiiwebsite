import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faSoundcloud, faApple } from '@fortawesome/free-brands-svg-icons'
import Abort_Track_Image from '../assets/Abort_Track_Image.png'
import High_Track_Image from '../assets/High_Track_Image.png'
import New_Track_Image from '../assets/New_Track_Image.png'
import CtaButton from './CtaButton'
import IconLinkOut from './IconLinkOut'

const songs = [
  {
    name: 'Abort',
    description: 'Single',
    imageUrl: Abort_Track_Image,
    spotifyUrl: 'https://open.spotify.com/track/6DZxE0XJ4prFAs9IVprsT5?si=16489ca5224b4fd7',
    soundCloudUrl: 'https://soundcloud.com/merakii_official/abort?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    appleMusicUrl: 'https://music.apple.com/us/album/abort-single/1677093347',
  },
  {
    name: 'High',
    description: 'Single',
    imageUrl: High_Track_Image,
    spotifyUrl: 'https://open.spotify.com/track/2JiJmyU03INIMbpHCXTz1Q?si=2456ddb123344219',
    soundCloudUrl: 'https://soundcloud.com/merakii_official/merakii-high-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    appleMusicUrl: 'https://music.apple.com/us/album/high-single/1661438526',
  },
  {
    name: 'New Track',
    description: 'Coming Soon',
    imageUrl: New_Track_Image,
    spotifyUrl: '',
    soundCloudUrl: '',
    appleMusicUrl: '',
  },
]

export default function Music() {

  return (
    <div id='music' className="py-24 sm:py-30 relative flex justify-center">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl tracking-[8px]">MUSIC</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid place-items-center max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-16"
        >
          {songs.map((song) => (
            <li key={song.name} className="bg-gray-800 p-8 w-full h-full md:w-max shadow-xl">
              <img alt="" src={song.imageUrl} className="m-auto shadow-lg" />
              <h3 className="mt-6 text-[2rem] font-semibold leading-7 tracking-tight text-white">{song.name}</h3>
              <p className="text-base leading-6 text-gray-400 py-3">{song.description}</p>
              <ul role="list" className={`mt-6 flex justify-center gap-x-6 ${song.name == 'New Track' && 'hidden'}`}>
                <li>
                  <IconLinkOut name={'Spotify'} href={song.spotifyUrl} icon={faSpotify} />
                </li>
                <li>
                  <IconLinkOut name={'SoundCloud'} href={song.soundCloudUrl} icon={faSoundcloud} />
                </li>
                <li>
                  <IconLinkOut name={'Apple Music'} href={song.appleMusicUrl} icon={faApple} />
                </li>
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
