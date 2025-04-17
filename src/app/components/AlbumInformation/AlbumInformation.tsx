import { FC } from 'react'
import { Flex, Stack, Text, Title } from '@mantine/core'
import { IAlbum } from '../../types/api'
import { IconPointFilled } from '@tabler/icons-react'

interface IProps {
  albumData: IAlbum
}

const AlbumInformation: FC<IProps> = (props) => {
  return (
    <Stack ta={'center'} align={'center'} w={'100%'} justify={'center'} p={25} h={'100%'} gap={0}>
      <Title size={'1.8rem'} c={'var(--app-theme-1)'}>
        {props.albumData.title}
      </Title>
      <Flex gap={10} align={'center'}>
        <Text c={'var(--app-theme-1)'}>
          {props.albumData.images.length} {props.albumData.images.length > 1 ? 'Bilder' : 'Bild'}
        </Text>
        <IconPointFilled size={20} color={'var(--app-theme-1)'} />
        <Text c={'var(--app-theme-1)'}>
          {new Date(props.albumData.shootDate).toLocaleDateString()}
        </Text>
      </Flex>
      <Text fw={200} c={'var(--app-theme-1)'}>
        {props.albumData.description}
      </Text>
    </Stack>
  )
}

export default AlbumInformation
