import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import siteMetadata from '@data/siteMetadata'
import SocialIcon from '@components/social-icons'

export default function Footer() {
  return (
    <footer className="font-sans bg-purple dark:bg-gray-800 dark:bg-opacity-100 px-6 py-16">
      <div className="grid grid-cols-6 gap-8 max-w-screen-xl mx-auto px-6">
        <div className="col-span-2 text-gray-100">
          <h3 className="text-orange text-xl font-medium mb-4">Navigate</h3>
          <div className="relative mb-2">
            <Link
              href="/"
              className="text-gray-100 dark:text-gray-200 text-base leading-none font-medium hover:text-sea dark:hover:text-sea transition-all"
            >
              Home
            </Link>
          </div>
          {headerNavLinks.map((link) => (
            <div key={link.title} className="relative mb-2">
              <Link
                href={link.href}
                className="text-gray-100 dark:text-gray-200 text-base leading-none font-medium  hover:text-sea dark:hover:text-sea transition-all"
              >
                {link.title}
              </Link>
            </div>
          ))}
          <div className="text-sm text-gray-100 font-medium mt-8 pt-8 border-t border-orange">
            <div>
              {`© ${new Date().getFullYear()}`} <Link href="/">{siteMetadata.title}</Link>
            </div>
            <div className="block text-xs font-medium mt-4">
              <p>
                Thanks for stopping by!{' '}
                <span role="img" aria-label="emoji wave">
                  👋
                </span>
              </p>
              <p className="mt-2">Built with Next.js, MDX, Tailwind, and Vercel.</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 mb-8 text-sm text-gray-500 dark:text-gray-200">
          <h3 className="font-bold mb-2">Subscribe</h3>
        </div>
      </div>
    </footer>
  )
}
