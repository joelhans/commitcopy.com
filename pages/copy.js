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

export default function Copy({
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
        title="Messaging + copywriting for open source && cloud native"
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/copy`}
      />
      <header className="mt-48 mb-20">
        <Container>
          <Grid className="mb-24">
            <Ten className="prose prose-lg dark:prose-dark">
              <h1 className="!text-purple !leading-tight font-medium dark:!text-gray-100">
                Scale your open source{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-lg">
                  &&
                </span>{' '}
                cloud native startup with messaging and copywriting
              </h1>
              <p>
                Most open source && cloud native projects and products require a heavy dose of
                commitment just to <span>get through the "getting started" guide</span>. We're
                talking big steps, like reconfiguring a production environment or CI/CD workflow,
                for your target audience get a proper demo and figure out whether what you do is
                right for them.
              </p>
              <p>Inspiring that first commitment can go wrong in so many ways:</p>
              <div className="lg:grid grid-cols-2 gap-4">
                <ul className="text-base !my-0">
                  <li>
                    Your project doesn't stand out among the crowded landscape of open source &&
                    cloud native
                  </li>
                  <li>
                    Users don't understand the difference between your open source project and
                    commercial product
                  </li>
                </ul>
                <ul className="text-base !my-0">
                  <li>
                    A vague monetization strategy and ongoing commitment to open source tarnishes
                    developer trust
                  </li>
                  <li>A fourth point</li>
                </ul>
              </div>
              <p>
                If any of these sound familiar, messaging and copywriting are your path toward
                generating commitment. We're not talking hard-sell "conversion copywriting" (aka
                suckering your target audience into clicking on a call-to-action button or filling
                out a form), but rather
              </p>
              <p>
                Put clarifying your vision, turning visitors into product champions, and building
                evergreen growth on autopilot with ready-to-launch messaging and copywriting that
                gets developers and engineers to <span className="text-sea font-bold">care</span>{' '}
                about what you do before they <span className="text-orange font-bold">click</span>.
              </p>
            </Ten>
          </Grid>
        </Container>
      </header>
      <section id="services" className="pb-16 dark:bg-gray-900">
        <Container>
          <h2 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium text-center mb-16">
            Here's how I help:
          </h2>
          <Grid className="mb-16">
            <Eight
              id="source-story"
              className="px-8 py-12 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-4">
                Brand messaging
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceSourceStory} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">Discover your source</ServiceButton>
              </ServiceGo>
            </Eight>
            <Four className="hidden md:block text-center">
              <Image
                className=""
                src="/static/images/services-source.svg"
                alt="Brand strategy"
                width={80}
                height={142}
              />
            </Four>
          </Grid>
          <Grid className="mb-16">
            <Four className="hidden md:block text-center">
              <Image
                className="opacity-50"
                src="/static/images/services-website.svg"
                alt="Website copy"
                width={52}
                height={165}
              />
            </Four>
            <Eight
              id="website-copy"
              className="px-8 py-12 bg-purple bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-4">
                Website copy
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceWebsiteCopy} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">
                  <code className="text-lg text-orange font-bold bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    init
                  </code>{' '}
                  a new website
                </ServiceButton>
              </ServiceGo>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section id="one-day-commit" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mr-6">
                Need copy <em>right now</em>? Not ready for a full copywriting project?
              </h2>
              <h3 className="text-orange text-4xl lg:text-5xl font-mono font-bold mt-4 mb-4">
                The One-Day Commit
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceOneDay} />
              </div>
              <ServiceGo>
                <ServicePrice>$1,495</ServicePrice>
                <ServiceButton to="/get-started/">Commit to it</ServiceButton>
              </ServiceGo>
            </Eight>
            <div className="hidden lg:block col-span-4 opacity-20">
              <Image
                src="/static/images/services-one-day.svg"
                alt="The One-Day Commit"
                height={512}
                width={512}
              />
            </div>
          </Grid>
        </Container>
      </section>
      <section className="py-24 bg-gray-100 dark:bg-gray-700">
        <Container>
          <Grid>
            <Twelve>
              <TestimonialHoriz
                name="Jennifer Briston"
                title="Marketing Manager, Netdata"
                img="jennifer-briston.jpg"
              >
                Joel did an amazing job with collaborating on creating the Netdata website. He has a
                unique skillset of understanding technical products with the ability to translate
                the value to a wide range of audiences. I'd gladly work with Joel again, he goes out
                of his way to provide his team support and the materials needed to execute projects.{' '}
                <br />
                <br />
                Super professional, friendly, and overall delightful to work with. He is really
                knowledgeable in the tech space with the skills of a great writer, a rare gem. He'll
                go above and beyond your expectations!
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
    </>
  )
}
