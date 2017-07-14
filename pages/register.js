import Layout from '../components/layout'
import stylesheet from 'styles/index.scss'
import Register from '../components/register'

export default () => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Register />
  </Layout>
)