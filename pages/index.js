import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'
import { TestimonialHoriz } from '@components/Testimonial'
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
        className="relative z-0 overflow-hidden mx-auto pt-24 lg:pt-36 pb-16 lg:pb-24 bg-white lg:bg-gray-50 dark:bg-gray-900"
      >
        <Container>
          <Grid>
            <div className="col-span-12 lg:absolute lg:-top-12 xl:-top-20 lg:-left-64 h-auto lg:w-8/12">
              <Image
                className="z-0 rounded-lg"
                src="/static/images/index_hero-2.jpg"
                alt="Commit Copy: Product-led storytelling for B2B, B2D, and SaaS brands"
                height={1200}
                width={1798}
              />
            </div>
            <Eight className="!col-start-6 relative z-20 p-12 -mx-12 bg-white dark:bg-gray-800 rounded-lg">
              <h1 className="text-purple text-4xl xl:text-5xl !leading-tight font-medium mb-8 dark:text-gray-100">
                Copywriting for tech that demands{' '}
                <span className="text-sea font-bold">commitment</span>
              </h1>
              <h2 className="text-2xl">
                Put clarifying your vision, turning visitors into product champions, and building
                evergreen growth on autopilot with ready-to-launch brand messaging and tech
                copywriting that gets people to{' '}
                <span className="text-sea font-medium italic">care</span> before they{' '}
                <span className="text-orange font-medium italic">click</span>.
              </h2>
            </Eight>
          </Grid>
        </Container>
      </header>
      <section
        id="portfolio"
        className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
        <Container>
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
            <ClientLogo className="" src="cncf.svg" name="CNCF" width="240" height="40" />
            <ClientLogo src="radicle.svg" name="Radicle" width="235" height="36" />
            <ClientLogo src="ibm.svg" name="IBM" width="100" height="40" />
            <ClientLogo className="" src="redhat.svg" name="Red Hat" width="106" height="30" />
          </div>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-purple overflow-hidden">
        <Container className="relative">
          <Grid>
            <Eight>
              <code className="lg:absolute lg:-left-8 lg:top-2 text-sm lg:text-base text-orange font-bold bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                Shh!
              </code>
              <h2 className="col-span-12 text-orange text-3xl lg:text-4xl font-medium !leading-tight mt-6 lg:mt-0 mb-12">
                The secret to tech copywriting isn't clarity or conversion rates&mdash;it's how you
                generate commitment.
              </h2>
              <div className="col-span-12 lg:col-span-8 text-white prose prose-lg dark:prose-dark">
                <p>
                  You've done your research or have spent enough time in the marketing trenches to
                  know exactly what you need your marketing to <em>do</em>.
                </p>
                <p>
                  It's the <em>how</em> that gets tricky.
                </p>
                <p>
                  Your readers are savvy and finicky, and they won't stand for being "converted"
                  (aka being suckered into clicking on a call-to-action button or form). You need
                  them to believe in your product so deeply they're willing do hard work, like write
                  code or edit their production environment, for a chance to try your product.
                </p>
                <p>
                  You'd write this growth-creating, champion-building copy right now if you had
                  confidence it would work, but…
                </p>
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-orange dark:bg-gray-800">
        <Container className="relative">
          <Grid>
            <Eight>
              <h2 className="col-span-12 text-3xl lg:text-4xl font-medium !leading-tight mb-12">
                You don't know how to get others to believe in your product the way you do.
              </h2>
              <div className="col-span-12 lg:col-span-8 prose prose-lg dark:prose-dark">
                <p>
                  Maybe you're searching for a consistent brand message to use on your website,
                  product marketing, Discord servers, and everywhere else you show up online.
                </p>
                <p>
                  Or maybe you've already proven some value propositions that work, but don't know
                  how to turn that into a website that gets readers to commit to becoming users.
                </p>
                <p>
                  Or maybe you're just too busy running your company to spend time on brand and
                  copy, despite knowing how important it is.
                </p>
                <p>
                  You can't stop thinking: Our product is so good we're growing despite not even
                  having nailed down our messaging. What if we had copy that actually delivered?
                </p>
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-gray-100 dark:bg-gray-900">
        <Container className="relative">
          <Grid>
            <Eight className="!col-start-3 text-center">
              <p className="text-orange text-2xl lg:text-3xl font-medium mb-6">
                If you're haunted by that what-if, let's talk.
              </p>
              <p className="text-lg lg:text-xl mb-6">
                I'll write you copy that generates commitment. VCs knocking on your inbox. Product
                champions that sell your product for you. A consistent message that becomes your
                growth flywheel.
              </p>
              <button className="!text-white text-xl font-medium rounded bg-purple hover:bg-orange transition-all">
                <Link className="block !text-white px-6 py-4" href="/get-started/">
                  Schedule a call
                </Link>
              </button>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section className="py-24 dark:bg-gray-800">
        <Container>
          <Grid>
            <Twelve>
              <TestimonialHoriz name="Jeff Martens" title="CEO, Metrist" img="jeff-martens-2.jpg">
                Joel was an absolute pleasure to work with and I couldn't be happier with the
                results of our engagement. As a software company building products for software
                developers, it is critical that we work with people that have a high aptitude for
                deeply technical topics, and that is exactly what we got from Joel.
                <br />
                <br />
                It's not just technical aptitude and a great understanding of the process and
                journey around strategic messaging, Joel was incredible with seeking empathy for our
                target audience, ensuring that our messaging would actually resonate with them, not
                just sound good to us.
                <br />
                <br />
                Spend your time doing what you do best and let Joel save you a ton of time by doing
                what he does best.
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
      <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-sea dark:text-white text-2xl lg:text-3xl font-medium mb-8">
                Generating commitment with amazing tech brands&mdash;from enterprise SaaS to
                developer-focused to open source to fully DAO'd
              </h2>
            </Eight>
          </Grid>
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
            <ClientLogo src="autodesk.svg" name="Autodesk" width="193" height="25" />
            <ClientLogo
              src="johnson-johnson.svg"
              name="Johnson &amp; Johnson"
              width="198"
              height="36"
            />
            <ClientLogo src="urbit.svg" name="Urbit" width="136" height="60" />
            <ClientLogo src="metrist.svg" name="Metrist" width="116" height="32" />
            <ClientLogo src="opentext.svg" name="OpenText" width="137" height="28" />
            <ClientLogo src="sumo-logic.svg" name="Sumo Logic" width="161" height="30" />
            <ClientLogo src="raygun.svg" name="Raygun" width="140" height="40" />
            <ClientLogo src="netdata.svg" name="Netdata" width="164" height="32" />
          </div>
          {/* <div className="text-center mt-8">
            <button className="text-white text-xl font-medium px-6 py-4 rounded bg-sea hover:bg-orange transition-all">
              <Link href="/work">See my work</Link>
            </button>
          </div> */}
        </Container>
      </section>
      <section className="py-24 bg-gray-50 dark:bg-gray-700">
        <Container>
          <Grid>
            <Twelve>
              <TestimonialHoriz name="Naor Chazan" title="CMO, Myndshft" img="naor-chazan.jpg">
                Joel helped bring new life into a drawn-out brand positioning project, helping guide
                us towards a very strong brand story that was right under our nose the entire time.{' '}
                <br />
                <br />
                Joel took time to listen, really research and drill down into our materials, then
                and only then did he put pen to paper (so to speak). And Joel is a great partner,
                easily receptive to feedback and willing to work together to achieve the best
                output.
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
      <section className="py-24 bg-gray-100 dark:bg-gray-800">
        <Container>
          <Grid>
            <Twelve>
              <TestimonialHoriz name="Megan Duong" title="CEO, Sweater Story" img="megan-duong.png">
                Joel took our content strategy into beautiful language! He was attentive, prompt and
                genuinely cared about delivering high-quality work for our clients. If you need
                someone both creatively strategic and executional to do good work, you're silly to
                be on the fence!
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
      {/* 
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
      </section> */}
    </>
  )
}
