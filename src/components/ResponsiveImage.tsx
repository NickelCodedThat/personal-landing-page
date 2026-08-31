import type { ResponsiveImage as ResponsiveImageType } from '../data/types'

type ResponsiveImageProps = {
  image: ResponsiveImageType
  sizes: string
  objectPosition?: string
}

function ResponsiveImage({ image, sizes, objectPosition }: ResponsiveImageProps) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${image.avif[0]} 720w, ${image.avif[1]} 1200w`}
        sizes={sizes}
      />
      <img
        src={image.webp[1]}
        srcSet={`${image.webp[0]} 720w, ${image.webp[1]} 1200w`}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </picture>
  )
}

export default ResponsiveImage
