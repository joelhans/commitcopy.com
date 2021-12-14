import CustomLink from '@components/Link'
import Container from '@components/Container'

export default function FourZeroFour() {
  return (
    <>
      <Container>
        <header className="flex flex-row flex-wrap md:space-x-6 md:flex-nowrap mt-24">
          <div>
            <h1 className="text-orange text-3xl lg:text-6xl font-medium leading-snug mb-8">404</h1>
          </div>
        </header>
        <div className="flex flex-row flex-nowrap items-start">
          <div className="prose prose-md lg:prose-lg dark:prose-dark mb-24">
            <p>Sorry, this page doesn't exist.</p>
            <p>
              Read about my <CustomLink href="/services">services</CustomLink>, learn a bit more
              {` `}
              <CustomLink href="/#about" className="hover:text-sea">
                about me
              </CustomLink>
              , check out some of my past <CustomLink href="/#work">work</CustomLink>.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
