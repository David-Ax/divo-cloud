import { FC, useState } from 'react'
import styles from './AlbumGallery.module.css'
import { SimpleGrid } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ImageModal from '../ImageModal/ImageModal'
import { IAlbum, IImage } from '../../types/api'

interface IProps {
  albumData: IAlbum
}

const AlbumGallery: FC<IProps> = (props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1)

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index)
    open()
  }

  return (
    <div className={styles.page}>
      <SimpleGrid w={'100%'} cols={4}>
        {props.albumData.images.map((image: IImage, index: number) => (
          <img
            key={index}
            loading="lazy"
            src={image.url}
            alt={image.filename}
            onClick={() => openImageModal(index)}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        ))}
      </SimpleGrid>
      <ImageModal
        albumData={props.albumData}
        imageIndex={currentImageIndex}
        opened={opened}
        onClose={close}
      />
    </div>
  )
}

export default AlbumGallery
