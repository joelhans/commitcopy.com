import Image from 'next/image'

export const Testimonial = ({ children, name, title, img }) => (
  <div className="flex flex-col items-center">
    <div className="col-span-2">
      <Image className="rounded-lg" src={`/static/testimonials/${img}`} width={140} height={140} />
    </div>
    <div className="lg:w-2/3 prose dark:prose-dark text-center mt-4">
      <p className="text-sea text-2xl leading-snug">{children}</p>
      <p className="font-mono text-lg font-bold !-mt-4">
        {name} • {title}
      </p>
    </div>
  </div>
)

export const TestimonialHoriz = ({ children, name, title, img }) => (
  <div className="flex flex-wrap items-center">
    <div className="flex flex-col justify-items-start items-start content-start lg:w-1/4 mr-8">
      <Image
        className="grow-0 rounded-lg"
        src={`/static/testimonials/${img}`}
        width={128}
        height={128}
      />
      <p className="font-mono text-lg font-bold mt-4">
        {name} • {title}
      </p>
    </div>
    <div className="w-full lg:w-2/3 !text-purple dark:!text-sea font-medium prose prose-xl dark:prose-dark">
      <p>{children}</p>
    </div>
  </div>
)
