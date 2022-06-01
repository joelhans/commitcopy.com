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
              <h1 className="text-purple text-4xl xl:text-5xl !leading-tight font-medium mb-4 dark:text-gray-100">
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
      <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="lg:w-2/3 text-sea dark:text-white text-3xl lg:text-4xl font-medium mb-8 ml-auto text-right">
            Generating commitment with amazing tech brands&mdash;from enterprise SaaS to open source
            to fully DAO'd
          </h2>
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
            <ClientLogo
              className="col-start-3"
              src="cncf.svg"
              name="CNCF"
              width="240"
              height="40"
            />
            <ClientLogo src="radicle.svg" name="Radicle" width="235" height="36" />
            <ClientLogo src="ibm.svg" name="IBM" width="100" height="40" />
            <ClientLogo
              className="col-start-1"
              src="redhat.svg"
              name="Red Hat"
              width="106"
              height="30"
            />
            <ClientLogo src="autodesk.svg" name="Autodesk" width="193" height="25" />
            <ClientLogo
              src="johnson-johnson.svg"
              name="Johnson &amp; Johnson"
              width="198"
              height="36"
            />
            <ClientLogo src="opentext.svg" name="OpenText" width="137" height="28" />
            <ClientLogo
              className="col-start-3"
              src="sumo-logic.svg"
              name="Sumo Logic"
              width="161"
              height="30"
            />
            <ClientLogo src="raygun.svg" name="Raygun" width="140" height="40" />
            <ClientLogo src="netdata.svg" name="Netdata" width="164" height="32" />
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
          <div className="carousel carousel-center w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Testimonial name="Jeff Martens" title="CEO, Metrist" img="jeff-martens.jpg">
                As a software company building products for software developers, it is critical that
                we work with people that have a high aptitude for deeply technical topics, and that
                is exactly what we got from Joel. He didn't just produce the work we asked him to
                collaborate with us on, he got us to a better product by first laying the
                foundations of our messaging and then applied that foundation to the rest of our
                work together.
              </Testimonial>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Testimonial name="Naor Chazan" title="CMO, Myndshft" img="naor-chazan.jpg">
                Joel helped bring new life into a drawn-out brand positioning project, helping guide
                us towards a very strong brand story that was right under our nose the entire time.{' '}
                <br />
                <br />
                Joel took time to listen, really research and drill down into our materials, then
                and only then did he put pen to paper (so to speak). And Joel is a great partner,
                easily receptive to feedback and willing to work together to achieve the best
                output.
              </Testimonial>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Testimonial name="Megan Duong" title="CEO, Sweater Story" img="megan-duong.png">
                Joel took our content strategy into beautiful language! He was attentive, prompt and
                genuinely cared about delivering high-quality work for our clients. If you need
                someone both creatively strategic and executional to do good work, you're silly to
                be on the fence!
              </Testimonial>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
