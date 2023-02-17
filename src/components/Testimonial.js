import Image from 'next/image'

export const Testimonial = ({ children, name, title, img }) => (
  <div className="flex flex-col items-center">
    <div className="col-span-2">
      <Image className="rounded" src={`/static/testimonials/${img}`} width={140} height={140} />
    </div>
    <div className="prose dark:prose-dark mt-4">
      <p className="text-purple dark:text-gray-100">{children}</p>
      <p className="font-mono text-lg font-bold">
        {name} • {title}
      </p>
    </div>
  </div>
)

export const TestimonialHoriz = ({ children, name, title, img }) => (
  <div className="flex flex-wrap items-center">
    <div className="flex flex-col justify-items-start items-start content-start lg:w-1/4 mr-8">
      <Image
        className="grow-0 rounded"
        src={`/static/testimonials/${img}`}
        width={128}
        height={128}
      />
      <p className="font-mono text-lg font-bold mt-4">
        {name} • {title}
      </p>
    </div>
    <div className="w-full lg:w-2/3 prose dark:prose-dark">
      <p className="text-purple dark:text-gray-100">{children}</p>
    </div>
  </div>
)
