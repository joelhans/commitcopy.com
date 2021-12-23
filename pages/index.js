import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import { getFrontMatter } from '@/lib/mdx'
import Container from '@components/Container'
import { Grid, Ten, Eight, Six, Four, Two } from '@components/Grid'
import Testimonial from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'
import { ARTICLES_CONTENT_PATH } from '@config/constants'

export async function getStaticProps() {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, true)
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="bg-green-100 w-full"></div>

      <header id="hero" className="mx-auto pt-24 lg:pt-36">
        <Container>
          <h1 className="text-purple text-4xl lg:text-5xl !leading-snug font-medium mb-8 dark:text-gray-100">
            Turn{' '}
            <code className="text-4xl lg:text-5xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              git clone
            </code>{' '}
            into spirited commitments from your customers, developers, and contributors
          </h1>
          <p className="max-w-screen text-gray-900 dark:text-gray-200 text-lg lg:text-xl font-medium leading-relaxed mx-auto">
            With the <span className="text-sea">open-source copywriter</span> for companies building
            future-enriching products with transparency
          </p>
        </Container>
      </header>
      <section className="mt-32 lg:mt-36 py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <Container className="relative">
          <Grid>
            <Eight>
              <h2 className="col-span-12 text-orange text-4xl lg:text-5xl font-medium !leading-tight mb-6">
                Marketing an open-source company is unlike any other
              </h2>
              <div className="col-span-12 lg:col-span-8 prose prose-lg dark:prose-dark">
                <p className="text-purple dark:text-white text-lg lg:text-xl font-medium">
                  It's way more complex than converting anyone or 10x-ing anything.
                </p>
                <p>
                  You're running a company using an innovative, complex business model that relies
                  on both paying customers <em>and</em> a group of free-loving developers and
                  engineers who will either spend their time contributing to your project for free
                  or figuring out how to fork you.
                </p>
                <p>
                  They need to know that you're in open source for the right reasons. That you care
                  about the developer experience and know how to prioritize each community's needs.
                  That you aren't going to change up your licensing in a way that affects their
                  operations. They want you to be transparent.
                </p>
                <p className="text-sea text-lg lg:text-xl font-medium">
                  Paid or free, the tech world is full of people who want to commit their time and
                  money to companies that operate transparently. But these are developers and
                  engineers we're talking about&mdash;the standard marketing operating procedure
                  doesn't work.
                </p>
              </div>
            </Eight>
            <div className="hidden lg:block lg:col-span-4">
              <Image
                className="opacity-50"
                src="/static/images/index-globe.svg"
                height={512}
                width={512}
              />
            </div>
          </Grid>
        </Container>
      </section>
      <section className="relative bg-purple bg-opacity-5 py-16">
        <Container>
          <Grid>
            <div className="hidden lg:block lg:col-span-4">
              <Image
                className="opacity-40"
                src="/static/images/index-dots.svg"
                height={512}
                width={512}
              />
            </div>
            <Eight className="lg:!col-end-13 prose prose-lg dark:prose-dark">
              <p className="text-sea text-3xl lg:text-4xl font-medium !leading-tight !mb-0">
                Are you talking about your open-source story in a way that{' '}
                <span className="text-orange">inspires commitment</span> from your customers,
                developers, and contributors?
              </p>
              <p>
                Open-source copywriting is about more than unique value propositions and target
                personas.
              </p>
              <p>
                And no, I don't mean I'm all about{' '}
                <span className="text-orange font-bold italic">
                  hockey-stick GitHub star growth
                </span>
                .
              </p>
              <p>
                You need transparent messaging around your business model, whether that's open-core
                or service-based. Powerful wayfinding devices to help your community and
                contributors self-organize around your brand. Clear educational pathways for your
                developer audience. A clear vision that makes many disparate, decentralized groups
                line up to commit their time, money, and expertise.
              </p>
              <button className="!text-white text-xl font-medium rounded bg-purple hover:bg-orange transition-all">
                <Link className="block !text-white px-6 py-4" href="/services/">
                  Ready to{' '}
                  <code className="!text-lg !text-orange font-bold bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    fetch
                  </code>{' '}
                  some more details?
                </Link>
              </button>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section id="portfolio" className="py-16">
        <Container>
          <h2 className="lg:w-3/4 text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-8 ml-auto text-right">
            Whether open-source at their core or on the periphery, I've worked with some amazing
            tech, SaaS, and B2B companies, including:
          </h2>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
            <ClientLogo src="ibm.svg" name="IBM" width="100" height="40" />
            <ClientLogo src="redhat.svg" name="Red Hat" width="106" height="30" />
            <ClientLogo
              src="johnson-johnson.svg"
              name="Johnson &amp; Johnson"
              width="198"
              height="36"
            />
            <ClientLogo src="autodesk.svg" name="Autodesk" width="193" height="25" />
            <ClientLogo src="netdata.svg" name="Netdata" width="164" height="32" />
            <ClientLogo src="ssd-nodes.svg" name="SSD Nodes" width="173" height="20" />
            <ClientLogo src="img-srvr.png" name="IMG SRVR" width="82" height="42" />
            <ClientLogo src="athens-research.png" name="Athens Research" width="128" height="31" />
            <ClientLogo
              className="lg:col-start-2"
              src="opentext.svg"
              name="OpenText"
              width="137"
              height="28"
            />
            <ClientLogo
              className="lg:col-start-3"
              src="sumo-logic.svg"
              name="Sumo Logic"
              width="161"
              height="30"
            />
          </div>
          <div className="text-center mt-8">
            <button className="text-white text-xl font-medium px-6 py-4 rounded bg-sea hover:bg-orange transition-all">
              <Link href="/work">See my work</Link>
            </button>
          </div>
        </Container>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <Container>
          <Testimonial
            name="Matt Connor"
            title="CEO, Strasmore &amp; SSD Nodes"
            img="matt-connor.jpg"
          >
            Joel was our first marketing hire and has been a key member of our marketing team since
            2016. Joel is deeply and uniquely talented in voice, branding, and copywriting. I
            strongly recommend taking the opportunity to work with him.
          </Testimonial>
        </Container>
      </section>
      <section className="py-16 bg-sea dark:bg-opacity-20">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-white dark:text-orange text-4xl lg:text-5xl font-medium !leading-tight mb-6">
                Ready to discover &amp; shout your open-source story?
              </h2>
              <p className="text-purple dark:text-white text-xl leading-normal mb-6">
                My uncanny combination of technical skills, storytelling-based copywriting
                techniques, and experience in open source is the contribution you've been after to
                get more customers, developers, and contributors to commit to the amazing things
                you're building in the open.
              </p>
              <button className="text-white text-2xl font-medium rounded bg-purple hover:bg-orange transition-all">
                <Link className="block !text-white px-6 py-4" href="/get-started/">
                  Start a project
                </Link>
              </button>
            </Eight>
            <Four>
              <Image
                className="opacity-40"
                src="/static/images/index-cta.svg"
                height={512}
                width={512}
              />
            </Four>
          </Grid>
        </Container>
      </section>
      {/* Recent articles section—save this for later. */}
      {/* <div className="mb-24">
        <h2 className="text-lg text-sea font-bold uppercase mb-8">Recent articles</h2>
        <ul className="grid grid-cols-3 gap-8">
          {posts.slice(0, 3).map((frontMatter) => {
            const { slug, draft, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="block mb-16">
                <CustomLink href={`/articles/${slug}`}>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 hover:text-sea transition-all">
                    {title}
                  </h3>
                </CustomLink>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <p className="prose prose-md dark:prose-dark text-gray-500 dark:text-gray-400 mb-1">
                  {summary}
                </p>
                <CustomLink
                  href={`/articles/${slug}`}
                  className="text-sm font-bold hover:text-sea transition-all"
                >
                  Read more &rarr;
                </CustomLink>
              </li>
            )
          })}
        </ul>
      </div> */}
    </>
  )
}
