import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import { getFrontMatter } from '@/lib/mdx'
import Container from '@components/Container'
import { Grid, Eight, Six } from '@components/Grid'
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
                <p className="text-purple text-lg lg:text-xl font-medium">
                  It's way more complex than converting anyone or 10x-ing anything.
                </p>
                <p>
                  You're running a company using an innovative, complex business model that relies
                  on both paying customers <em>and</em> a group of free-loving developers and
                  engineers who will either spend their time contributing to your project for free
                  or figuring out how to fork you.
                </p>
                <p className="text-sea text-lg lg:text-xl font-medium">
                  Paid or free, the tech world is full of people who want to commit their time and
                  money to companies that operate transparently.
                </p>
                <p className="">
                  But they need to know that you're in open-source for the right reasons. They want
                  to know how you'll prioritize everyone's needs. They want assurances you're not
                  going to change up your licensing in a way that affects their operations. They
                  want you to actually be transparent.
                </p>
              </div>
            </Eight>
            <div className="col-span-4">
              <Image src="/static/images/index-globe.svg" height={512} width={512} />
            </div>
          </Grid>
        </Container>
      </section>
      <section className="relative py-16">
        <Container>
          <div className="grid grid-cols-12 gap-8 items-center justify-items-center">
            <div className="col-start-3 col-end-10 text-center">
              <p className="text-sea text-3xl lg:text-4xl font-medium !leading-tight !mb-0">
                Are you talking about your open-source story in a way that{' '}
                <span className="text-orange">inspires commitment</span> from your customers,
                developers, and contributors?
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative bg-purple bg-opacity-5 py-16">
        <Container>
          <Grid>
            <Eight className="!col-start-4">
              <p className="text-3xl lg:text-4xl font-bold mb-4">No?</p>
              <p className="text-2xl font-medium italic">
                I get it. Open-source messaging is complex. It's make-or-break. It's everything for
                your business.
              </p>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section id="portfolio" className="py-16">
        <Container>
          <h2 className="lg:w-3/4 text-purple dark:text-white text-3xl lg:text-4xl font-medium text-center mb-8 ml-auto text-right">
            Whether open-source at their core or on the periphery, I've worked with some amazing
            tech, SaaS, and B2B companies, including:
          </h2>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 justify-around py-8 dark:rounded dark:bg-gray-700">
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
      <section className="bg-gray-50 py-16">
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
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
              <h2 className="text-purple dark:text-orange text-4xl lg:text-5xl font-medium !leading-tight mb-6">
                Ready to discover &amp; shout your open-source story?
              </h2>
              <p className="text-purple dark:text-white text-xl leading-normal mb-6">
                My uncanny combination of technical skills, storytelling-based copywriting
                techniques, and experience in open source is the contribution you've been after to
                get more customers, developers, and contributors to commit to the amazing things
                you're building in the open.
              </p>
              <button className="text-white text-2xl font-medium px-6 py-4 rounded bg-purple hover:bg-orange transition-all">
                <Link href="/get-started/">Start a project</Link>
              </button>
            </div>
          </div>
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
