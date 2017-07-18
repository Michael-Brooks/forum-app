import Layout from '../components/layout'
import Register from '../components/register'

export default ({ isLoggedIn = (process.browser) ? localStorage.getItem('token') : false }) => (
  <Layout title="Register now">
    <Register isLoggedIn={ isLoggedIn } />
  </Layout>
)