import { FC } from 'react'
import styles from './Sidebar.module.css'
import { Avatar, Stack, Text, Title } from '@mantine/core'

interface IProps {}

const Sidebar: FC<IProps> = () => {
  return (
    <div className={styles.sidebar}>
      <Stack p={'25px 0'} h={'100%'} justify={'space-between'} align={'center'}>
        <Stack justify={'center'} align={'flex-start'} gap={0}>
          <Title c={'var(--app-theme-1)'} order={2}>
            DiVo
          </Title>
          <Title c={'var(--app-theme-1)'} order={4}>
            Cloud
          </Title>
        </Stack>
        <Text c={'var(--app-theme-1)'} style={{ rotate: '-90deg' }}>
          Cloud
        </Text>
        <Avatar radius="xl" />
      </Stack>
    </div>
  )
}

export default Sidebar
