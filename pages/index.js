import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import Container from '@components/Container'
import { Grid, Ten, Eight, Six, Four, Two } from '@components/Grid'
import Testimonial from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'

export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="z-30 absolute top-0 w-full h-32 bg-gray-50 dark:bg-gray-900"></div>

      <header
        id="hero"
        className="relative z-0 mx-auto pt-24 lg:pt-36 pb-16 lg:pb-36 bg-white lg:bg-gray-50 dark:bg-gray-900"
      >
        <Container>
          <Grid>
            <Six className="relative z-20 p-12 -mx-12 bg-white dark:bg-gray-800 rounded-lg">
              <h1 className="text-purple text-4xl xl:text-5xl font-semibold !leading-tight font-medium mb-4 dark:text-gray-100">
                Copywriting for tech companies in need of{' '}
                <span className="!text-sea">commitment</span>
              </h1>
              <p className="text-gray-900 dark:text-gray-200 lg:text-lg leading-relaxed italic mb-6">
                Product-led storytelling for B2B, B2D, and SaaS brands
              </p>
              <button className="!text-white text-xl font-medium rounded bg-purple hover:bg-orange transition-all">
                <Link className="block !text-white px-6 py-4" href="/get-started/">
                  Schedule a call
                </Link>
              </button>
            </Six>
            <div className="col-span-12 lg:absolute lg:-top-12 xl:-top-20 lg:right-12 h-auto lg:w-8/12">
              <Image
                className="z-0 rounded-lg"
                src="/static/images/index_hero-2.jpg"
                alt="Commit Copy: Product-led storytelling for B2B, B2D, and SaaS brands"
                height={800}
                width={1200}
              />
            </div>
          </Grid>
        </Container>
      </header>
      <section className="relative z-10 py-16 dark:bg-gray-800 overflow-hidden">
        <Container className="relative">
          <Grid>
            <Eight>
              <h2 className="col-span-12 text-orange text-3xl lg:text-4xl font-medium !leading-tight mb-6">
                Your standard-issue tech copy &amp; content generates all the wrong attention
              </h2>
              <div className="col-span-12 lg:col-span-8 prose prose-lg dark:prose-dark">
                <p>
                  As a founder or marketer trying to pitch a complex and oftentimes expensive tech
                  product, you might <em>think</em> your goal is to drive visits, clicks,
                  stickiness, qualified leads, and conversions.
                </p>
                <p>
                  You're not wrong. But you also know it's more complicated than flipping a switch.
                </p>
                <p className="text-sea font-bold">
                  You need people to see what your product helps them become. You need them to
                  commit to that future.
                </p>
                <p>A future where they:</p>
                <ul>
                  <li>
                    <span className="text-orange font-medium">Take a big leap</span> into a product
                    demo
                  </li>
                  <li>
                    <span className="text-orange font-medium">Upgrade to your enterprise plan</span>{' '}
                    and onboarding their whole team
                  </li>
                  <li>
                    <span className="text-orange font-medium">Champion your product</span> among
                    their communities
                  </li>
                </ul>
                <p>
                  Commitment&mdash;not conversions&mdash;is what truly drives your tech brand
                  forward.
                </p>
              </div>
            </Eight>
            <div className="hidden lg:block lg:col-span-4">
              <Image
                className="opacity-50"
                src="/static/images/index-globe.svg"
                alt="Your standard-issue tech copy &amp; content generates all the wrong attention"
                height={512}
                width={512}
              />
            </div>
          </Grid>
        </Container>
      </section>
      {/* <section className="relative bg-gray-50 py-16">
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
              <p className="text-purple text-3xl lg:text-4xl font-medium !leading-tight !mb-0">
                You need to dream up some big ideas and commit to a path
              </p>
              <p>Struggling with your brand voice?</p>
              <p>
                Maybe you're looking for a consistent voice that resonates with your various (and sometimes incompatible!) audiences of developers, engineers, or tech leadership.
              </p>
              <p>
                Too buried in the weeds of features and capabilities to tal
              </p>
              <p>
                I work with you 
              </p>
              <ul>
                <li><span className="text-orange font-medium">Educational and inspiring</span> TK</li>
                <li><span className="text-orange font-medium">Product-led</span> TK</li>
                <li><span className="text-orange font-medium">TK</span> TK</li>
              </ul>
              <p>So that you can scale up your marketing—and get those elusive visits, clicks, and conversions your KPI dashboard demands—with the confidence that you're treating people like people.</p>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section>
        <Container>
          <Grid>
            <Eight className="!col-start-3 prose prose-lg dark:prose-dark">
              <p className="text-purple text-3xl lg:text-4xl font-medium !leading-tight text-center !mb-0">
                I'm here to help with commitment-generating copy
              </p>
              <p>A</p>
              <p>
                Maybe you're looking for a consistent voice that resonates with your various (and sometimes incompatible!) audiences of developers, engineers, or tech leadership.
              </p>
              <p>
                I work with you 
              </p>
              <ul>
                <li><span className="text-orange font-medium">Educational and inspiring</span> TK</li>
                <li><span className="text-orange font-medium">Product-led</span> TK</li>
                <li><span className="text-orange font-medium">TK</span> TK</li>
              </ul>
              <p>So that you can scale up your marketing—and get those elusive visits, clicks, and conversions your KPI dashboard demands—with the confidence that you're treating people like people.</p>
            </Eight>
          </Grid>
        </Container>
      </section> */}
      <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="lg:w-2/3 text-sea dark:text-white text-3xl lg:text-4xl font-medium mb-8 ml-auto text-right">
            Generating commitment with amazing B2B, B2D, and SaaS tech brands
          </h2>
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
            <ClientLogo src="ibm.svg" name="IBM" width="100" height="40" />
            <ClientLogo src="redhat.svg" name="Red Hat" width="106" height="30" />
            <ClientLogo
              src="johnson-johnson.svg"
              name="Johnson &amp; Johnson"
              width="198"
              height="36"
            />
            <ClientLogo src="autodesk.svg" name="Autodesk" width="193" height="25" />
            <ClientLogo
              className="col-start-3"
              src="opentext.svg"
              name="OpenText"
              width="137"
              height="28"
            />
            <ClientLogo
              className=""
              src="sumo-logic.svg"
              name="Sumo Logic"
              width="161"
              height="30"
            />
            <ClientLogo src="raygun.svg" name="Raygun" width="140" height="40" />
            <ClientLogo
              className="col-start-1"
              src="netdata.svg"
              name="Netdata"
              width="164"
              height="32"
            />
            <ClientLogo src="ssd-nodes.svg" name="SSD Nodes" width="173" height="20" />
            <ClientLogo src="img-srvr.png" name="IMG SRVR" width="82" height="42" />
            <ClientLogo src="athens-research.png" name="Athens Research" width="128" height="31" />
          </div>
          <div className="text-center mt-8">
            <button className="text-white text-xl font-medium px-6 py-4 rounded bg-sea hover:bg-orange transition-all">
              <Link href="/work">See my work</Link>
            </button>
          </div>
        </Container>
      </section>
      <section className="bg-white dark:bg-gray-800 py-16">
        <Container>
          <Testimonial name="Megan Duong" title="CEO, Sweater Story" img="megan-duong.png">
            Joel took our content strategy into beautiful language! He was attentive, prompt and
            genuinely cared about delivering high-quality work for our clients. If you need someone
            both creatively strategic and executional to do good work, you're silly to be on the
            fence!
          </Testimonial>
        </Container>
      </section>
      {/* <section className="py-16 bg-sea dark:bg-opacity-20">
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
      </section> */}
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
