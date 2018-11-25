import React from 'react'
import Layout from '../components/layout'
import Weight from '../components/weight'

const NotFoundPage = () => (
  <Layout>
    <div className="AW__404_page">
      <h1>404</h1>
      <h2>page not found</h2>
      <a href="/">go to home page</a>
    </div>
    <Weight />
  </Layout>
)

export default NotFoundPage
