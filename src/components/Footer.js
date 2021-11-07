import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import siteMetadata from '@data/siteMetadata'
import NewsletterForm from '@components/NewsletterForm'

export default function Footer() {
  return (
    <footer className="font-sans bg-purple dark:bg-gray-800 dark:bg-opacity-100 px-6 py-16">
      <div className="grid grid-cols-6 gap-8 place-items-start max-w-screen-xl mx-auto px-6">
        <div className="col-span-2 text-gray-100">
          <h3 className="text-orange text-3xl font-medium mb-6">Navigate</h3>
          <div className="relative mb-4">
            <Link
              href="/"
              className="text-gray-100 dark:text-gray-200 text-xl leading-none font-medium hover:text-sea dark:hover:text-sea transition-all"
            >
              Home
            </Link>
          </div>
          {headerNavLinks.map((link) => (
            <div key={link.title} className="relative mb-4">
              <Link
                href={link.href}
                className="text-gray-100 dark:text-gray-200 text-xl leading-none font-medium hover:text-sea dark:hover:text-sea transition-all"
              >
                {link.title}
              </Link>
              {link.items && (
                <div className="flex flex-col items-start mt-4 pl-4">
                  {link.items.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="text-gray-100 dark:text-gray-900 text-lg leading-none font-medium hover:text-sea dark:hover:text-sea transition-all first:mb-4"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="relative mt-6 mb-4">
            <Link
              href="/get-started/"
              className="text-gray-100 dark:text-gray-200 text-xl leading-none font-medium hover:text-sea dark:hover:text-sea transition-all"
            >
              Start a project
            </Link>
          </div>
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
        <div className="col-span-4 grid grid-cols-6 gap-8 text-sm text-gray-600 dark:text-gray-200 px-12 py-16 bg-gray-100 dark:bg-gray-700 rounded shadow-lg">
          <div className="col-span-3 prose prose-lg">
            <h3 className="!text-orange !text-4xl font-bold mb-2">Subscribe to my release notes</h3>
            <p className="text-xl dark:text-gray-100">
              Get weekly tips, quips, and news on copywriting, storytelling, open-source, and the
              source of it all.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  )
}
