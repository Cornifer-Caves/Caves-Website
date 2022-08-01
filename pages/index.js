import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cornifer has a website?!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


<iframe src="https://itch.io/embed/1628145" width="640" height="640" frameborder="0"><a href="https://coolio-caves.itch.io/p0ng">p0ng by Cornifer_Caves</a></iframe>


      <Footer />
    </div>
  )
}
