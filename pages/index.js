import Layout from '../components/layout'

const config = require('../config.json')

export default () => (
  <Layout title={ config.APP_NAME }>
    <h2>Home</h2>
  </Layout>
)