import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import siteMetadata from '@data/siteMetadata'
import NewsletterForm from '@components/NewsletterForm'

export default function Footer() {
  return (
    <footer className="font-sans bg-purple dark:bg-gray-900 px-6 lg:px-12 py-16">
      <div className="grid grid-cols-12 gap-8 place-items-start max-w-screen-xl mx-auto">
        <div className="col-span-12 lg:col-span-4 text-gray-100">
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
              {/* {link.items && (
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
              )} */}
            </div>
          ))}
          <div className="relative mt-4">
            <Link
              href="/get-started/"
              className="text-gray-100 dark:text-gray-200 text-xl leading-none font-medium hover:text-sea dark:hover:text-sea transition-all"
            >
              Schedule a call
            </Link>
          </div>
        </div>
        <div className="mt-auto col-span-12 lg:col-span-8">
          <div className="text-gray-100 font-medium pt-8 border-t border-orange">
            <p className="text-base mb-8">
              <Link href="/">{siteMetadata.title}</Link>
            </p>
            <div className="block text-xs font-medium">
              <p className="mb-4">
                Thanks for stopping by!{' '}
                <span role="img" aria-label="emoji wave">
                  ????
                </span>
              </p>
              <p className="mb-4">
                Built with Next.js, MDX, Tailwind, Vercel, and Plausible. View the{' '}
                <a
                  className="text-orange hover:text-white transition-all"
                  href="https://github.com/joelhans/commitcopy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  source
                </a>{' '}
                on GitHub.
              </p>
              <p>{`?? ${new Date().getFullYear()}`} Commit Copy / Nurse Media LLC</p>
            </div>
          </div>
        </div>
        {/* <div className="col-span-12 lg:col-span-8 grid grid-cols-6 gap-8 text-sm text-gray-600 dark:text-gray-200 mt-8 lg:mt-0 px-6 lg:px-12 py-8 lg:py-16 bg-gray-100 dark:bg-gray-700 rounded shadow-lg">
          <div className="col-span-6 lg:col-span-3 prose prose-lg">
            <h3 className="!text-orange !text-3xl !lg:text-4xl font-bold mb-2">
              Subscribe to my release notes
            </h3>
            <p className="text-lg lg:text-xl dark:text-gray-100">
              Get weekly tips, quips, and news on copywriting, storytelling, open-source, and the
              source of it all.
            </p>
          </div>
          <NewsletterForm />
        </div> */}
      </div>
    </footer>
  )
}
