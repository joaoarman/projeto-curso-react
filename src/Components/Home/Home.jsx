import React from 'react'
import Feed from '../Feed/Feed'
import Loading from '../Helper/Loading'
import Head from '../Helper/Head'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head 
          title="Fotos" 
          /* description="Home do Site Dogs" */
      />
      <Feed />
    </section>
  )
}

export default Home
