import { FC } from 'react'
import styles from './Header.module.css'
import { Flex, Title } from '@mantine/core'

interface IProps {}

const Header: FC<IProps> = (props) => {
  return (
    <header className={styles.header + ' ' + styles.gradient}>
      <Flex h={'100%'} w={'100%'} align={'center'} justify={'space-between'}>
        <Title c={'var(--app-theme-1)'} order={5}>
          Divo-Cloud
        </Title>
      </Flex>
    </header>
  )
}

export default Header
