import React from 'react'
import Image from 'next/image'
import { Widget } from '@typeform/embed-react'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import Link from '@components/Link'
import { MDXLayoutRenderer } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'
import { Testimonial, TestimonialHoriz } from '@components/Testimonial'
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

// const FAQItem = ({ title, children }) => (
//   <>
//     <AccordionItem className="relative mb-6 px-6 py-4 bg-purple bg-opacity-5 dark:bg-gray-900 rounded">
//       <AccordionItemHeading>
//         <AccordionItemButton className="flex items-center justify-between dark:text-gray-100 lg:text-lg font-medium">
//           {title}
//           <div className="flex-0 justify-self-end">
//             <AccordionItemState>
//               {(state) => {
//                 return state.expanded ? (
//                   <VscTriangleDown className="flex-0 w-4 h-4" />
//                 ) : (
//                   <VscTriangleRight className="flex-0 w-4 h-4" />
//                 )
//               }}
//             </AccordionItemState>
//           </div>
//         </AccordionItemButton>
//       </AccordionItemHeading>
//       <AccordionItemPanel className="prose dark:prose-dark prose-sm mt-4">
//         {children}
//       </AccordionItemPanel>
//     </AccordionItem>
//   </>
// )

export default function GetStarted({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24 lg:mt-32 mb-20">
        <Container>
          <Grid>
            <Six>
              <h1 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mb-8">
                {frontMatter.title}
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="text-sea text-2xl lg:text-3xl font-medium !leading-snug">
                  {frontMatter.summary}
                </p>
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Six>
            <Six>
              <div className="relative min-h-max col-span-12 lg:col-span-8 border border-gray-400 rounded-lg">
                <Widget
                  id="kyVqRz9I"
                  style={{ position: 'relative', width: '100%', height: 500 }}
                  className="my-form"
                />
              </div>
            </Six>
          </Grid>
        </Container>
      </header>
      <section className="py-24 bg-gray-100 dark:bg-gray-800">
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
      {/* <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="prose col-span-12 lg:col-span-4 order-last lg:order-first mb-24 lg:mb-0">
              <h3 className="!text-sea !text-3xl !font-medium">A few important notes</h3>
              <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                <FAQItem title="Copywriting rates">
                  <p>
                    <strong>
                      As a new client, your minimum investment is $1,495, with the{' '}
                      <Link className="text-orange font-medium" href="/services/#one-day-commit">
                        One-Day Commit
                      </Link>
                      .
                    </strong>
                  </p>
                  <p>
                    <strong>
                      All other copywriting projects have a minimum investment of $3,000.{' '}
                    </strong>
                  </p>
                  <p>
                    In these cases, my quote and deliverables are customized to what's going to
                    deliver the most impact for your company.
                  </p>
                  <p>
                    I don't bill by hour, and I don't have a rate sheet for every type of
                    deliverable.
                  </p>
                  <p>Why?</p>
                  <p>
                    I quote for the value that my work provides&mdash;the value you'll get out of
                    having polished copywriting that helps you accomplish your goals in growing your
                    business.
                  </p>
                  <p>
                    If I bill per hour, that means I work faster&mdash;not smarter&mdash;to minimize
                    your costs.
                  </p>
                  <p>
                    With project pricing, we both know exactly what we're going to work on, how much
                    it'll cost, when it'll get done, and what we're hoping to achieve.
                  </p>
                  <p>
                    And if all you need is someone to put a spit-shine on an existing sales page,
                    then we're not a good fit!
                  </p>
                  <p>
                    Think of me&mdash;or any copywriter&mdash;as a strategic partner, one who goes
                    deep on research and plotting your company's growth before putting down a single
                    word.
                  </p>
                  <p>It takes commitment (and time), but it creates results.</p>
                </FAQItem>
                <FAQItem title="Content &amp; strategy rates">
                  <p>
                    <strong>
                      Your minimum investment in content creation and/or content strategy is
                      $3,000/mo.
                    </strong>
                  </p>
                  <p>
                    In these cases, I work on a retainer basis, collaborating every month on
                    high-value technical content, such as complex tutorials, white papers, eBooks,
                    and other evergreen assets for you to use to generate commitment across your
                    marketing channels.
                  </p>
                  <p>
                    Once we hop on a call and discuss your goals and your gaps&mdash;such as whether
                    you just need someone to create content for you, someone to oversee an editorial
                    calendar, or both&mdash;we can create the perfect package of deliverables and
                    investment.
                  </p>
                </FAQItem>
                <FAQItem title="Availability &amp; timelines">
                  <p>
                    <strong>I'm typically booked out 2-3 months in advance.</strong>
                  </p>
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
                  <p>
                    Copywriting projects typically take 2-3 weeks to account for research,
                    copywriting, and two rounds of revision. Content creation or execution is an
                    ongoing process, but you can expect the first deliverable roughly one week we
                    start our engagement.
                  </p>
                </FAQItem>
              </Accordion>
            </div>
            
          </div>
        </Container>
      </section> */}
    </>
  )
}
