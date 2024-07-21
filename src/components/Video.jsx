import { useState } from "react"

import CtaButton from "./CtaButton"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs({ tabs, setTabs }) {
  const handleChangeTabs = (tabName) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      current: tab.name == tabName
    })))
  }

  return (
    <div>
      <div className="flex justify-center mb-10">
        <nav aria-label="Tabs" className="flex shadow md:max-w-[500px] max-w-[300px]">
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.name}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'cursor-pointer relative overflow-hidden px-4 py-4 text-center border-red focus:z-10 text-nowrap w-[500px] transition hover:text-red-500 rajdhani-semibold text-lg text-white',
              )}
              onClick={() => handleChangeTabs(tab.name)}
            >
              {tab.name}
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-red-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5',
                )}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default function Video() {
  const [tabs, setTabs] = useState([
    { name: 'Music Video', href: 'https://www.youtube.com/embed/8Xo1H_syE4Y', current: true },
    { name: 'Live Set', href: 'https://www.youtube.com/embed/jixFFRlR1n4', current: false },
  ])

  return (
    <div id="video" className="scroll-mt-16 md:scroll-mt-0 pb-24 sm:pb-30 relative flex justify-center">
      <div className="md:px-6 text-center lg:px-20 w-11/12">
        <div className="mx-auto md:max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl tracking-[8px]">VIDEO</h2>
        </div>
        <div className="scroll-mt-16 mt-10 md:mt-20 mx-auto md:max-w-7xl md:px-6 text-center lg:px-20">
          <Tabs tabs={tabs} setTabs={setTabs} />
          <div className="flex justify-center">
            {tabs.map(tab => {
              if (tab.current) {
                return (
                  <iframe
                    key={tab.name}
                    src={tab.href}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={tab.name}
                    className="w-full h-[220px] sm:h-[400px] md:w-[1200px] md:h-[675px]"
                  />

                )
              }
            })}
          </div>
        </div>
        <CtaButton href={'https://www.youtube.com/@merakiimusic'}>
          {'WATCH MORE'}
        </CtaButton>
      </div>
    </div>
  )
}