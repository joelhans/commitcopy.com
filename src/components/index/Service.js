import Link from '@components/Link'

export const ServiceGo = ({ children }) => <div className="flex items-center">{children}</div>

export const ServicePrice = ({ children }) => <div className="text-3xl font-medium">{children}</div>

export const ServiceButton = ({ children, to }) => (
  <button className="!text-white text-base font-bold ml-8 bg-orange hover:bg-sea transition-all rounded-lg">
    <Link className="block !text-white px-6 py-4" href={to}>
      {children}
    </Link>
  </button>
)
