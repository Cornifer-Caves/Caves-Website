import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>a-coolio-site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <body>
      <main>
        <Header title="Cornifer's Works" />
        <p className="description">
          The most recent of his videos, and video games
      </main>
    </body>
      <Footer />
    </div>
  )
}
