import { FC, useEffect, useState } from 'react'
import { Box, Flex, Image, Modal, Stack } from '@mantine/core'
import { IAlbum } from '../../types/api'
import ImageCarousel from '../ImageCarousel/ImageCarousel'

interface IProps {
  opened: boolean
  onClose: () => void
  imageIndex: number
  albumData: IAlbum
}

const ImageModal: FC<IProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  useEffect(() => {
    setCurrentIndex(props.imageIndex)
  }, [props.imageIndex])

  if (!props.albumData || props.imageIndex === -1) {
    return
  }

  return (
    <Modal
      fullScreen={true}
      opened={props.opened}
      withCloseButton={false}
      onClose={props.onClose}
      styles={{
        content: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        },
      }}
    >
      <Flex p={25} gap={25} align={'flex-start'} h={'100%'} justify={'space-between'}>
        <Stack w={'100%'} justify={'center'} h={'100%'} align={'center'}>
          <Image
            style={{
              width: '100%',
              height: '600px',
              borderRadius: '8px',
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            src={props.albumData.images[currentIndex]?.url}
            alt="Album Image"
          />
        </Stack>
        <Box h={'100%'}>
          <ImageCarousel
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            albumData={props.albumData}
          />
        </Box>
      </Flex>
    </Modal>
  )
}

export default ImageModal
