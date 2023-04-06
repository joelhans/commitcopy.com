import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import siteMetadata from '@data/siteMetadata'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'

export default function Footer() {
  return (
    <footer className="font-sans bg-purple dark:bg-gray-900 px-6 lg:px-12 py-16">
      <Container>
        <Grid>
          <Twelve>
            <div className="text-gray-100">
              <p className="text-base mb-4">
                <Link href="/">{siteMetadata.title}</Link>
              </p>
              <div className="block text-xs font-medium">
                <p className="mb-4">
                  Built with Next.js, MDX, Tailwind, and Vercel. View the{' '}
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
                <p className="mb-4">
                  {`© ${new Date().getFullYear()}`} Nurse Media LLC dba Commit Copy
                </p>
                <p className="mb-4">
                  Thanks for stopping by!{' '}
                  <span role="img" aria-label="emoji wave">
                    👋
                  </span>
                </p>
              </div>
            </div>
          </Twelve>
        </Grid>
      </Container>
    </footer>
  )
}
