import Image from 'next/image'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import { getSingleContent, getFrontMatter } from '@/lib/mdx'
import Container from '@components/Container'
import Client from '@components/index/Client'
import { ServiceGo, ServicePrice, ServiceButton } from '@components/index/Service'
import { BASE_CONTENT_PATH, ARTICLES_CONTENT_PATH } from '@config/constants'

export async function getStaticProps() {
  const IndexServiceOne = await getSingleContent(BASE_CONTENT_PATH, 'index-service-one-day')
  const IndexServiceSourceCopy = await getSingleContent(
    BASE_CONTENT_PATH,
    'index-service-source-copy'
  )
  const IndexAbout = await getSingleContent(BASE_CONTENT_PATH, 'index-about')
  const IndexAboutCreative = await getSingleContent(BASE_CONTENT_PATH, 'index-about-creative')
  const IndexAboutTech = await getSingleContent(BASE_CONTENT_PATH, 'index-about-technical')
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, true)
  return {
    props: {
      IndexServiceOne,
      IndexServiceSourceCopy,
      IndexAbout,
      IndexAboutCreative,
      IndexAboutTech,
      posts,
    },
  }
}

export default function Home({
  IndexServiceOne,
  IndexServiceSourceCopy,
  IndexAbout,
  IndexAboutCreative,
  IndexAboutTech,
  posts,
}) {
  const { mdxSource: mdxServiceOne } = IndexServiceOne
  const { mdxSource: mdxServiceSourceCopy } = IndexServiceSourceCopy
  const { mdxSource: mdxAbout } = IndexAbout
  const { mdxSource: mdxAboutCreative } = IndexAboutCreative
  const { mdxSource: mdxAboutTech } = IndexAboutTech

  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="bg-green-100 w-full"></div>

      <header id="hero" className="mx-auto pt-32 lg:pt-48">
        <Container>
          <h1 className="text-purple text-4xl lg:text-5xl leading-snug lg:leading-snug font-black mb-8 dark:text-gray-100">
            Turn{' '}
            <code className="text-4xl lg:text-5xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              git clone
            </code>{' '}
            into committed customers, contributors, and communities
          </h1>
          <p className="max-w-screen text-gray-900 dark:text-gray-200 text-lg lg:text-xl font-medium leading-relaxed mx-auto">
            The open-source copywriter for companies &amp; startups building future-enriching
            products with transparency
          </p>
        </Container>
      </header>
      <section className="mt-32 lg:mt-48 py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <Container className="relative">
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            <h2 className="col-span-4 text-orange text-5xl lg:text-7xl font-medium leading-tight">
              Marketing an open-source business is unlike any other
            </h2>
            <div className="col-span-4 prose prose-lg dark:prose-dark">
              <p className="">
                You can't just focus on converting customers or 10X-ing your MRR. You're running a
                company using an innovative, complex business model that relies on both paying
                customers <em>and</em> a group of free-loving developers and engineers who will
                either spend their time contributing to your project for free or figuring out how to
                fork you.
              </p>
              <p className="">
                But they need to know that you're in open-source for the right reasons. They want to
                know how you'll prioritize everyone's needs. They want assurances you're not going
                to change up your licensing in a way that affects their operations. The want you to
                actually be transparent.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container className="relative">
          <div className="lg:w-3/4 mx-auto text-center">
            <p className="text-sea text-3xl lg:text-4xl leading-tight font-medium">
              Paid or free, the tech world is full of people who want to commit their time and money
              to companies that operate transparently.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 bg-sea bg-opacity-5 dark:bg-gray-800">
        <Container className="relative">
          <div className="lg:w-1/2 prose prose-lg dark:prose-dark mr-auto">
            <p className="">More content goes here</p>
          </div>
        </Container>
      </section>
      <section className="relative py-16">
        <Container>
          <p className="text-sea text-4xl lg:text-6xl font-medium mb-6">
            Are you talking about your open-source story in a way your clients, contributors, and
            communities want to commit to?
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            <div className="col-span-4 lg:col-span-6">
              <p className="text-orange text-3xl lg:text-4xl font-bold mb-4">No?</p>
              <p className="text-orange text-2xl font-medium italic">
                I get it. Open-source messaging is complex. It's make-or-break. It's everything for
                your business.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            <div className="col-span-4 lg:col-span-6 mb-12">
              <h2 className="text-purple dark:text-gray-100 text-4xl lg:text-5xl font-bold mb-8">
                Here's how I help
              </h2>
              <div className="prose prose-lg dark:prose-dark">
                <p>
                  I help open-source companies and startups tell the story behind their source code
                  to get more commitments from the people who matter most.
                </p>
                <p>
                  It's about so more than{' '}
                  <span className="text-orange font-bold italic">
                    hockey-stick GitHub star growth
                  </span>
                  . It's about consistent and transparent messaging that inspires people to latch on
                  to your open-source vision.
                </p>
              </div>
            </div>
          </div>
          <div
            id="one-day-commit"
            className="lg:w-2/3 lg:ml-auto px-8 py-12 bg-orange bg-opacity-10 rounded-lg mb-16"
          >
            <h3 className="text-orange text-4xl font-mono font-bold mb-4">The One-Day Commit</h3>
            <div className="prose dark:prose-dark mb-8">
              <MDXExport code={mdxServiceOne} />
            </div>
            <ServiceGo>
              <ServicePrice>$1,995</ServicePrice>
              <ServiceButton to="/get-started/">Commit to it</ServiceButton>
            </ServiceGo>
          </div>
          <div
            id="source-copy"
            className="lg:w-2/3 px-8 py-12 bg-purple bg-opacity-5 dark:bg-opacity-20 rounded-lg"
          >
            <h3 className="text-orange text-4xl font-mono font-bold mb-4">
              Source Story &amp;&amp; Commit-Ready Copy
            </h3>
            <div className="prose dark:prose-dark mb-8">
              <MDXExport code={mdxServiceSourceCopy} />
            </div>
            <ServiceGo>
              <ServicePrice>$7,495+</ServicePrice>
              <ServiceButton to="/get-started/">
                <code className="text-xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                  init
                </code>{' '}
                a new project
              </ServiceButton>
            </ServiceGo>
          </div>
        </Container>
      </section>
      <section className="mt-16">
        <Container>
          <h2 className="lg:w-3/4 text-purple dark:text-white text-3xl lg:text-4xl font-medium text-center mb-8 ml-auto text-right">
            Whether open-source at their core or on the periphery, I've worked with some amazing
            tech, SaaS, and B2B companies, including:
          </h2>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 justify-around py-8 dark:rounded dark:bg-gray-700">
            <Client src="ibm.svg" name="IBM" width="100" height="40" />
            <Client src="redhat.svg" name="Red Hat" width="106" height="30" />
            <Client
              src="johnson-johnson.svg"
              name="Johnson &amp; Johnson"
              width="198"
              height="36"
            />
            <Client src="autodesk.svg" name="Autodesk" width="193" height="25" />
            <Client src="netdata.svg" name="Netdata" width="164" height="32" />
            <Client src="ssd-nodes.svg" name="SSD Nodes" width="173" height="20" />
            <Client src="img-srvr.png" name="IMG SRVR" width="82" height="42" />
            <Client src="athens-research.png" name="Athens Research" width="128" height="31" />
            <Client
              className="lg:col-start-2"
              src="opentext.svg"
              name="OpenText"
              width="137"
              height="28"
            />
            <Client
              className="lg:col-start-3"
              src="sumo-logic.svg"
              name="Sumo Logic"
              width="161"
              height="30"
            />
          </div>
        </Container>
      </section>
      <section id="portfolio" className="py-16 bg-gray-100 dark:bg-gray-900">
        <Container>
          <h2>Portfolio</h2>
          <p></p>
        </Container>
      </section>
      <section id="about" className="mb-16 py-16 dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-12 gap-8 items-center mt-16">
            <div className="col-span-12 lg:col-span-8 prose prose-lg dark:prose-dark pr-8">
              <h2 className="!text-orange !text-3xl font-mono !font-bold !mb-4">
                Hello{' '}
                <code className="text-3xl lg:text-4xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &amp;&amp;
                </code>{' '}
                welcome!
              </h2>
              <h3 className="!text-sea !text-6xl !font-medium !mb-8">
                Joel here&mdash;the open-source copywriter.
              </h3>
              <MDXExport code={mdxAbout} />
            </div>
            <div className="col-span-6 lg:col-span-4">
              <Image
                className="rounded-lg"
                src="/static/images/joel-large.jpg"
                width={750}
                height={1000}
              />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-8 mt-16">
            <div className="col-span-4 prose prose-lg dark:prose-dark p-8 bg-sea bg-opacity-5 rounded-lg">
              <MDXExport code={mdxAboutCreative} />
            </div>
            <div className="col-span-4 prose prose-lg dark:prose-dark p-8 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded">
              <MDXExport code={mdxAboutTech} />
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
