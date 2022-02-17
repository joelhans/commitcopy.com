import Image from 'next/image'

const FullImage = ({ src, width, height, alt }) => {
  return (
    <>
      <div className="relative border border-gray-200 rounded-lg mr-16">
        <Image className="rounded-lg" src={src} width={width} height={height} alt={alt} />
      </div>
    </>
  )
}

export default FullImage
