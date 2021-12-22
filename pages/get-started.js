import React from 'react'
import { InlineWidget } from 'react-calendly'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import Link from '@components/Link'
import { MDXLayoutRenderer } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Ten, Eight, Six, Four, Two } from '@components/Grid'
import Testimonial from '@components/Testimonial'
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { VscTriangleRight, VscTriangleDown } from 'react-icons/vsc'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'get-started')
  return { props: { content } }
}

const FAQItem = ({ title, children }) => (
  <>
    <AccordionItem className="relative mb-6 px-6 py-4 bg-purple bg-opacity-5 dark:bg-gray-900 rounded">
      <AccordionItemHeading>
        <AccordionItemButton className="flex items-center justify-between dark:text-gray-100 lg:text-lg font-medium">
          {title}
          <div className="flex-0 justify-self-end">
            <AccordionItemState>
              {(state) => {
                return state.expanded ? (
                  <VscTriangleDown className="flex-0 w-4 h-4" />
                ) : (
                  <VscTriangleRight className="flex-0 w-4 h-4" />
                )
              }}
            </AccordionItemState>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="prose dark:prose-dark prose-sm mt-4">
        {children}
      </AccordionItemPanel>
    </AccordionItem>
  </>
)

export default function GetStarted({ content }) {
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
          <div className="prose prose-md lg:prose-lg dark:prose-dark">
            <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
          </div>
        </Container>
      </section>
      <section className=" pb-16">
        <Container>
          <Testimonial name="Megan Duong" title="CEO, Sweater Story" img="megan-duong.png">
            Joel took our content strategy into beautiful language! He was attentive, prompt and
            genuinely cared about delivering high-quality work for our clients. If you need someone
            both creatively strategic and executional to do good work, you're silly to be on the
            fence!
          </Testimonial>
        </Container>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 pt-16">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="prose col-span-12 lg:col-span-4 order-last lg:order-first mb-24 lg:mb-0">
              <h3 className="!text-sea !text-3xl !font-medium">A few important notes</h3>
              <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                <FAQItem title="Copywriting rates">
                  <p>
                    Every project is custom, and every custom project gets its own quote and
                    deliverables.
                  </p>
                  <p>
                    I don't bill by hour, and I don't have a rate sheet for every type of
                    deliverable.
                  </p>
                  <p>Why?</p>
                  <p>
                    I quote for the value that my work provides—the value you'll get out of having
                    polished copywriting that helps you accomplish your goals in growing your
                    business.
                  </p>
                  <p>
                    If I bill per hour, that means I work faster—not smarter—to minimize your costs.
                  </p>
                  <p>
                    With project pricing, we both know exactly what we're going to work on, how much
                    it'll cost, when it'll get done, and what we're hoping to achieve.
                  </p>
                </FAQItem>
                <FAQItem title="Minimum project rates">
                  <p>
                    <strong>
                      My minimum project rate for new clients is $1,995, with the{' '}
                      <Link className="text-orange font-medium" href="/services/#one-day-commit">
                        One-Day Commit
                      </Link>
                      .
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Other open-source copywriting projects have a minimum project rate of $3,000.{' '}
                    </strong>
                    In these cases, my quote and deliverables are customized to what's going to
                    deliver the most impact for your company.
                  </p>
                  <p>
                    And if all you need is someone to put a spit-shine on an existing sales page,
                    then we're not a good fit!
                  </p>
                  <p>
                    Think of me—or any copywriter—as a strategic partner, one who goes deep on
                    research and plotting your company's growth before putting down a single word.
                  </p>
                  <p>It takes commitment (and time), but it creates results.</p>
                </FAQItem>
                <FAQItem title="Timelines &amp; start dates">
                  <p>I'm typically booked 3-4 weeks in advance.</p>
                  <p>
                    If you need help <em>right now</em>, might I recommend a{' '}
                    <Link className="text-orange font-medium" href="/services/#one-day-commit">
                      One-Day Commit
                    </Link>
                    ? You'll get to skip the waitlist and get new copywriting in 24 hours once we
                    kick the project off.
                  </p>
                  <p>
                    If you're willing to wait, a 50% deposit is all I need to hold your spot on my
                    calendar to ensure you get my full focus when our day comes.
                  </p>
                </FAQItem>
                <FAQItem title="Do you do content, too?">
                  <p>For certain clients, yes!</p>
                  <p>
                    I'm on retainer with them, collaborating every month on high-value technical
                    content, such as complex tutorials, white papers, eBooks, and other lead-gen
                    assets that they use in mission-critical funnels.
                  </p>
                  <p>But it's not something I usually jump into with new clients.</p>
                  <p>
                    The problem with a content-first approach is that you don't often know what
                    you're working toward until you've done some source-level thinking.
                  </p>
                  <p>
                    And the last thing I want to do is invoice you for big-ticket technical content
                    that doesn't drive toward the right goals.
                  </p>
                  <p>
                    So let's chat, get some work going, make sure we're a good fit, and then we'll
                    find the perfect content for you!
                  </p>
                </FAQItem>
                <FAQItem title="What about non-open source companies?">
                  <p>
                    Ah, you mean the 99.9% of businesses that <em>don't</em> publish all their
                    intellectual property online for the world to see.
                  </p>
                  <p>
                    Like IBM, Sumo Logic, Autodesk, and Johnson &amp; Johnson&mdash;just a few of my
                    past B2B clients?
                  </p>
                  <p>
                    You bet. I'm not exclusive to the open-source/open-core companies. Even if{' '}
                    <em>
                      turn <code>git clone</code> into spirited commitments from your customers,
                      developers, and contributors
                    </em>{' '}
                    doesn't ring true to you, the idea is the same.
                  </p>
                  <p>I get more visitors and readers to commit to your product and your vision.</p>
                </FAQItem>
              </Accordion>
            </div>
            <div className="col-span-12 lg:col-span-8 overflow-hidden -mt-16">
              <InlineWidget
                styles={{
                  height: '1080px',
                }}
                pageSettings={{
                  primaryColor: '00a2ff',
                  textColor: '4d5055',
                }}
                url="https://calendly.com/commitcopy/introductions"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
