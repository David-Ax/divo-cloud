import { FC } from 'react'
import { Flex, Stack, Text } from '@mantine/core'
import { IAlbum } from '../../types/api'
import Check from '../Check/Check'

interface IProps {
  albumData: IAlbum
}

interface IStackItemProps {
  label: string
  value: string | number
}

const StackItem: FC<IStackItemProps> = ({ label, value }) => (
  <Stack justify={'flex-start'} h={'100%'} gap={0}>
    <Text c={'var(--app-theme-7)'} size={'xs'}>
      {label}
    </Text>
    <Text c={'var(--app-theme-9)'} size={'1.9rem'}>
      {value}
    </Text>
  </Stack>
)

const AlbumInformation: FC<IProps> = (props) => {
  return (
    <Flex gap={60} align={'center'} justify={'flex-start'}>
      <StackItem label="Titel" value={props.albumData.title} />
      <StackItem label="Anzahl Bilder" value={props.albumData.images.length} />
      <StackItem label="Datum" value={new Date(props.albumData.shootDate).toLocaleDateString()} />
      <StackItem label="Location" value={props.albumData.location} />
      <Check condition={props.albumData.description}>
        <StackItem label="Anmerkung" value={props.albumData.description} />
      </Check>
    </Flex>
  )
}

export default AlbumInformation
