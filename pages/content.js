import React from 'react'
import Image from 'next/image'
import Link from '@components/Link'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Four, Six, Two } from '@components/Grid'
import { ServiceGo, ServicePrice, ServiceButton } from '@components/Service'
import { Testimonial, TestimonialHoriz } from '@components/Testimonial'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')
  const ServiceWebsiteCopy = await getSingleContent(BASE_CONTENT_PATH, 'services/website-copy')
  const ServiceContent = await getSingleContent(BASE_CONTENT_PATH, 'services/content')
  const ServiceSourceStory = await getSingleContent(BASE_CONTENT_PATH, 'services/source-story')
  const ServiceOneDay = await getSingleContent(BASE_CONTENT_PATH, 'services/one-day-commit')

  return {
    props: { content, ServiceWebsiteCopy, ServiceContent, ServiceSourceStory, ServiceOneDay },
  }
}

export default function Content({
  content,
  ServiceWebsiteCopy,
  ServiceContent,
  ServiceSourceStory,
  ServiceOneDay,
}) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxServiceWebsiteCopy } = ServiceWebsiteCopy
  const { mdxSource: mdxServiceSourceStory } = ServiceSourceStory
  const { mdxSource: mdxServiceContent } = ServiceContent
  const { mdxSource: mdxServiceOneDay } = ServiceOneDay

  return (
    <>
      <PageSeo
        title="Content for open source && cloud native"
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/content`}
      />
      <header className="mt-48 mb-20">
        <Container>
          <Grid className="mb-24">
            <Ten className="prose prose-lg dark:prose-dark">
              <h1 className="!text-purple !leading-tight font-medium dark:!text-gray-100">
                Content to inspire commitment in open source{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-lg">
                  &&
                </span>{' '}
                cloud native
              </h1>
              <p>
                I employ three styles of content:{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 px-2 py-0.5 rounded-lg">
                  editorial
                </span>
                ,{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 mr-1 px-2 py-0.5 rounded-lg">
                  technical
                </span>
                , and{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 mr-1 px-2 py-0.5 rounded-lg">
                  search optimized
                </span>
                .
              </p>
            </Ten>
          </Grid>
          {/* <Grid>
            <Six>
              <h1 className="text-purple dark:text-gray-50 text-lg lg:text-xl font-bold uppercase leading-snug mb-8">
                Content for open source{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-lg">
                  &&
                </span>{' '}
                cloud native
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="text-sea text-3xl lg:text-4xl font-medium !leading-snug">

                  {frontMatter.summary}
                </p>
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Six>
            <Six className="hidden md:block">
              <Image
                className="rounded-lg"
                src="/static/images/services_hero.jpg"
                alt="Joel Hans, B2B copywriter for generating commitment"
                height={1200}
                width={800}
              />
            </Six>
          </Grid> */}
        </Container>
      </header>
      <section className="relative z-10 py-24 bg-gray-50 dark:bg-gray-800">
        <Container className="relative">
          <Grid className="!items-start mb-16">
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
            </Eight>
            <Six className="align-start">
              <div className="prose dark:prose-dark bg-gray-100 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">Testkube</h4>
                <p>
                  When the product managers at Testkube wanted to spark controversy and establish a
                  new paradigm in CI/CD pipelines, they tapped me to (ghost)write{' '}
                  <Link href="https://thenewstack.io/are-monolith-ci-cd-pipelines-killing-quality-in-your-software/">
                    <em>Are Monolith CI/CD Pipelines Killing Quality in Your Software?</em>
                  </Link>
                  .
                </p>
                <p>
                  With an evidence-based breakdown of why the status quo isn't working, this article
                  has generated tens of thousands of pageviews and a surge of signups for their
                  Kubernetes-native testing platform.
                </p>
              </div>
            </Six>
            <Six>
              <div className="prose dark:prose-dark bg-gray-100 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">CNCF &amp; Argo</h4>
                <p>
                  The open source Argo project was eager to reach <em>Graduating</em> status in the
                  Cloud Native Computing Foundation (CNCF). To showcase their value to the cloud
                  native community, they partnered with me on a comprehensive{' '}
                  <Link href="https://www.cncf.io/reports/argo-project-journey-report/">
                    project journey report
                  </Link>
                  , which detailed community health, development velocity, and contributor
                  diversity.
                </p>
                <p>
                  As part of the report's promotional push, I interviewed Argo's founders and
                  synthesized their experiences into an educational piece,{' '}
                  <Link href="https://www.cncf.io/blog/2022/09/21/four-lessons-that-took-argo-from-first-commit-to-gitops-darling/">
                    <em>Four lessons that took Argo from first commit to GitOps darling</em>
                  </Link>
                  , to spotlight their expertise as open source innovators.
                </p>
              </div>
            </Six>
          </Grid>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-gray-100 dark:bg-gray-800">
        <Container className="relative">
          <Grid className="!items-start mb-24">
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
            </Eight>
            <Six>
              <div className="prose dark:prose-dark bg-gray-200 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">Tracetest</h4>
                <p>
                  To help DevRel leaders at Tracetest better position their cloud native testing
                  product as a paradigm-shifter, I wrote{' '}
                  <Link href="https://tracetest.io/blog/the-difference-between-tdd-and-odd">
                    <em>The difference between test-driven & observability-driven development</em>
                  </Link>
                  . I married thought leadership on testing culture with technical details on
                  distributed tracing to showcase the product's value proposition.
                </p>
                <p>
                  But simply <em>talking</em> about features isn't enough for developers&mdash;I
                  wrote real-world code in Node.js to validate every step and showcase in-product
                  processes other back-end developers can follow.
                </p>
              </div>
            </Six>
            <Six>
              <div className="prose dark:prose-dark bg-gray-200 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">Kubefirst</h4>
                <p>
                  I plucked the idea behind{' '}
                  <Link href="https://kubefirst.io/blog/leveraging-external-secrets-operator">
                    <em>Leveraging External Secrets Operator</em>{' '}
                  </Link>
                  from an interview with a Kubefirst founder, then developed the danger of
                  'secret-scattering' in Kubernetes into a technical article that shows how platform
                  engineers and GitOps teams <em>could</em> avoid the danger with cloud native
                  tooling.
                </p>
                <p>
                  For Kubefirst, an article like this is the best of both worlds: They get to
                  spotlight their opinions and expertise while demonstrating the value of choosing
                  their platform over reinventing the wheel.
                </p>
              </div>
            </Six>
          </Grid>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-white dark:bg-gray-800">
        <Container>
          <Grid className="!items-start mb-24">
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
            </Eight>
            <Six>
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
                  context.
                </p>
                <p>
                  This article is now <em>the</em> cornerstone of GraphGrid's ongoing content
                  strategy.
                </p>
              </div>
            </Six>
            <Six>
              <div className="prose dark:prose-dark bg-gray-100 dark:bg-gray-900 p-8">
                <h4 className="!text-xl text-purple !mt-0">Kusk</h4>
                <p>
                  The Kusk team, eager to brand their project with the influential "APIOps" keyword,
                  asked me to write this primer with one important caveat: It needed to respect the
                  reader's time by being as short as possible.
                </p>
                <p>
                  After pitching the "500 words" part of{' '}
                  <Link href="https://thenewstack.io/what-is-apiops-in-less-than-500-words/">
                    <em>What Is APIOps? (In Less than 500 Words)</em>
                  </Link>
                  , I turned around an article, ready for syndication on <em>The New Stack</em>,
                  that lives up to its promise, pitches the value prop of Kusk, and has sparked
                  hundreds of responses on social media.
                </p>
              </div>
            </Six>
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
      <section className="py-24 bg-gray-100 dark:bg-gray-700">
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
    </>
  )
}
