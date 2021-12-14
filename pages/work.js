import React from 'react'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Eight } from '@components/Grid'
import Testimonial from '@components/Testimonial'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'work/work')
  const IndexWorkIMGSRVR = await getSingleContent(BASE_CONTENT_PATH, 'work/img-srvr-short')
  const IndexWorkIBM = await getSingleContent(BASE_CONTENT_PATH, 'work/ibm-short')
  const IndexWorkOpentext = await getSingleContent(BASE_CONTENT_PATH, 'work/opentext-short')
  const IndexWorkNetdata = await getSingleContent(BASE_CONTENT_PATH, 'work/netdata-short')
  return { props: { content, IndexWorkIMGSRVR, IndexWorkIBM, IndexWorkOpentext, IndexWorkNetdata } }
}

export default function Services({
  content,
  IndexWorkIMGSRVR,
  IndexWorkIBM,
  IndexWorkOpentext,
  IndexWorkNetdata,
}) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxWorkIMGSRVR } = IndexWorkIMGSRVR
  const { mdxSource: mdxWorkIBM } = IndexWorkIBM
  const { mdxSource: mdxWorkOpentext } = IndexWorkOpentext
  const { mdxSource: mdxWorkNetdata } = IndexWorkNetdata

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
          <Grid>
            <Eight>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section id="portfolio" className="mb-16">
        <Container>
          <div className="grid grid-cols-12 gap-8 mt-8">
            <div className="col-span-12 lg:col-span-5 lg:col-start-2 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <article className="prose dark:prose-dark">
                <MDXExport code={mdxWorkIMGSRVR} />
              </article>
            </div>
            <div className="col-span-12 lg:col-span-5 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <article className="prose dark:prose-dark">
                <MDXExport code={mdxWorkNetdata} />
              </article>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-2 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <article className="prose dark:prose-dark">
                <MDXExport code={mdxWorkIBM} />
              </article>
            </div>
            <div className="col-span-12 lg:col-span-5 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <article className="prose dark:prose-dark">
                <MDXExport code={mdxWorkOpentext} />
              </article>
            </div>
          </div>
          <p className="text-lg text-center mt-8 italic">More samples available upon request.</p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <Testimonial
            name="Jennifer Briston"
            title="Marketing Manager, Netdata"
            img="jennifer-briston.jpg"
          >
            Joel did an amazing job with collaborating on creating the Netdata website. He has a
            unique skillset of understanding technical products with the ability to translate the
            value to a wide range of audiences. I'd gladly work with Joel again, he goes out of his
            way to provide his team support and the materials needed to execute projects.
          </Testimonial>
        </Container>
      </section>
    </>
  )
}
