import Merakii_Logo_White from '../assets/Merakii_Logo_White.png'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import Socials_Octopus_Front from '../assets/Socials_Octopus_Front.png'

function NavItem({ href, children }) {

  return (
    <li>
      <a href={href} className='relative block px-3 py-2 transition font-bold text-white text-sm hover:text-red-500 tracking-[4px]'>
        {children}
      </a>
    </li>
  )
}

function MerakiiLogo({ width }) {

  return (
    <a href='#'>
      <img src={Merakii_Logo_White} className='py-4' style={{ width: `${width}` }} />
    </a>
  )
}

function DesktopNavigation(props) {

  return (
    <nav {...props}>
      <ul className="flex items-center gap-4">
        <NavItem href="#music">MUSIC</NavItem>
        <NavItem href="#video">VIDEO</NavItem>
        <MerakiiLogo width={"150px"} />
        <NavItem href="#shows_merch">SHOWS</NavItem>
        <NavItem href="#shows_merch">MERCH</NavItem>
      </ul>
    </nav>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <PopoverButton>
        <a href={href} className="block py-2">
          {children}
        </a>
      </PopoverButton>
    </li>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavigation(props) {
  return (
    <div className='sticky top-0 pt-6 px-6 z-50 md:hidden'>
      <Popover {...props} className="flex md:hidden justify-end">
        <PopoverButton className="group flex items-center rounded-full p-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20">
          <img src={Socials_Octopus_Front} alt='Merakii OctopusMenu' className='w-8' />
        </PopoverButton>
        <PopoverBackdrop
          transition
          className="fixed inset-0 z-50 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in bg-black/80"
        />
        <PopoverPanel
          focus
          transition
          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in bg-zinc-900 ring-zinc-800"
        >
          <div className="flex flex-row-reverse items-center justify-between">
            <PopoverButton aria-label="Close menu" className="-m-1 p-1">
              <CloseIcon className="h-6 w-6 text-zinc-400" />
            </PopoverButton>
            <PopoverButton>
              <MerakiiLogo width={'100px'} />
            </PopoverButton>
          </div>
          <nav className="mt-6">
            <ul className="-my-2 divide-y text-base divide-zinc-100/5 text-zinc-300">
              <MobileNavItem href="#music">MUSIC</MobileNavItem>
              <MobileNavItem href="#video">VIDEO</MobileNavItem>
              <MobileNavItem href="#shows_merch">SHOWS</MobileNavItem>
              <MobileNavItem href="#shows_merch">MERCH</MobileNavItem>
            </ul>
          </nav>
        </PopoverPanel>
      </Popover>
    </div>
  )
}

export default function Navbar() {

  return (
    <>
      <MobileNavigation className="pointer-events-auto md:hidden" />
      <div className="sticky md:sticky top-0 z-50 md:backdrop-blur hidden md:block">
        <div className="flex flex-1 justify-end md:justify-center w-full">
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
        </div>
      </div>
    </>
  )
}