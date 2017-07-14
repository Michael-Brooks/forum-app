import Layout from '../components/layout'
import stylesheet from 'styles/index.scss'

export default () => (
  <Layout title='test'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h2>Home</h2>
  </Layout>
)