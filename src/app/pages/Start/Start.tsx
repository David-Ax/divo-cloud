import { FC } from 'react'
import Layout from '../../components/Layout/Layout'
import Album from '../Album/Album'

interface IProps {}

const Start: FC<IProps> = (props) => {
  return (
    <Layout>
      <Album />
    </Layout>
  )
}

export default Start
