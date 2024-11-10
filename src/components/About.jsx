import Neon_Lights from '../assets/Neon_Lights.jpg'

export default function About() {
  return (
    <div className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-center gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto flex justify-center">
            <img
              alt="Full Body Press Shot"
              src={Neon_Lights}
              className="w-max bg-gray-50 object-contain lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-lg lg:flex-auto text-white backdrop-blur-[1px] drop-shadow-xl">
            <h2 className="text-4xl font-semibold tracking-[4px]">ABOUT</h2>
            <p className="mt-6">
              MERAKII, a Colorado native turned LA-based producer & DJ, started her musical journey in 2017 with Academy of DJs. Her music consists of various genres including trap, dance-pop, bass, and hip hop.
            </p>
            <p className="mt-8">
              She began exploring her own sound after graduating from Icon Collective’s Production Program and earned her debut performance at Brownie and Lemonade’s Spring Break Festival in Puerto Vallarta. Since then she opened for ARMNHMR’s sold out show at Academy LA and performed at Countdown NYE and Beyond Wonderland.
            </p>
            <p className="mt-8">
            Stay tuned for more to come!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
