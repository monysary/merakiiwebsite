export default function CtaButton({ href, children }) {

  return (
    <div className="py-14">
      <a
        type="button"
        href={href}
        target='_blank'
        className="rajdhani-medium bg-red-800 px-4 py-3 text-xl tracking-[4px] font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
      >
        {children}
      </a>
    </div>
  )
}