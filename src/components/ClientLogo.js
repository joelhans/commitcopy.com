import Image from 'next/image'

const ClientLogo = ({ className, name, src, width, height }) => (
  <div
    className={`${className} col-span-3 flex items-center justify-center text-center py-4 dark:filter dark:invert dark:brightness-0`}
  >
    <Image src={`/static/clients/${src}`} width={width} height={height} alt={`Logo for ${name}`} />
  </div>
)

export default ClientLogo
