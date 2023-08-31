import React from 'react'
import Image from 'next/image'
import Link from '@components/Link'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Four, Six, Two } from '@components/Grid'
import { TestimonialHoriz } from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')

  return {
    props: { content },
  }
}

export default function Content({ content }) {
  const { frontMatter } = content

  return (
    <>
      <PageSeo
        title="Content for open source && cloud native"
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/content`}
      />
      <header className="mt-24 lg:mt-32 mb-20">
        <Container>
          <Grid className="mb-24">
            <Ten className="prose lg:prose-lg dark:prose-dark">
              <h1 className="!text-purple !leading-tight !font-bold dark:!text-gray-100">
                Content to inspire commitment in open source{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-lg">
                  &&
                </span>{' '}
                cloud native
              </h1>
              <p>
                A big moment in startup maturity is feeling confident your{' '}
                <Link href="/copy">messaging + copywriting</Link> resonate with your target
                audiences. You're finally ready to distribute your value propositions and innovative
                vision wide across the open source and cloud native ecosystems through content.
              </p>
              <p>
                For these clients, I employ three styles of developer- and engineer-focused
                content&mdash;{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 px-2 py-0.5 rounded-lg">
                  technical commentary
                </span>
                ,{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 mr-1 px-2 py-0.5 rounded-lg">
                  cornerstone resources
                </span>
                , and{' '}
                <span className="text-base text-orange text-mono font-bold bg-gray-200 dark:bg-gray-900 mr-1 px-2 py-0.5 rounded-lg">
                  how-to guides
                </span>
                &mdash;across any asset that supports the KPIs of your developer marketing strategy
                and your organization's go-to-market motion. We can build a reliable pipeline for
                your product blog, stack up contributions to your industry's leading publications,
                or target leaders/CTOs with case studies, white papers, product briefs, and beyond.
              </p>
              <p>Content is your path to:</p>
              <div className="lg:grid grid-cols-2 gap-4">
                <ul className="text-base !my-0">
                  <li>
                    Build the required trust and authority to inspire readers to do difficult work,
                    like reconfigure their production environment, just to finish a 'get started'
                    guide
                  </li>
                  <li>
                    Transform skeptical developers into product champions by solving their
                    day-to-day technical concerns
                  </li>
                </ul>
                <ul className="text-base !my-0">
                  <li>
                    Play to the algorithm's demands while captivating developer/engineering readers
                    into learning about novel approaches to big-picture technical and cultural
                    decisions
                  </li>
                  <li>
                    Stand out in crowded fields with developer- and engineer-focused content that
                    feels less like a hard sell and more like a helpful friend
                  </li>
                </ul>
              </div>
            </Ten>
          </Grid>
        </Container>
      </header>
      <section className="relative z-10 py-24 bg-gray-50 dark:bg-gray-800">
        <Container className="relative">
          <Grid className="!items-start mb-16">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h2 className="!text-orange !text-2xl lg:!text-3xl !font-medium">
                Technical commentary
              </h2>
              <p>
                Go beyond standard-issue &ldquo;thought leadership&rdquo; and truly stand out from
                the crowd with articles that merge your team's strongest-held opinions with their
                technical expertise. Through original research and interviews, I create
                authoritative content that simplifies complex processes or mental models, then
                leverage storytelling to help readers put leading ideas into action today.
              </p>
              <p>
                It's your surest path to building trust, showcasing your internal expertise, and
                delivering on your content goals by inspiring commitment.
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
      <section className="relative z-10 py-24 bg-gray-100 dark:bg-gray-900">
        <Container className="relative">
          <Grid className="!items-start">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h2 className="!text-orange !text-2xl lg:!text-3xl !font-medium">
                Cornerstone resources
              </h2>
              <p>
                Ground your quarterly or semi-annual content marketing goals with the "big rocks"
                that pay long-term dividends by anchoring your content calendar and are infinitely
                repurposeable. Must-bookmark templates and checklists. Interactive content. How-tos
                that solve enormous problems with extraordinary depth. Reference documents your
                technical readers will carry with them as they grow in their careers. Independent
                research and story-driven reports they can't help but share.
              </p>
              <p>
                I work with you to conceptualize assets that differentiate your product, then handle
                all research, engineering interviews, and coordination of technical assets to let
                you focus on making a splash.
              </p>
            </Eight>
            <Twelve className="prose prose-lg dark:prose-dark bg-gray-200 dark:bg-gray-800 p-8">
              <Grid>
                <Six>
                  <Image
                    className="dark:filter dark:invert dark:brightness-0"
                    src={`/static/clients/cncf.svg`}
                    width={200}
                    height={40}
                    alt={`Logo for CNCF`}
                  />
                  <p>
                    Twice a year, the brightest CTOs and engineering leadership from the CNCF's End
                    User community get together during KubeCon+CloudNativeCon for an intensive,
                    no-holds-barred conversation about the state of cloud native.
                  </p>
                  <p>
                    My mission? Turn hours of vibrant conversation into an insightful, actionable
                    report that helps other end users within the cloud native ecosystem better
                    understand the current maturity of their Kubernetes provisioning platforms and
                    chart a more precise course for improvement and innovation.
                  </p>
                </Six>
                <Six>
                  <Link
                    className="group transition-all "
                    href="https://www.cncf.io/reports/cto-summit-na-2022/"
                  >
                    <Image
                      className="rounded-lg transition-all group-hover:filter group-hover:brightness-150"
                      src={`/static/projects/cncf/cncf_cto-report.png`}
                      width={778}
                      height={556}
                      alt={`CTO Summit: Exploring the Foundations of Cloud Native Maturity`}
                    />
                    <p>
                      Read the full report:{' '}
                      <em>Exploring The Foundations Of Cloud Native Maturity</em> &rarr;
                    </p>
                  </Link>
                </Six>
              </Grid>
            </Twelve>
          </Grid>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-gray-50 dark:bg-gray-800">
        <Container className="relative">
          <Grid className="!items-start">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h2 className="!text-orange !text-2xl lg:!text-3xl !font-medium">How-to guides</h2>
              <p>
                Your fastest path to winning over managers and leaders with purchasing power is by
                helping them solve a problem, right now, in as few steps as possible using your
                product. I can dive into your product and code to develop compelling how-to/tutorial
                content that spotlights your key value pillars or open up new co-marketing
                opportunities without it <em>feeling</em> like marketing at all.
              </p>
              <p>
                Throw your most technical concepts and challenges my way&mdash;I'm comfortable in
                the CLI, spinning up Kubernetes clusters, and writing all the code necessary for
                readers to recreate each step locally. Precision how-tos with less work on your
                part.
              </p>
            </Eight>
            <Six>
              <div className="prose dark:prose-dark bg-gray-200 dark:bg-gray-800 p-8">
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
              <div className="prose dark:prose-dark bg-gray-200 dark:bg-gray-800 p-8">
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
      {/* <section className="relative z-10 py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid className="!items-start">
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h2 className="!text-orange !text-2xl lg:!text-3xl !font-medium">Search optimized</h2>
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
        </Container>
      </section> */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <Grid>
            <Twelve>
              <TestimonialHoriz
                name="Abdallah Abedraba"
                title="Associate Product Manager, Testkube && Kubeshop"
                img="abdallah-abedraba.jpg"
              >
                With most writers I had to adapt to the writer's technique, process, or their
                existing knowledge on the topic. Not with Joel. Joel enabled me to explore different
                ideas that fitted with various experiments I was running, and he adapted to achieve
                whatever the goal was. I would absolutely work with Joel again whenever I'm looking
                to create well researched technical content or have a content strategy I want to
                nail! <br />
                <br />
                If you want to up your content game while having a content writer that adapts and
                supports your style/vision/knowledge depth/workflow, Joel is the perfect person for
                it.
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
      <section id="get-started" className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Ten className="prose prose-lg dark:prose-dark">
              <h2 className="!text-purple !text-2xl !lg:text-5xl !leading-normal font-medium dark:!text-gray-100">
                Ready to scale <span className="text-orange font-bold">commitment</span> from
                developers and engineering leaders in open source && cloud native with content?
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
            <Eight
              id="content"
              className="px-8 py-12 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-4">
                Content strategy &amp; execution
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceContent} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">Commit to content</ServiceButton>
              </ServiceGo>
            </Eight>
            <Four className="hidden md:block text-center">
              <Image
                className="opacity-75"
                src="/static/images/services-waves.svg"
                alt="Content strategy &amp; execution"
                width={150}
                height={300}
              />
            </Four>
          </Grid> */}
    </>
  )
}
