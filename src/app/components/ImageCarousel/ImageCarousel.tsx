import { FC } from 'react'
import { Carousel } from '@mantine/carousel'
import { IAlbum, IImage } from '../../types/api'

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
          <img
            src={image.url}
            onClick={() => props.setCurrentIndex(index)}
            loading="lazy"
            alt={image.filename}
            style={{
              width: '100%',
              height: '150px',
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
