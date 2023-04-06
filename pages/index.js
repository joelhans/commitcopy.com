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
                Inspire the developers and engineering leaders of cloud native to{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-2 py-0.5 rounded-lg">
                  commit
                </span>{' '}
                with content.
              </h1>
              <h2 className="text-orange text-lg lg:!text-2xl font-medium leading-relaxed mt-8">
                Developers, platform engineers, GitOps{' '}
                <span className="font-mono font-bold text-purple dark:text-white">??</span> DevOps
                practitioners, and the engineering leaders who manage them are exhausted by the
                pothole-ridden path of choosing the right tools for their stack. Great content makes
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
            <Eight className="prose lg:prose-lg dark:prose-dark mt-0">
              <p>
                Marketing to the cloud native ecosystem isn't the same as other developer marketing.
                This community opts for sharing information over hard marketing sells, which means
                your content needs to provide real-world value every time. When you prioritize
                solving the day-to-day problems these folks face in their stacks, and educate them
                on novel opportunities in culture or process, you start building the trust and
                authority required to inspire that first commitment.
              </p>
              <p>
                With more than ten years of experience in open source and cloud native technology,
                plus a portfolio of successful content and copywriting projects for specialized
                audiences of brands like the <strong>Cloud Native Computing Foundation</strong>,{' '}
                <strong>IBM</strong>, <strong>Red Hat</strong>, and beyond, I can reach technical
                folks with purchasing power and steer them toward your paved road.
              </p>
              <div className="mt-8">
                <Link href="mailto:joel@commitcopy.com">
                  <button className="text-purple text-lg font-medium px-4 py-3 bg-white border dark:border-gray-900 shadow-sm rounded transition-all hover:bg-purple hover:text-white dark:text-white dark:bg-purple dark:hover:bg-orange">
                    Email me
                  </button>
                </Link>
                <span className="mx-4">or</span>
                <Link href="https://app.hellobonsai.com/s/commit-copy/introduction">
                  <button className="text-sea text-lg font-medium px-4 py-3 bg-white border dark:border-gray-900 shadow-sm rounded transition-all hover:bg-sea hover:text-white dark:text-white dark:bg-sea dark:hover:bg-purple">
                    Schedule an introduction
                  </button>
                </Link>
              </div>
            </Eight>
          </Grid>
        </Container>
      </header>
      <section id="what-i-do" className="relative z-10 py-24 bg-gray-50 dark:bg-gray-800">
        <Container className="relative">
          <Grid className="mb-24">
            <Ten className="prose prose-lg dark:prose-dark">
              <h2 className="!text-purple !text-3xl !lg:text-5xl !leading-tight font-medium dark:!text-gray-100">
                Content I use to inspire commitment
              </h2>
              <p>
                Designed for cloud native, open source, and niche technological audiences at the
                merge of{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 px-2 py-0.5 rounded-lg">
                  technical
                </span>
                ,{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 mr-1 px-2 py-0.5 rounded-lg">
                  opinionated
                </span>
                , and{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 mr-1 px-2 py-0.5 rounded-lg">
                  story-driven
                </span>
                .
              </p>
            </Ten>
          </Grid>
          <Grid className="mb-16">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-2xl lg:!text-3xl !font-medium">Editorial</h3>
              <p>
                Go beyond &ldquo;thought leadership&rdquo; and truly stand out from the crowd with
                content driven by your team's strongest opinions about your industry. Through
                original research and interviews, I create authoritative content that simplifies
                complex processes or mental models, then leverage storytelling to help them put
                leading ideas into action today.
              </p>
              <p>
                It's your surest path to building trust, inspiring commitment, and delivering the
                business results you need through content.
              </p>
              <div className="prose dark:prose-dark bg-gray-100 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">Testkube</h4>
                <p>
                  When the product managers at Testkube wanted to spark controversy and establish a
                  new paradigm in CI/CD pipelines, they tapped me to write{' '}
                  <Link href="https://thenewstack.io/are-monolith-ci-cd-pipelines-killing-quality-in-your-software/">
                    Are Monolith CI/CD Pipelines Killing Quality in Your Software?
                  </Link>
                  . With an evidence-based breakdown of why the status quo isn't working, this
                  article has generated tens of thousands of pageviews and a surge of signups for
                  their Kubernetes-native testing platform.
                </p>
              </div>
            </Eight>
          </Grid>
          <Grid className="mb-16">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-2xl lg:!text-3xl !font-medium">Technical</h3>
              <p>
                Your fastest path to winning over managers and leaders with purchasing power is by
                helping them solve a problem, right now, in as few steps as possible. I can dive
                into your product and code to develop compelling how-to/tutorial content that
                spotlights your key value propositions without it <em>feeling</em> like marketing at
                all.
              </p>
              <p>
                Once readers understand and trust in the value you create through content, they
                become hot prospects and product champions.
              </p>
              <div className="prose dark:prose-dark bg-gray-100 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">Tracetest</h4>
                <p>
                  To help DevRel leaders at Tracetest better position their cloud native testing
                  product as a paradigm-shifter, I wrote{' '}
                  <Link href="https://tracetest.io/blog/the-difference-between-tdd-and-odd">
                    <em>The difference between test-driven & observability-driven development</em>
                  </Link>
                  . I married thought leadership on testing culture with technical details on
                  distributed tracing to showcase the product's value proposition, then validated
                  every claim with real-world code samples and in-product processes for back-end
                  developers to follow.
                </p>
              </div>
            </Eight>
          </Grid>
          <Grid className="mb-16">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-2xl lg:!text-3xl !font-medium">Search optimized</h3>
              <p>
                Instead of optimizing content around keywords, which results in content that's light
                on value and feels like something your audience has read before, let's prioritize
                solving genuine problems.
              </p>
              <p>
                By leading with solutions, then bracing your content with your target keywords, I
                help you capture new audiences while establishing your brand as authentic and worthy
                of their commitment.
              </p>
              <div className="prose dark:prose-dark bg-gray-100 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">GraphGrid</h4>
                <p>
                  In{' '}
                  <Link href="https://www.graphgrid.com/blog/graph-thinking-a-simple-explainer-for-connected-data/">
                    <em>Graph Thinking: A Simple Explainer for Connected Data</em>
                  </Link>
                  , I targeted a high-opportunity keyword to capture searches from developers and
                  engineers eager to grasp a new paradigm. I did comprehensive research on the
                  origins of graph thinking and interviewed multiple GraphGrid experts to synthesize
                  a complex idea into a relatable metaphor, all backed by real-world technical
                  context. This article is now <em>the</em> cornerstone of GraphGrid's ongoing
                  content strategy.
                </p>
              </div>
            </Eight>
          </Grid>
          {/* <Grid>
            <Eight className="prose prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-xl lg:!text-3xl !font-medium">Documentation</h3>
              <p>
                Documentation is the underrated marketing asset with unprecedented potential,
                especially in open source and cloud native.
              </p>
              <p>
                By establishing and maintaining a source of truth for your product, you project your
                brand's willingness to provide continuous support, education, and inspiration for
                your customers on their journey from visitor to product champion.
              </p>
              <div className="prose bg-gray-100 p-8">
                <h4 className="!text-purple !mt-0">Example</h4>


                <p>This is some example copy.</p>
                <WorkLink url="https://docs.radicle.community" title="RadicleDAO Documentation" />
              </div>
            </Eight>
          </Grid> */}
        </Container>
      </section>
      <section className="py-24 dark:bg-gray-900">
        <Container>
          <Grid className="!items-start">
            <Six>
              <Testimonial name="Jeff Martens" title="CEO, Metrist" img="jeff-martens-2.jpg">
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
              </Testimonial>
            </Six>
            <Six className="mt-16">
              <Testimonial
                name="Jennifer Briston"
                title="Marketing Manager, Netdata"
                img="jennifer-briston.jpg"
              >
                Joel did an amazing job with collaborating on creating the Netdata website. He has a
                unique skillset of understanding technical products with the ability to translate
                the value to a wide range of audiences. I'd gladly work with Joel again&mdash;he
                goes out of his way to provide his team support and the materials needed to execute
                projects.
                <br />
                <br />
                It was a pleasure working with Joel! Super professional, friendly, and overall
                delightful to work with. He is really knowledgeable in the tech space with the
                skills of a great writer, a rare gem.
                <br />
                <br />
                Joel will go above and beyond your expectations!
              </Testimonial>
            </Six>
          </Grid>
        </Container>
      </section>
      <section id="get-started" className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid className="mb-16">
            <Twelve className="prose prose-lg dark:prose-dark">
              <h2 className="!text-purple !text-3xl !lg:text-5xl !leading-tight font-medium dark:!text-gray-100">
                Ready to inspire that first{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-2 py-0.5 rounded-lg">
                  commit
                </span>{' '}
                from developers and engineering leaders in cloud native?
              </h2>
            </Twelve>
          </Grid>
          <Grid>
            <Twelve>
              <div className="">
                <Link className="block lg:inline-block mb-4" href="mailto:joel@commitcopy.com">
                  <button className="text-purple text-xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-800 shadow-sm rounded transition-all hover:bg-purple hover:text-white dark:text-white dark:bg-purple dark:hover:bg-orange">
                    Email me
                  </button>
                </Link>
                <span className="hidden lg:inline-block mx-4">or</span>
                <Link
                  className="block lg:inline-block mb-4"
                  href="https://app.hellobonsai.com/s/commit-copy/introduction"
                >
                  <button className="text-sea text-xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-800 shadow-sm rounded transition-all hover:bg-sea hover:text-white dark:text-white dark:bg-sea dark:hover:bg-purple">
                    Schedule an introduction
                  </button>
                </Link>
                <span className="hidden lg:inline-block mx-4">or</span>
                <Link
                  className="block lg:inline-block"
                  href="https://www.linkedin.com/in/joel-hans/"
                >
                  <button className="text-orange text-xl font-medium px-4 py-3 lg:px-6 lg:py-4 bg-white border dark:border-gray-800 shadow-sm rounded transition-all hover:bg-orange hover:text-white dark:text-white dark:bg-orange dark:hover:bg-purple">
                    Connect on LinkedIn
                  </button>
                </Link>
              </div>
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
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
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
      {/* <section className="py-24 bg-gray-100 dark:bg-gray-700">
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
      </section> */}
    </>
  )
}
