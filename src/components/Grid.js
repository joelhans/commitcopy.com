export const Grid = ({ children, className }) => (
  <div className={`grid grid-cols-12 gap-16 items-center ${className}`}>{children}</div>
)

export const Ten = ({ children, className }) => (
  <div className={`col-span-12 lg:col-span-10 ${className}`}>{children}</div>
)

export const Eight = ({ children, className }) => (
  <div className={`col-span-12 lg:col-span-8 ${className}`}>{children}</div>
)

export const Six = ({ children, className }) => (
  <div className={`col-span-12 lg:col-span-6 ${className}`}>{children}</div>
)

export const Four = ({ children, className }) => (
  <div className={`col-span-12 lg:col-span-4 ${className}`}>{children}</div>
)

export const Two = ({ children, className }) => (
  <div className={`col-span-12 lg:col-span-2 ${className}`}>{children}</div>
)
