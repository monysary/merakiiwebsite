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
      <a href={href} className="block py-2">
        {children}
      </a>
    </li>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
    <div className='sticky top-0 p-4 z-50 md:hidden'>
      <Popover {...props} className="flex md:hidden justify-end">
        <PopoverButton className="group flex items-center rounded-full bg-white/90 p-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          <img src={Socials_Octopus_Front} alt='Merakii OctopusMenu' className='w-5' />
        </PopoverButton>
        <PopoverBackdrop
          transition
          className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
        />
        <PopoverPanel
          focus
          transition
          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
        >
          <div className="flex flex-row-reverse items-center justify-between">
            <PopoverButton aria-label="Close menu" className="-m-1 p-1">
              <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            </PopoverButton>
            <MerakiiLogo width={'100px'} />
          </div>
          <nav className="mt-6">
            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
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
      <div className="absolute md:sticky top-0 z-50 md:backdrop-blur hidden md:block">
        <div className="flex flex-1 justify-end md:justify-center w-full">
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
        </div>
      </div>
    </>
  )
}