import { FC, useState } from 'react'
import Masonry from 'react-masonry-css'
import { Box, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ImageModal from '../ImageModal/ImageModal'
import { IAlbum, IImage } from '../../types/api'
import './AlbumGallery.css'

interface IProps {
  albumData: IAlbum
}

const AlbumGallery: FC<IProps> = ({ albumData }) => {
  const [opened, { open, close }] = useDisclosure(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1)

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index)
    open()
  }

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
  }

  return (
    <div className="gallery-page">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {albumData.images.map((image: IImage, index: number) => (
          <Box key={index} className="image-box" onClick={() => openImageModal(index)}>
            <Image
              src={image.url}
              alt={image.filename}
              radius="md"
              loading="lazy"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Masonry>

      <ImageModal
        albumData={albumData}
        imageIndex={currentImageIndex}
        opened={opened}
        onClose={close}
      />
    </div>
  )
}

export default AlbumGallery
