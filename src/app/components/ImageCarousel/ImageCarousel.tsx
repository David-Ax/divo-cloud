import { FC } from 'react'
import { Carousel } from '@mantine/carousel'
import { IAlbum, IImage } from '../../types/api'
import Image from 'next/image'

interface IProps {
  currentIndex: number
  albumData: IAlbum
  setCurrentIndex: (index: number) => void
}

const ImageCarousel: FC<IProps> = (props) => {
  return (
    <Carousel
      h="100%"
      orientation="vertical"
      align="center"
      controlsOffset="xs"
      dragFree
      initialSlide={props.currentIndex}
      withControls={false}
      styles={{
        root: {
          height: '100%',
          overflow: 'hidden',
        },
        container: {
          height: '100%',
        },
      }}
    >
      {props.albumData.images.map((image: IImage, index: number) => (
        <Carousel.Slide key={index}>
          <Image
            alt={image.filename}
            src={image.url}
            quality={25}
            width={200}
            height={150}
            priority
            onClick={() => props.setCurrentIndex(index)}
            style={{
              borderRadius: '8px',
              cursor: 'pointer',
              objectFit: 'cover',
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
