import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import RSS from './RSS'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 w-full mx-auto">
          <header className="z-40 lg:z-50 lg:mx-auto">
            <div className="max-w-screen-xl flex items-center justify-start pt-6 px-6 mx-auto">
              <div className="flex items-baseline mr-auto">
                <div className="mr-6 lg:mr-12">
                  <Link href="/" aria-label="Joel Hans">
                    <div className="text-2xl font-sans font-medium leading-none text-sea hover:text-steel">
                      Joel Hans
                      <span className="block text-xs text-purple dark:text-gray-100 font-mono font-bold">
                        The open-source copywriter.
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center mr-8">
                <ThemeSwitch />
                <RSS />
                <MobileNav />
              </div>
              <div className="hidden sm:flex items-center justify-end">
                {headerNavLinks.map((link) => (
                  <div key={link.title} className="group relative py-4 pr-4 md:pr-8 leading-none">
                    <Link
                      href={link.href}
                      className="text-gray-900 dark:text-gray-200 text-base leading-none font-medium  hover:text-sea dark:hover:text-sea transition-all"
                    >
                      {link.title}
                    </Link>
                    {link.items && (
                      <div className="hidden absolute -top-0 w-60 min-w-full group-hover:flex flex-col mt-12 p-4 -ml-4 bg-white dark:bg-gray-800 border border-gray-200 rounded shadow-lg">
                        {link.items.map((link) => (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="text-gray-900 dark:text-gray-200 text-base leading-none font-medium hover:text-sea dark:hover:text-sea transition-all first:mb-4"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="text-white font-bold bg-orange px-6 py-4 rounded hover:bg-sea transition-all">
                  <Link to="/contact/">Start a project</Link>
                </button>
              </div>
            </div>
          </header>
          <main className="max-w-screen-xl mx-auto mb-auto px-6">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
