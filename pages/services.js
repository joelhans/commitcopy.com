import React from 'react'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import Link from '@components/Link'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Eight } from '@components/Grid'
import Testimonial from '@components/Testimonial'
import { Service, ServiceGo, ServicePrice, ServiceButton } from '@components/Service'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')
  return { props: { content } }
}

export default function Services({ content }) {
  const { mdxSource, frontMatter } = content

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
              <h1 className="text-orange text-3xl lg:text-6xl font-medium leading-snug mb-8">
                {frontMatter.title}
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="text-sea text-xl lg:text-3xl font-medium">
                  {frontMatter.summary} {frontMatter.summary_cont}
                </p>
              </div>
            </Eight>
          </Grid>
        </Container>
      </header>
      <section className="mb-16">
        <Container>
          <div className="prose prose-md lg:prose-lg dark:prose-dark">
            <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
          </div>
        </Container>
      </section>
      {/* <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div
            id="one-day-commit"
            className="lg:w-2/3 lg:ml-auto px-8 py-12   mb-16"
          >
            <h3 className="text-orange text-4xl font-mono font-bold mb-4"></h3>
            <div className="prose dark:prose-dark mb-8">
            </div>
            
          </div>
          <div
            id="source-copy"
            className="lg:w-2/3 "
          >
            <h3 className="text-orange text-4xl font-mono font-bold mb-4">
              
            </h3>
            <div className="prose dark:prose-dark mb-8">
            </div>
           
          </div>
        </Container>
      </section> */}
    </>
  )
}
