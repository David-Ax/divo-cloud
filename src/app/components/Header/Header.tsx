import { FC } from 'react'
import styles from './Header.module.css'

interface IProps {}

const Header: FC<IProps> = (props) => {
  return <header className={styles.header + ' ' + styles.gradient}></header>
}

export default Header
