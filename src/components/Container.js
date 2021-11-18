const Container = ({ className, children }) => (
  <div className={`relative max-w-screen-xl mx-auto mb-auto px-6 lg:px-12 ${className}`}>
    {children}
  </div>
)

export default Container
