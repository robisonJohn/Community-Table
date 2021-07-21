import './Home.css'
import { Layout, ItemsCards } from '../../components'

const Home = (props) => {
  return (
    <Layout >
      <div className='home'>
        <ItemsCards />
      </div>
    </Layout>
  )
}

export default Home