import Image from 'next/image'

const Container = ({ children, name, title, img }) => (
  <div className="flex flex-col items-center">
    <div className="col-span-2">
      <Image
        className="rounded-full"
        src={`/static/testimonials/${img}`}
        width={140}
        height={140}
      />
    </div>
    <div className="lg:w-2/3 prose dark:prose-dark text-center mt-4">
      <p className="text-sea text-2xl leading-snug">{children}</p>
      <p className="font-mono text-lg font-bold !-mt-4">
        {name} • {title}
      </p>
    </div>
  </div>
)

export default Container
