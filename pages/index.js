import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'
import { Testimonial, TestimonialHoriz } from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'

export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="z-30 absolute top-0 w-full h-32 dark:bg-gray-900"></div>
      <header
        id="hero"
        className="relative z-0 overflow-hidden mx-auto pt-24 lg:pt-36 pb-16 lg:pb-24 bg-white dark:bg-gray-900"
      >
        <Container>
          <Grid>
            <Six>
              <h1 className="text-purple text-3xl lg:text-[2.8rem] font-bold leading-tight lg:leading-tight dark:text-gray-100">
                Inspire the developers and engineering leaders of open source and cloud native to{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-2 py-0.5 rounded-lg">
                  commit
                </span>
                .
              </h1>
              <h2 className="text-orange text-lg lg:!text-2xl font-medium leading-relaxed mt-8">
                Developers, platform engineers, GitOps{' '}
                <span className="font-mono font-bold text-purple dark:text-white">??</span> DevOps
                practitioners, and the engineering leaders who manage them are exhausted by the
                pothole-ridden path of choosing the right tools for their stack. Great writing makes
                your brand shine as the{' '}
                <span className="text-purple dark:text-white">paved road experience</span> they've
                been looking for all along.
              </h2>
            </Six>
            <Six className="hidden lg:flex h-full flex flex-col">
              <div className="mt-3">
                <Image
                  className="z-0 rounded"
                  src="/static/images/hero.jpg"
                  alt="Joel Hans @ Commit Copy: Inspire developers and engineering leaders to commit with content."
                  height={1200}
                  width={1200}
                />
              </div>
            </Six>
          </Grid>
          <Grid className="mt-12">
            <Ten className="prose lg:prose-lg dark:prose-dark mt-0">
              <p>
                Marketing to the open source and cloud native communities isn't the same as other
                developer marketing. These folks opt for sharing information over hard marketing
                sells, which means your copywriting and content need to provide real-world value
                every time. When you prioritize solving the day-to-day problems these folks face in
                their stacks, and educate them on novel opportunities in culture or process, you
                start building the trust and authority required to inspire that first commitment.
              </p>
              <p>
                With more than ten years of experience in open source and cloud native technology,
                plus a portfolio of successful content and copywriting projects for specialized
                audiences of brands like the <strong>Cloud Native Computing Foundation</strong>,{' '}
                <strong>IBM</strong>, <strong>Red Hat</strong>, and beyond, I can reach technical
                folks with purchasing power and steer them toward the paved road of your product.
              </p>
              <p>
                I work across messaging/copywriting <strong>and</strong> content&mdash;let's find
                the perfect path for inspiring the commitment you need.
              </p>
              <div className="mt-8">
                <Link href="/copy">
                  <button className="block md:inline-block text-purple text-xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-900 shadow-sm rounded transition-all hover:bg-purple hover:text-white dark:text-white dark:bg-purple dark:hover:bg-orange">
                    Messaging/copywriting
                  </button>
                </Link>
                <span className="inline-block text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 my-4 md:my-0 mx-4 px-2 py-0.5 rounded-lg">
                  ??
                </span>
                <Link href="/content">
                  <button className="block md:inline-block text-sea text-xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-900 shadow-sm rounded transition-all hover:bg-sea hover:text-white dark:text-white dark:bg-sea dark:hover:bg-purple">
                    Content
                  </button>
                </Link>
              </div>
            </Ten>
          </Grid>
        </Container>
      </header>
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid className="!items-start">
            <Twelve>
              <TestimonialHoriz name="Jeff Martens" title="CEO, Metrist" img="jeff-martens.jpg">
                Joel was an absolute pleasure to work with and I couldn't be happier with the
                results of our engagement. As a software company building products for software
                developers, it is critical that we work with people that have a high aptitude for
                deeply technical topics, and that is exactly what we got from Joel. One of the
                things that I appreciated from our engagement with Joel is that he didn't just
                produce the work we asked him to collaborate with us on, he got us to a better
                product by first laying the foundations of our messaging and then applied that
                foundation to the rest of our work together.
                <br />
                <br />
                He helped us do what we didn't even know we needed to do, and the result was our
                most loved portion of the deliverables. It's not just technical aptitude and a great
                understanding of the process and journey around strategic messaging, Joel was
                incredible with seeking empathy for our target audience, ensuring that our messaging
                would actually resonate with them, not just sound good to us.
                <br />
                <br />
                Spend your time doing what you do best and let Joel save you a ton of time by doing
                what he does best.
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
      <section className="py-24 dark:bg-gray-900">
        <Container>
          <Grid>
            <Six className="lg:!col-start-4">
              <h2 className="text-sea dark:text-white text-xl lg:text-2xl font-medium text-center mb-8">
                Inspiring commitment with open source, cloud native, and technically-rich brands
              </h2>
            </Six>
          </Grid>
          <div className="relative grid grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-4 justify-around p-6 dark:rounded dark:bg-gray-800">
            <ClientLogo className="" src="cncf.svg" name="CNCF" width="240" height="40" />
            <ClientLogo src="radicle.svg" name="Radicle" width="235" height="36" />
            <ClientLogo src="ibm.svg" name="IBM" width="100" height="40" />
            <ClientLogo className="" src="redhat.svg" name="Red Hat" width="106" height="30" />
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
        </Container>
      </section>
      <section id="get-started" className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Ten className="prose prose-lg dark:prose-dark">
              <h2 className="!text-purple !text-2xl !lg:text-5xl !leading-normal font-medium dark:!text-gray-100">
                Ready to inspire that first{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-2 py-0.5 rounded-lg">
                  commit
                </span>{' '}
                from developers and engineering leaders in open source && cloud native?
              </h2>
              <Link className="block lg:inline-block" href="/get-started">
                <button className="text-sea text-xl lg:text-2xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-800 shadow-sm rounded transition-all hover:bg-sea hover:text-white dark:text-white dark:bg-sea dark:hover:bg-purple">
                  Schedule an introduction
                </button>
              </Link>
            </Ten>
          </Grid>
        </Container>
      </section>
      {/* <Grid>
            <Twelve>
              <Link className="block lg:inline-block mb-4" href="mailto:joel@commitcopy.com">
                <button className="text-purple text-xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-800 shadow-sm rounded transition-all hover:bg-purple hover:text-white dark:text-white dark:bg-purple dark:hover:bg-orange">
                  Email me
                </button>
              </Link>
              <span className="hidden lg:inline-block mx-4">or</span>
              
            </Twelve>
            <Twelve>
              <Link
                className="block lg:inline-block font-medium text-purple hover:text-orange transition-all dark:text-white"
                href="http://portfolio.commitcopy.com/"
              >
                View my full portfolio on Authory
              </Link>
              <span className="hidden lg:inline-block mx-4">or</span>
              <Link
                className="block lg:inline-block font-medium text-purple hover:text-orange transition-all dark:text-white"
                href="https://www.linkedin.com/in/joel-hans/"
              >
                Connect on LinkedIn
              </Link>
            </Twelve>
          </Grid> */}
    </>
  )
}
