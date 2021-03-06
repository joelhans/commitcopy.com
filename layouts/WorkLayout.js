import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import PageTitle from '@components/PageTitle'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'
import { Testimonial, TestimonialHoriz } from '@components/Testimonial'

export default function WorkLayout({ children, frontMatter }) {
  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/work/${frontMatter.slug}`}
      />
      <header className="py-24">
        <Container>
          <Grid>
            <Eight>
              <span className="block text-purple dark:text-gray-50 text-lg lg:text-xl font-bold uppercase leading-snug mb-8">
                <Link className="text-gray-500 hover:text-sea transition-all" href="/work">
                  Work
                </Link>{' '}
                <span className="text-gray-500">•</span> {frontMatter.title}{' '}
                <span className="text-gray-500">•</span> {frontMatter.type}
              </span>
              <PageTitle>{frontMatter.title}</PageTitle>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="font-medium text-sea text-2xl">{frontMatter.summary_long}</p>
              </div>
            </Eight>
            <Twelve className="">
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <Image
                  className="rounded-lg"
                  src={`/static/projects/${frontMatter.slug}/hero.png`}
                  width="1440"
                  height="755"
                  alt={`Copywriting and content work for ${frontMatter.title}`}
                  objectFit="cover"
                  layout={`responsive`}
                  quality={90}
                />
              </div>
            </Twelve>
          </Grid>
        </Container>
      </header>
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={children} frontMatter={frontMatter} />
              </div>
            </Eight>
            <Twelve>
              <div>
                {frontMatter.testimonial_full && (
                  <TestimonialHoriz
                    name={frontMatter.testimonial_name}
                    title={frontMatter.testimonial_title}
                    img={frontMatter.testimonial_img}
                  >
                    {frontMatter.testimonial_full}
                  </TestimonialHoriz>
                )}
              </div>
            </Twelve>
            <Eight>
              <div className="mt-12">
                <Link className="text-sea text-lg font-medium" href="/work/">
                  &larr; Back to work
                </Link>
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
    </>
  )
}
