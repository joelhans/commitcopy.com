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
              <div className="flex items-baseline mr-auto">
                <div className="mr-6 lg:mr-12">
                  <Link href="/" aria-label="Commit">
                    <div className="group text-2xl font-sans leading-none">
                      <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-3 py-1.5 rounded-lg hover:text-sea transition-all">
                        Commit
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center ml-auto md:mr-8">
                <ThemeSwitch />
                <MobileNav />
              </div>
              <div className="hidden md:flex items-center justify-end">
                {headerNavLinks.map((link) => (
                  <div key={link.title} className="group relative py-4 pr-4 md:pr-8 leading-none">
                    <Link
                      href={link.href}
                      className="font-mono text-gray-900 dark:text-gray-200 text-lg leading-none font-bold hover:text-sea dark:hover:text-sea transition-all"
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
                <button className="text-white font-medium bg-sea rounded hover:bg-purple transition-all">
                  <Link className="block px-6 py-4" href="/get-started">
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
