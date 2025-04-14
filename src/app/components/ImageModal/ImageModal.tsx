import { FC, useEffect, useRef, useState } from 'react'
import { Box, Flex, Image, Modal, Stack, Text } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
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
  const scrollCooldown = useRef<boolean>(false)
  const maxIndex = props.albumData?.images.length - 1 || 0

  useEffect(() => {
    setCurrentIndex(props.imageIndex)
  }, [props.imageIndex])

  useHotkeys([
    ['arrowup', () => setCurrentIndex((prev) => Math.max(prev - 1, 0))],
    ['arrowdown', () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))],
  ])

  if (!props.albumData || props.imageIndex === -1) {
    return null
  }

  return (
    <Modal
      fullScreen
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
      <Flex p={25} gap={25} align="flex-start" h="100%" justify="space-between">
        <Stack onClick={props.onClose} w="100%" justify="center" h="100%" align="center">
          <Image
            style={{
              width: '100%',
              height: '600px',
              borderRadius: '8px',
              cursor: 'pointer',
              objectFit: 'contain',
            }}
            loading="lazy"
            src={props.albumData.images[currentIndex]?.url}
            alt="Album Image"
          />
          <Flex onClick={props.onClose} align="center" justify="flex-start">
            <Flex align="center" justify="flex-start" w="100%" h="100%" gap={5}>
              <Text c="var(--app-theme-9)" size="3rem">
                {currentIndex + 1}
              </Text>
              <Text c="var(--app-theme-7)" size="1.5rem">
                /
              </Text>
              <Text c="var(--app-theme-7)" size="1.9rem">
                {props.albumData.images.length}
              </Text>
            </Flex>
          </Flex>
        </Stack>
        <Box h="100%">
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
