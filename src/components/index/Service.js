import Link from '@components/Link'

export const ServiceGo = ({ children }) => <div className="flex items-center">{children}</div>

export const ServicePrice = ({ children }) => <div className="text-3xl font-medium">{children}</div>

export const ServiceButton = ({ children, to }) => (
  <button className="!text-whit text-xl font-medium ml-8 px-4 py-2 bg-orange hover:bg-sea transition-all rounded-lg">
    <Link className="!text-white" href={to}>
      {children}
    </Link>
  </button>
)
