import React from 'react'
import Image from 'next/image'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Eight } from '@components/Grid'
import { ServiceGo, ServicePrice, ServiceButton } from '@components/Service'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')
  const ServiceOneDay = await getSingleContent(BASE_CONTENT_PATH, 'services/one-day-commit')
  const ServiceSourceCopy = await getSingleContent(BASE_CONTENT_PATH, 'services/source-copy')
  return { props: { content, ServiceOneDay, ServiceSourceCopy } }
}

export default function Services({ content, ServiceOneDay, ServiceSourceCopy }) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxServiceOneDay } = ServiceOneDay
  const { mdxSource: mdxServiceSourceCopy } = ServiceSourceCopy

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24 mb-12">
        <Container>
          <Grid>
            <Eight>
              <h1 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mb-8">
                {frontMatter.title}
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="text-sea text-3xl lg:text-4xl font-medium !leading-snug">
                  {frontMatter.summary}
                </p>
              </div>
            </Eight>
          </Grid>
        </Container>
      </header>
      <section className="mb-16">
        <Container>
          <Grid>
            <Eight>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
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
                <code className="text-lg text-orange font-bold bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                  init
                </code>{' '}
                a new project
              </ServiceButton>
            </ServiceGo>
          </div>
        </Container>
      </section>
      <section id="one-day-commit" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-purple dark:text-gray-100 text-lg lg:text-xl font-mono font-bold whitespace-nowrap mr-6">
                Need copy <em>right now</em>? Not ready for a full open-source copywriting project?
              </h2>
              <h3 className="text-orange text-4xl lg:text-5xl font-mono font-bold mt-4 mb-4">
                The One-Day Commit
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceOneDay} />
              </div>
              <ServiceGo>
                <ServicePrice>$1,995</ServicePrice>
                <ServiceButton to="/get-started/">Commit to it</ServiceButton>
              </ServiceGo>
            </Eight>
            <div className="hidden lg:block col-span-4 opacity-20">
              <Image src="/static/images/services-one-day.svg" height={512} width={512} />
            </div>
          </Grid>
        </Container>
      </section>
    </>
  )
}
