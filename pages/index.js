import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'
import { Testimonial, TestimonialHoriz } from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'
import WorkLink from '@components/WorkLink'

export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="z-30 absolute top-0 w-full h-32 bg-gray-50 dark:bg-gray-900"></div>

      <header
        id="hero"
        className="relative z-0 overflow-hidden mx-auto pt-24 lg:pt-36 pb-16 lg:pb-24 bg-white lg:bg-gray-50 dark:bg-gray-900"
      >
        <Container>
          <Grid>
            <Six className="h-full flex flex-col">
              <div className="mt-3">
                <Image
                  className="z-0 rounded"
                  src="/static/images/index_hero-3.jpg"
                  alt="Inspire developers and engineers to commit with content."
                  height={1200}
                  width={1200}
                />
              </div>
            </Six>
            <Six className="prose prose-lg dark:prose-dark">
              <h1 className="!text-purple !text-5xl !leading-tight font-medium dark:!text-gray-100">
                Inspire developers and engineers to{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 mr-1 px-2 py-0.5 rounded-lg">
                  commit
                </span>{' '}
                with content.
              </h1>
              <h2 className="!text-orange !text-xl lg:!text-2xl !font-medium">
                When you build products for platform engineers, DevOps{' '}
                <span className="font-mono font-bold text-purple dark:text-white">??</span> GitOps
                practitioners, developers, and the leaders who manage them, you need them to trust
                in your expertise and authority so profoundly they'll do difficult work, like
                reconfigure their production environment, just to finish your <em>get started</em>{' '}
                guide.
              </h2>
              <p>You need their commitment from the very beginning.</p>
              <p>
                The answer is content that's rich in both technical prowess and well-researched
                opinion, the formula for solving not just their day-to-day problems, but also
                educating them on novel approaches to painful challenges around culture, process,
                and talking about the value of the work they do. When you position your brand as a
                leader in your industry's discourse, with plenty of research and valuable resources
                to back up your claims, you build the trust and authority to inspire them to commit
                to what you do.
              </p>
              <p>
                That's where I come in, with more than ten years of experience in technical content
                and copywriting for the most specialized audiences of brands like the Cloud Native
                Computing Foundation, IBM, Red Hat, and more.
              </p>
              <div className="mt-8">
                <button className="text-purple text-lg font-medium px-4 py-3 bg-white border shadow-sm rounded transition-all hover:bg-purple hover:text-white">
                  Email me
                </button>
                <span className="mx-4">or</span>
                <button className="text-sea text-lg font-medium px-4 py-3 bg-white border shadow-sm rounded transition-all hover:bg-sea hover:text-white">
                  Schedule an introductory call
                </button>
              </div>
            </Six>
          </Grid>
        </Container>
      </header>
      <section id="what-i-do" className="relative z-10 py-24 bg-gray-100 dark:bg-gray-800">
        <Container className="relative">
          <Grid className="mb-16">
            <Six className="prose prose-lg dark:prose-dark">
              <h2 className="!text-purple !text-5xl !leading-tight font-medium dark:!text-gray-100">
                What I do
              </h2>
            </Six>
          </Grid>
          <Grid className="mb-16">
            <Six className="prose prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-xl lg:!text-2xl !font-medium">
                Content journalism and editorial
              </h3>
              <p>
                Go beyond "thought leadership" and truly stand out from the crowd with content
                driven by your team's strongest opinions about your industry. Through original
                research and interviews, I create authoritative content that simplifies complex
                processes or mental models, then leverage storytelling to help them put leading
                ideas into action today.
              </p>
              <p>
                It's your surest path to building trust, inspiring commitment, and delivering the
                business results you need through content.
              </p>
            </Six>
            <Six>
              <WorkLink
                url="https://www.cncf.io/blog/2022/09/21/four-lessons-that-took-argo-from-first-commit-to-gitops-darling/"
                title="CNCF: Four lessons that took Argo from first commit to GitOps darling"
              />
            </Six>
          </Grid>
          <Grid className="mb-16">
            <Six className="prose prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-xl lg:!text-2xl !font-medium">Technical how-tos</h3>
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
            </Six>
            <Six>
              <WorkLink
                url="https://tracetest.io/blog/the-difference-between-tdd-and-odd"
                title="The difference between test-driven development and observability-driven development"
              />
            </Six>
          </Grid>
          <Grid>
            <Six className="prose prose-lg dark:prose-dark">
              <h3 className="!text-orange !text-xl lg:!text-2xl !font-medium">Documentation</h3>
              <p>
                Documentation is the underrated marketing asset with unprecedented potential,
                especially in open source and cloud native.
              </p>
              <p>
                By establishing and maintaining a source of truth for your product, you project your
                brand's willingness to provide continuous support, education, and inspiration for
                your customers on their journey from visitor to product champion.
              </p>
            </Six>
            <Six>
              <WorkLink url="https://docs.radicle.community" title="RadicleDAO Documentation" />
            </Six>
          </Grid>
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
            <Six>
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
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Six className="lg:!col-start-4">
              <h2 className="text-sea dark:text-white text-xl lg:text-2xl font-medium text-center mb-8">
                Generating commitment with amazing tech brands&mdash;from enterprise SaaS to
                developer-focused to open source to fully DAO'd
              </h2>
            </Six>
          </Grid>
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-4 justify-around py-6 dark:rounded dark:bg-gray-800">
            <ClientLogo className="" src="cncf.svg" name="CNCF" width="240" height="40" />
            <ClientLogo src="radicle.svg" name="Radicle" width="235" height="36" />
            <ClientLogo src="ibm.svg" name="IBM" width="100" height="40" />
            <ClientLogo className="" src="redhat.svg" name="Red Hat" width="106" height="30" />
            {/* <ClientLogo src="autodesk.svg" name="Autodesk" width="193" height="25" />
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
            <ClientLogo src="netdata.svg" name="Netdata" width="164" height="32" /> */}
          </div>
        </Container>
      </section>
      <section id="about-me" className="py-24 dark:bg-gray-900">
        <Container>
          <Grid>
            <Six>
              <h2>About me</h2>
            </Six>
          </Grid>
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
