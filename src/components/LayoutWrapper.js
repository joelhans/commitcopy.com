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
          <header className="relative z-40 lg:z-50 lg:mx-auto">
            <div className="max-w-screen-xl flex items-center justify-start pt-12 px-6 lg:px-12 mx-auto">
              {/* <div className="flex items-baseline mr-auto">
                <div className="mr-6 lg:mr-12">
                  <Link href="/" aria-label="Joel Hans">
                    <div className="group text-4xl font-sans leading-none">
                      <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-3 py-1.5 rounded-lg hover:text-sea transition-all">
                        Commit
                      </span>
                      <span>Copy</span>
                    </div>
                  </Link>
                </div>
              </div> */}
              <div className="flex items-center lg:ml-auto lg:mr-8">
                <ThemeSwitch />
                {/* <RSS /> */}
                <MobileNav />
              </div>
              <div className="hidden md:flex items-center justify-end">
                {headerNavLinks.map((link) => (
                  <div key={link.title} className="group relative py-4 pr-4 md:pr-8 leading-none">
                    <Link
                      href={link.href}
                      className="text-gray-900 dark:text-gray-200 text-base leading-none font-medium hover:text-sea dark:hover:text-sea transition-all"
                    >
                      {link.title}
                    </Link>
                    {link.items && (
                      <div className="hidden absolute -top-0 w-60 min-w-full group-hover:flex flex-col mt-12 p-6 -ml-6 bg-white dark:bg-gray-800 border border-gray-200 rounded shadow-lg">
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
                <button className="text-white font-medium bg-sea rounded hover:bg-purple transition-all">
                  <Link className="block px-6 py-4" href="#get-started">
                    Schedule an introduction
                  </Link>
                </button>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
