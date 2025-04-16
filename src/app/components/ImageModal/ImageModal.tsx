import { FC, useEffect, useRef, useState } from 'react'
import { Box, Flex, Modal, Rating, Stack, Text } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import { IAlbum } from '../../types/api'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import Image from 'next/image'

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
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        },
      }}
    >
      <Flex p={25} gap={25} align="flex-start" h="100%" justify="space-between">
        <Stack w="100%" justify="center" h="100%" align="center">
          <Image
            quality={100}
            priority
            width={800}
            className={''}
            height={600}
            style={{
              width: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              minHeight: '500px',
              backgroundAttachment: 'fixed',
              height: '70vh',
              borderRadius: '8px',
              objectFit: 'contain',
            }}
            src={props.albumData.images[currentIndex]?.url}
            alt="Album Image"
          />
          <Flex w={'100%'} align="center" justify="space-between">
            <Flex align="center" justify="center" h="100%" gap={5}>
              <Text c="var(--app-theme-0)" size="4rem">
                {currentIndex + 1}
              </Text>
              <Text c="var(--app-theme-7)" size="1.5rem">
                /
              </Text>
              <Text c="var(--app-theme-7)" size="1rem">
                {props.albumData.images.length}
              </Text>
            </Flex>
            <Rating defaultValue={2} size="xl" count={5} />
            <Text c="var(--app-theme-7)" size="1.5rem">
              Up and Down
            </Text>
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
